const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const pool = require("../config/database");
const { sendOtpEmail } = require("../utils/sendEmail");

// Validation middleware
const validateRegistration = [body("name").trim().notEmpty().withMessage("Name is required").escape(), body("f_name").trim().notEmpty().withMessage("Father's name is required").escape(), body("email").isEmail().normalizeEmail().withMessage("Valid email is required"), body("Days").isIn(["day1", "day2", "day3", "all days"]).withMessage("Invalid day selection"), body("age").isInt({ min: 1, max: 120 }).withMessage("Valid age (1-120) is required"), body("gender").isIn(["male", "female", "other"]).withMessage("Invalid gender selection"), body("cnic").isLength({ min: 13, max: 13 }).withMessage("CNIC must be 13 digits").isNumeric().withMessage("CNIC must be numeric"), body("address").trim().notEmpty().withMessage("Address is required").escape(), body("city").trim().notEmpty().withMessage("City is required").escape(), body("contact").isLength({ min: 11, max: 11 }).withMessage("Contact must be 11 digits").isNumeric().withMessage("Contact must be numeric"), body("contact_ii").optional().isLength({ min: 11, max: 11 }).withMessage("Secondary contact must be 11 digits").isNumeric().withMessage("Secondary contact must be numeric"), body("social_media").optional().trim().escape(), body("a_date").isISO8601().withMessage("Invalid date format")];

// Generate a 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Registration endpoint" });
});

// Registration endpoint
router.post("/", validateRegistration, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: "Validation failed", errors: errors.array() });
  }

  const { name, f_name, email, Days, age, gender, cnic, institute, address, city, contact, contact_ii, social_media, a_date } = req.body;

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const [existing] = await connection.query("SELECT id FROM alumnifestival_2025 WHERE email = ? OR cnic = ?", [email, cnic]);
    if (existing.length > 0) {
      throw Object.assign(new Error("Email or CNIC already registered"), { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedCNIC = await bcrypt.hash(cnic, salt);

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // OTP valid for 10 minutes
    const uniqueCode = `REG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    await connection.query(
      `INSERT INTO alumnifestival_2025 (
        name, f_name, email, Days, age, gender, cnic, institute, address, city, 
        contact, contact_ii, social_media, a_date, otp, otp_expiry, uniqueCode, is_verified
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, f_name, email, Days, age, gender, hashedCNIC, institute || null, address, city, contact, contact_ii || null, social_media || null, a_date, otp, otpExpiry, uniqueCode, false]
    );

    await sendOtpEmail(email, otp);

    await connection.commit();

    res.status(200).json({ success: true, message: "Registration successful. Please verify your OTP." });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

module.exports = router;
