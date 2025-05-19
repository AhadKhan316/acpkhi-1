const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Nodemailer transporter for AWS SES
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.SES_ACCESS_KEY,
    pass: process.env.SES_SECRET_KEY,
  },
});

// Validation middleware for registration
const validateRegistration = [body("name").trim().notEmpty().withMessage("Name is required"), body("f_name").trim().notEmpty().withMessage("Father's name is required"), body("email").isEmail().normalizeEmail().withMessage("Valid email is required"), body("age").isInt({ min: 1, max: 120 }).withMessage("Valid age is required"), body("cnic").isLength({ min: 13, max: 13 }).isNumeric().withMessage("CNIC must be 13 digits"), body("address").trim().notEmpty().withMessage("Address is required"), body("city").trim().notEmpty().withMessage("City is required"), body("contact").isLength({ min: 11, max: 11 }).isNumeric().withMessage("Valid 11-digit contact number is required"), body("Days").isIn(["day1", "day2", "day3", "all days"]).withMessage("Invalid day selection"), body("gender").isIn(["male", "female", "other"]).withMessage("Invalid gender selection")];

// Generate and store OTP
async function generateAndStoreOTP(email) {
  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  const connection = await pool.getConnection();
  try {
    await connection.query("INSERT INTO otps (email, otp, expires_at) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE otp = ?, expires_at = ?", [email, otp, expiresAt, otp, expiresAt]);
    return otp;
  } finally {
    connection.release();
  }
}

// Send OTP email
async function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Aalmi Urdu Conference Registration OTP",
    text: `Your OTP for registration is: ${otp}. This OTP is valid for 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
}

// Registration endpoint
app.post("/api/register", validateRegistration, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date } = req.body;

  const connection = await pool.getConnection();
  try {
    // Check if email or CNIC already exists
    const [existing] = await connection.query("SELECT email, cnic FROM registrations WHERE email = ? OR cnic = ?", [email, cnic]);

    if (existing.length > 0) {
      const errors = [];
      if (existing.some((row) => row.email === email)) {
        errors.push({ path: "email", msg: "Email already registered" });
      }
      if (existing.some((row) => row.cnic === cnic)) {
        errors.push({ path: "cnic", msg: "CNIC already registered" });
      }
      return res.status(400).json({ success: false, errors });
    }

    // Generate and send OTP
    const otp = await generateAndStoreOTP(email);
    await sendOTPEmail(email, otp);

    // Store registration data with pending status
    await connection.query(
      `INSERT INTO registrations (
        name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, f_name, email, Days, age, gender, cnic, institute || null, address, city, contact, contact_ii || null, social_media || null, a_date, "pending"]
    );

    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  } finally {
    connection.release();
  }
});

// OTP verification endpoint
app.post("/api/verify-otp", [body("email").isEmail().normalizeEmail().withMessage("Valid email is required"), body("otp").isLength({ min: 6, max: 6 }).isNumeric().withMessage("Valid OTP is required")], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email, otp } = req.body;
  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query("SELECT otp, expires_at FROM otps WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const { otp: storedOTP, expires_at } = rows[0];

    if (new Date() > new Date(expires_at)) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (storedOTP !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // Update registration status
    await connection.query("UPDATE registrations SET status = ? WHERE email = ?", ["verified", email]);

    // Clean up OTP
    await connection.query("DELETE FROM otps WHERE email = ?", [email]);

    res.json({ success: true, message: "Registration verified" });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  } finally {
    connection.release();
  }
});

// Resend OTP endpoint
app.post("/api/resend-otp", [body("email").isEmail().normalizeEmail().withMessage("Valid email is required")], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email } = req.body;
  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query("SELECT email FROM registrations WHERE email = ? AND status = ?", [email, "pending"]);

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: "No pending registration found" });
    }

    const otp = await generateAndStoreOTP(email);
    await sendOTPEmail(email, otp);

    res.json({ success: true, message: "OTP resent successfully" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  } finally {
    connection.release();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
