const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const registerRoutes = require("./routes/register");
const verifyOtpRoutes = require("./routes/verifyOtp");
const rateLimiter = require("./middleware/rateLimit");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/verify-otp", verifyOtpRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
