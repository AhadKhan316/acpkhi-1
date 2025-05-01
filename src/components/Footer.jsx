import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

import acpFooterLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch("http://localhost/organization-website/backend/save_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setMessage({ type: "success", content: data.message });
        setEmail("");
      } else {
        setMessage({ type: "error", content: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", content: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks1 = [
    { id: 1, text: "About ACP", href: "#" },
    { id: 2, text: "Governing Body", href: "#" },
    { id: 3, text: "Venues", href: "#" },
    { id: 4, text: "Career", href: "#" },
    { id: 5, text: "Contact Us", href: "#" },
  ];

  const quickLinks2 = [
    { id: 1, text: "Aalmi Urdu Conference", href: "#" },
    { id: 2, text: "Pakistan Literature Festival", href: "#" },
    { id: 3, text: "Women Conference", href: "#" },
    { id: 4, text: "Pakistan Youth Festival", href: "#" },
  ];

  const socialLinks = [
    { id: 1, href: "https://www.facebook.com/ACPKHI/", icon: FaFacebookF },
    { id: 2, href: "https://www.instagram.com/acpkhiofficial", icon: FaInstagram },
    { id: 5, href: "https://www.linkedin.com/company/acpkhi", icon: FaLinkedin },
    { id: 4, href: "https://youtube.com/@acpkhi", icon: FaYoutube },
    { id: 3, href: "https://twitter.com/@acpkhi", icon: FaTwitter },
    { id: 5, href: "https://www.tiktok.com/@acpkhi", icon: FaTiktok },
  ];


  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Framer Motion variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  // Button pulse animation
  const buttonVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      id="footer"
      className="py-6 sm:py-6 bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-black pointer-events-none"></div> */}

      <div className="mx-4 px-4 sm:px-6 lg:px-8 relative border-t border-white/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1: Logo and Text */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            custom={0}
            variants={childVariants}
          >
            <img
              src={acpFooterLogo}
              alt="Arts Council Logo"
              className="h-auto max-h-44 sm:max-h-42 lg:max-h-78 w-auto object-contain"
            />
            <p className="text-gray-200 text-xl sm:text-xl lg:text-xl leading-relaxed max-w-md">
              We are a Non-Profit Organization dedicated to promoting Art & Culture.
            </p>
          </motion.div>

          {/* Column 2: Contact Info */}
          <motion.div
            className="flex flex-col mt-20"
            custom={1}
            variants={childVariants}
          >
            <div className="space-y-3 sm:space-y-4 w-full">
              <div className="flex items-start justify-center sm:justify-start">
                <span className="mr-2 text-[#B90602] flex-shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-xl sm:text-xl lg:text-xl text-white">UAN</p>
                  <p className="text-gray-200 text-base sm:text-sm max-w-xs">021-111-227-544
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <span className="mr-2 text-[#B90602] flex-shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-xl sm:text-xl lg:text-xl text-white">Email</p>
                  <p className="text-gray-200 text-base sm:text-sm max-w-xs">info@acpkhi.com</p>
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <span className="mr-2 text-[#B90602] flex-shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-xl sm:text-xl lg:text-xl text-white">Location</p>
                  <p className="text-gray-200 text-base sm:text-sm max-w-xs">
                    M.R. Kiyani Road, Karachi. Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Quick Links and Newsletter */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left mt-20"
            custom={2}
            variants={childVariants}
          >
            <div className="grid grid-cols-2 gap-10 sm:gap-10 sm:mb-10 w-full max-w-sm">
              <div>
                <ul className="space-y-3">
                  {quickLinks1.map((link, index) => (
                    <motion.li
                      key={link.id} x
                      custom={3 + index}
                      variants={childVariants}
                    >
                      <a
                        href={link.href}
                        className="font-bold text-base sm:text-base lg:text-base hover:text-white transition duration-300"
                      >
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  {quickLinks2.map((link, index) => (
                    <motion.li
                      key={link.id}
                      custom={8 + index}
                      variants={childVariants}
                    >
                      <a
                        href={link.href}
                        className="font-bold text-base sm:text-base lg:text-base hover:text-white transition duration-300"
                      >
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 w-full max-w-sm mt-10"
              custom={3}
              variants={childVariants}
            >
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-white transition-all duration-300 placeholder-gray-400"
                />
                {message.content && (
                  <p
                    className={`mt-2 text-xs sm:text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {message.content}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full sm:w-auto bg-[#B90602] text-white font-semibold py-3 px-6 rounded-md transition duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                  }`}
                whileHover={isLoading ? {} : { scale: 1.05 }}
                whileTap={isLoading ? {} : { scale: 0.95 }}
                animate={isLoading ? {} : "pulse"}
                variants={buttonVariants}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-600 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center"
          custom={13}
          variants={childVariants}
        >
          <p className="text-gray-300 text-base sm:text-sm">
            Copyright © Arts Council of Pakistan Karachi. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-3 space-x-3 sm:space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a

                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 sm:p-2.5 rounded-full bg-white shadow-md hover:bg-gray-200 transition duration-300"
                custom={14 + index}
                variants={iconVariants}
                whileHover="hover"
              >
                <link.icon target="_blank" className="h-6 w-6 sm:h-6 sm:w-6 text-[#B90602] group-hover:text-red-700" />
              </motion.a>
            ))}
            {/* {socialLinks.map(({ id, href, icon: Icon }, index) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))} */}
          </div>
        </motion.div>
      </div >
    </motion.footer >
  );
};

export default Footer;