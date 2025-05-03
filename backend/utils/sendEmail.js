const nodemailer = require("nodemailer");

// Function to send OTP email
const sendOtpEmail = async (toEmail, otp) => {
  // Create a transporter using AWS SES SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: '"Your Event Name" noreply@acpkhi.com', // Sender address (must be verified in SES)
    to: toEmail,
    subject: "Your OTP for Registration",
    text: `Your OTP for registration is: ${otp}. It is valid for 10 minutes.`,
    html: `<p>Your OTP for registration is: <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send OTP email");
  }
};

module.exports = { sendOtpEmail };
