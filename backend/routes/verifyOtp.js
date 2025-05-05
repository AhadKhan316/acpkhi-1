// const express = require("express");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const pool = require("../config/database");

// // Validation middleware
// const validateOtp = [body("email").isEmail().normalizeEmail().withMessage("Valid email is required"), body("otp").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits").isNumeric().withMessage("OTP must be numeric")];

// router.post("/", validateOtp, async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, message: "Validation failed", errors: errors.array() });
//   }

//   const { email, otp } = req.body;

//   const connection = await pool.getConnection();
//   try {
//     await connection.beginTransaction();

//     // Check OTP
//     const [user] = await connection.query("SELECT id, otp FROM alumnifestival_2025 WHERE email = ? AND otp = ? AND is_verified = FALSE", [email, otp]);

//     if (user.length === 0) {
//       throw Object.assign(new Error("Invalid OTP or already verified"), { status: 400 });
//     }

//     // Mark as verified
//     await connection.query("UPDATE alumnifestival_2025 SET is_verified = TRUE, otp = NULL WHERE email = ?", [email]);

//     await connection.commit();
//     res.status(200).json({ success: true, message: "OTP verified successfully" });
//   } catch (error) {
//     await connection.rollback();
//     next(error);
//   } finally {
//     connection.release();
//   }
// });

// module.exports = router;
