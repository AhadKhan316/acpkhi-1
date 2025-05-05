require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");

const app = express();

// ===== Middleware Setup =====
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // 100 requests per window
});
app.use(limiter);

// ===== Database Connection Pool =====
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "alumni_event",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Test database connection
pool
  .getConnection()
  .then(() => console.log("Connected to MySQL"))
  .catch((err) => {
    console.error("MySQL connection error:", err);
    process.exit(1);
  });

// ===== Nodemailer Setup =====
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP connection
transporter.verify((error) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

// ===== Helper Functions =====
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ===== API Routes =====

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    server: process.env.DOMAIN || "localhost",
    environment: process.env.NODE_ENV || "development",
  });
});

// Registration Endpoint
app.post(
  "/api/register",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("f_name").trim().notEmpty().withMessage("Father's name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("age").isInt({ min: 1, max: 120 }).withMessage("Valid age is required"),
    body("cnic").isLength({ min: 13, max: 13 }).withMessage("CNIC must be 13 digits"),
    body("address").trim().notEmpty().withMessage("Address is required"),
    body("city").trim().notEmpty().withMessage("City is required"),
    body("contact")
      .matches(/^\d{11}$/)
      .withMessage("Valid 11-digit contact number is required"),
    body("Days").isIn(["day1", "day2", "day3", "all days"]).withMessage("Invalid day selection"),
    body("gender").isIn(["male", "female", "other"]).withMessage("Invalid gender selection"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date } = req.body;
    const otp = generateOTP();

    try {
      await pool.execute(
        `INSERT INTO alumnifestival_2025 (
          name, f_name, email, Days, age, gender, cnic, institute, address, city, 
          contact, contact_ii, social_media, a_date, otp
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, f_name, email, Days, age, gender, cnic, institute || null, address, city, contact, contact_ii || null, social_media || null, a_date, otp]
      );

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || "Alumni 2025 Team"}" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Alumni 2025 Registration Confirmation",
        html: `
          <h2>Thank You for Registering for Alumni 2025!</h2>
          <p>Dear ${name},</p>
          <p>Your registration has been received. Below are your submission details:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Father's Name:</strong> ${f_name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Day(s):</strong> ${Days}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Gender:</strong> ${gender}</li>
            <li><strong>CNIC:</strong> ${cnic}</li>
            ${institute ? `<li><strong>Institute:</strong> ${institute}</li>` : ""}
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Contact (Primary):</strong> ${contact}</li>
            ${contact_ii ? `<li><strong>Contact (Secondary):</strong> ${contact_ii}</li>` : ""}
            ${social_media ? `<li><strong>Social Media:</strong> ${social_media}</li>` : ""}
            <li><strong>Submission Date:</strong> ${new Date(a_date).toLocaleString()}</li>
          </ul>
          <p><strong>Your OTP for verification:</strong> ${otp}</p>
          <p>Please use this OTP to verify your registration.</p>
          <p>Best regards,<br/>Alumni 2025 Team</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Registration successful. OTP sent to email." });
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).json({ success: false, message: "Registration failed. Please try again." });
    }
  }
);

// OTP Verification Endpoint
app.post("/api/verify-otp", [body("email").isEmail().withMessage("Valid email is required"), body("otp").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits")], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email, otp } = req.body;

  try {
    const [rows] = await pool.query(
      `SELECT otp FROM alumnifestival_2025 
         WHERE email = ? 
         ORDER BY a_date DESC 
         LIMIT 1`,
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "No registration found for this email." });
    }

    if (rows[0].otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    await pool.execute(`UPDATE alumnifestival_2025 SET otp = NULL WHERE email = ? AND otp = ?`, [email, otp]);

    res.status(200).json({ success: true, message: "OTP verified successfully." });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, message: "OTP verification failed. Please try again." });
  }
});

// OTP Resend Endpoint
app.post("/api/resend-otp", [body("email").isEmail().withMessage("Valid email is required")], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email } = req.body;

  try {
    const [rows] = await pool.query(`SELECT name FROM alumnifestival_2025 WHERE email = ? ORDER BY a_date DESC LIMIT 1`, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "No registration found for this email." });
    }

    const name = rows[0].name;
    const otp = generateOTP();

    await pool.execute(`UPDATE alumnifestival_2025 SET otp = ? WHERE email = ? ORDER BY a_date DESC LIMIT 1`, [otp, email]);

    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || "Alumni 2025 Team"}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Alumni 2025 - New OTP for Registration Verification",
      html: `
          <h2>New OTP for Alumni 2025 Registration</h2>
          <p>Dear ${name},</p>
          <p>We have generated a new OTP for your registration verification.</p>
          <p><strong>Your new OTP:</strong> ${otp}</p>
          <p>Please use this OTP to verify your registration.</p>
          <p>Best regards,<br/>Alumni 2025 Team</p>
        `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "New OTP sent to your email." });
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).json({ success: false, message: "Failed to resend OTP. Please try again." });
  }
});

// ===== Error Handling Middleware =====
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ===== Server Startup =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode`);
  console.log(`Listening on port ${PORT}`);
  console.log(`Domain: ${process.env.DOMAIN || "localhost"}`);
});
