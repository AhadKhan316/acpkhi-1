// const nodemailer = require("nodemailer");
// require('dotenv').config();

// // Configure transporter for Mailtrap (local testing)
// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASS,
//   },
// });

// // Function to send OTP email
// const sendOtpEmail = async (toEmail, otp) => {
//   const mailOptions = {
//     from: '"Your Event Name" anuskhalil77@gmail.com',
//     to: toEmail,
//     subject: "Your OTP for Registration",
//     text: `Your OTP for registration is: ${otp}. It is valid for 10 minutes.`,
//     html: `<p>Your OTP for registration is: <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
//   };

//   try {
//     await transporter.verify();
//     console.log("SMTP connection verified successfully");

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.messageId);
//     return true;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send OTP email: " + error.message);
//   }
// };

// module.exports = { sendOtpEmail };



// const nodemailer = require("nodemailer");

// // Function to send OTP email
// const sendOtpEmail = async (toEmail, otp) => {
//   // Create a transporter using AWS SES SMTP settings
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: '"Your Event Name" noreply@acpkhi.com', // Sender address (must be verified in SES)
//     to: toEmail,
//     subject: "Your OTP for Registration",
//     text: `Your OTP for registration is: ${otp}. It is valid for 10 minutes.`,
//     html: `<p>Your OTP for registration is: <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
//   };

//   // Send the email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.messageId);
//     return true;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send OTP email");
//   }
// };

// module.exports = { sendOtpEmail };
