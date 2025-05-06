const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Make sure this path is correct
const transporter = require("../config/email");
const { validateRegistration } = require("../middleware/validate");

router.post("/register", validateRegistration, async (req, res) => {
  try {
    const { name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date } = req.body;

    const [existing] = await pool.query("SELECT id FROM alumnifestival_2025 WHERE email = ? OR cnic = ?", [email, cnic]);

    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email or CNIC already registered",
      });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store registration with OTP
    const [result] = await pool.query(
      `INSERT INTO alumnifestival_2025 (
        name, f_name, email, event_day, age, gender, cnic,
        institute, address, city, contact, contact_ii,
        social_media, application_date, otp, otp_expires
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date, otp, otpExpires]
    );

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "no-reply@acpkhi.com",
      to: email,
      subject: "Registration OTP Verification",
      html: `
        <h2>Registration Verification</h2>
        <p>Your OTP for registration is: <strong>${otp}</strong></p>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful, OTP sent to email",
      id: result.insertId,
      email: email,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

// New endpoint for OTP verification
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const [rows] = await pool.query("SELECT id, otp, otp_expires FROM alumnifestival_2025 WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    const registration = rows[0];

    if (new Date() > new Date(registration.otp_expires)) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired",
      });
    }

    if (registration.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Clear OTP and mark as verified
    await pool.query("UPDATE alumnifestival_2025 SET otp = NULL, otp_expires = NULL, is_verified = 1 WHERE id = ?", [registration.id]);

    res.json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({
      success: false,
      message: "OTP verification failed",
    });
  }
});

module.exports = router;
