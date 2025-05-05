require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");

const app = express();

// ===== Security Middleware =====
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Rate Limiting =====
const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100,
});
app.use(limiter);

// ===== Database Connection =====
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// ===== AWS SES SMTP Setup =====
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
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
    server: process.env.DOMAIN,
    environment: process.env.NODE_ENV,
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
      const [result] = await pool.execute(
        `INSERT INTO alumnifestival_2025 (
        name, f_name, email, Days, age, gender, cnic, institute, address, city, 
        contact, contact_ii, social_media, a_date, otp
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, f_name, email, Days, age, gender, cnic, institute || null, address, city, contact, contact_ii || null, social_media || null, a_date, otp]
      );

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: "Alumni 2025 Registration Confirmation",
        html: `
        <h2>Thank You for Registering for Alumni 2025!</h2>
        <p>Dear ${name},</p>
        <p>Your registration has been received. Below are your submission details:</p>
        <!-- Rest of your email template -->
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
  // ... (keep your existing OTP verification logic)
});

// OTP Resend Endpoint
app.post("/api/resend-otp", [body("email").isEmail().withMessage("Valid email is required")], async (req, res) => {
  // ... (keep your existing OTP resend logic)
});

// ===== Error Handling =====
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
  console.log(`Server running in ${process.env.NODE_ENV} mode`);
  console.log(`Listening on port ${PORT}`);
  console.log(`Domain: ${process.env.DOMAIN}`);
});
