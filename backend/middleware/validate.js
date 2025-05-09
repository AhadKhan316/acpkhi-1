const { body, validationResult } = require("express-validator");

const validateRegistration = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("f_name").trim().notEmpty().withMessage("Father's name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("Days").isIn(["day1", "day2", "day3", "all days"]).withMessage("Invalid day selection"),
  body("age").isInt({ min: 1, max: 120 }).withMessage("Valid age is required"),
  body("gender").isIn(["male", "female", "other"]).withMessage("Invalid gender selection"),
  body("cnic")
    .matches(/^\d{13}$/)
    .withMessage("CNIC must be 13 digits"),
  body("address").trim().notEmpty().withMessage("Address is required"),
  body("city").trim().notEmpty().withMessage("City is required"),
  body("contact")
    .matches(/^\d{11}$/)
    .withMessage("Contact must be 11 digits"),
  body("contact_ii")
    .optional()
    .matches(/^\d{11}$/)
    .withMessage("Secondary contact must be 11 digits"),
  body("a_date").isISO8601().withMessage("Invalid date format"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((err) => ({
          path: err.param,
          msg: err.msg,
        })),
      });
    }
    next();
  },
];

module.exports = { validateRegistration };
