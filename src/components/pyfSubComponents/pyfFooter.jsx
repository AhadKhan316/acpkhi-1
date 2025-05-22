import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

// PYF Logo
import PyfFooterLogo from "/src/assets/pyf-assets/pyf-logo.png";
// ACP Logo (assumed to be the same as used in WCF Footer)
import AcpLogo from "/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png";
import centerimg from "/src/assets/auc-assets/Untitled-1.png";

const PyfFooter = () => {
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
    { id: 1, text: "About PYF", href: "#aboutPyf" },
    { id: 2, text: "Delegates", href: "#pyfDelegates" },
    { id: 4, text: "Highlighted Sessions", href: "#plfHighlightedSessions" },
    { id: 3, text: "Contact Us", href: "/festival/pyf/contactUs" },
  ];

  const quickLinks2 = [
    { id: 1, text: "Pakistan Youth Festival", href: "/festival/pyf" },
    { id: 2, text: "Aalmi Urdu Conference", href: "/festival/auc" },
    { id: 3, text: "World Culture Festival", href: "/festival/wcf" },
    { id: 4, text: "Pakistan Literature Festival", href: "/festival/plf" },
    { id: 5, text: "Pakistan Theatre Festival", href: "/festival/ptf" },
    { id: 6, text: "Women Conference", href: "/festival/wc" },
  ];

  const socialLinks = [
    { id: 1, href: "https://www.facebook.com/ACPKHI/", icon: FaFacebookF },
    { id: 2, href: "https://www.instagram.com/acpkhiofficial", icon: FaInstagram },
    { id: 3, href: "https://www.linkedin.com/company/acpkhi", icon: FaLinkedin },
    { id: 4, href: "https://youtube.com/@acpkhi", icon: FaYoutube },
    { id: 5, href: "https://twitter.com/@acpkhi", icon: FaTwitter },
    { id: 6, href: "https://www.tiktok.com/@acpkhi", icon: FaTiktok },
  ];

  const contactInfo = [
    { id: 1, label: "Location", value: "M.R. Kiyani Road, Karachi 74200, Pakistan", icon: null },
    { id: 2, label: "Email", value: "info@pyf.org", icon: null },
    { id: 3, label: "Phone", value: "+92-300-0802391", icon: null },
  ];

  // Framer Motion variants (same as WCF Footer)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      id="pyfFooter"
      className="bg-green-900 text-white py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Decorative Background Element (preserved from original) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" style={{ stopColor: "#b91c1c" }} />
              <stop offset="100%" style={{ stopColor: "transparent" }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center border-b border-gray-700 pb-4">
          {/* ACP x PYF Logo */}
          <div className="flex items-center gap-2 h-full">
            <Link to="/" className="h-full flex items-center">
              <img
                src={AcpLogo}
                alt="ACP Logo"
                className="object-contain w-auto max-h-[130px] max-w-[200px] sm:max-h-[200px] lg:max-h-[200px]"
              />
            </Link>


            <Link to="/" className="h-full flex items-center">
              <img
                src={centerimg}
                alt="Line"
                className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
              />
            </Link>



            <Link to="/festival/pyf" className="h-full flex items-center">
              <img
                src={PyfFooterLogo}
                alt="Pakistan Youth Festival Logo"

                className="object-contain w-auto max-h-[150px] max-w-[90px] sm:max-h-[150px] lg:max-h-[150px]"
              />
            </Link>
          </div>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
                custom={1 + index}
                variants={iconVariants}
                whileHover="hover"
              >
                <link.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {/* Quick Links 1 */}
          <motion.div custom={7} variants={childVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks1.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={8 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links 2 (Events) */}
          <motion.div custom={13} variants={childVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4 uppercase">Events</h3>
            <ul className="space-y-2">
              {quickLinks2.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={14 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={18} variants={childVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={19 + index}
                  variants={childVariants}
                  className="flex items-start"
                >
                  <span className="text-gray-400">{item.label}: </span>
                  <span className="text-gray-400 ml-1">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={22} variants={childVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4 uppercase">Newsletter</h3>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
              custom={23}
              variants={childVariants}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 bg-green-800 border border-green-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all placeholder-gray-400"
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-green-600 text-white font-semibold py-2 rounded transition ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"}`}
                whileHover={isLoading ? {} : { scale: 1.05 }}
                whileTap={isLoading ? {} : { scale: 0.95 }}
                animate={isLoading ? {} : "pulse"}
                variants={buttonVariants}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </motion.button>
              {message.content && (
                <p className={`mt-2 text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                  {message.content}
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
          custom={25}
          variants={childVariants}
        >
          <p>Copyright © Pakistan Youth Festival. All Rights Reserved.</p>
          {/* <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                custom={1 + index}
                variants={iconVariants}
                whileHover="hover"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default PyfFooter;