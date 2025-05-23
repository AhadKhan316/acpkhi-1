import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

// WC Logo
import WcFooterLogo from "/src/assets/wc-assets/wc-logo.png";
// ACP Logo (assumed to be the same as used in WCF Footer)
import AcpLogo from "/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png";

import centerimg from "/src/assets/auc-assets/Untitled-1.png";

const WcFooter = () => {
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
    { id: 1, text: "About WC", href: "#aboutWc" },
    { id: 2, text: "4th Women Conference", href: "#" },
    { id: 3, text: "3rd Women Conference", href: "#" },
    { id: 4, text: "Delegates", href: "#wcDelegates" },
    { id: 5, text: "Explore Categories", href: "#wcCategories" },
    { id: 6, text: "Highlighted Sessions", href: "#wcHighlightedSessions" },
    { id: 7, text: "Contact Us", href: "/festival/wc/contactUs" },
  ];

  const quickLinks2 = [
    { id: 1, text: "Women Conference", href: "/festival/wc" },
    { id: 2, text: "Aalmi Urdu Conference", href: "/festival/auc" },
    { id: 3, text: "World Culture Festival", href: "/festival/wcf" },
    { id: 4, text: "Pakistan Literature Festival", href: "/festival/plf" },
    { id: 5, text: "Pakistan Theatre Festival", href: "/festival/ptf" },
    { id: 6, text: "Pakistan Youth Festival", href: "/festival/pyf" },
  ];

  const socialLinks = [
    { id: 1, href: "https://www.facebook.com/ACPKHI/", icon: FaFacebook },
    { id: 2, href: "https://www.instagram.com/acpkhiofficial", icon: FaInstagram },
    { id: 3, href: "https://www.linkedin.com/company/acpkhi", icon: FaLinkedin },
    { id: 4, href: "https://youtube.com/@acpkhi", icon: FaYoutube },
    { id: 5, href: "https://twitter.com/@acpkhi", icon: null },
    { id: 6, href: "https://www.tiktok.com/@acpkhi", icon: FaTiktok },
  ];

  const contactInfo = [
    { id: 1, label: "Location", value: "M.R. Kiyani Road, Karachi 74200, Pakistan", icon: FaMapMarkerAlt },
    { id: 2, label: "Phone", value: "Call Us: +92-21-99213090-1", icon: FaPhone },
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
      id="wcFooter"
      className="bg-gray-900 text-white py-8 px-4 sm:px-6 md:px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center border-b border-white/50 pb-4">
          {/* ACP x WC Logo */}
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



            <Link to="/festival/wc" className="h-full flex items-center">
              <img
                src={WcFooterLogo}
                alt="Women Conference Logo"
                className="object-contain w-auto max-h-[150px] max-w-[70px] sm:max-h-[150px] lg:max-h-[150px]"
              />
            </Link>
          </div>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
              link.icon && (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:scale-110 transition-transform"
                  custom={1 + index}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <link.icon size={24} />
                </motion.a>
              )
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {/* Quick Links 1 */}
          <motion.div custom={7} variants={childVariants}>
            <h3 className="text-lg font-bold mb-2 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks1.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={8 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-white hover:text-pink-400 transition-colors">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links 2 (Events) */}
          <motion.div custom={13} variants={childVariants}>
            <h3 className="text-lg font-bold mb-2 uppercase">Events</h3>
            <ul className="space-y-2">
              {quickLinks2.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={14 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-white hover:text-pink-400 transition-colors">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={18} variants={childVariants}>
            <h3 className="text-lg font-bold mb-2 uppercase">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={19 + index}
                  variants={childVariants}
                  className="flex items-start"
                >
                  <item.icon className="mr-2" />
                  <span className="text-white">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={22} variants={childVariants}>
            <h3 className="text-lg font-bold mb-2 uppercase">Newsletter</h3>
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
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all placeholder-gray-400"
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-pink-600 text-white font-semibold py-2 rounded transition ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-500"}`}
                whileHover={isLoading ? {} : { scale: 1.05 }}
                whileTap={isLoading ? {} : { scale: 0.95 }}
                animate={isLoading ? {} : "pulse"}
                variants={buttonVariants}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </motion.button>
              {message.content && (
                <p className={`mt-2 text-sm ${message.type === "success" ? "text-green-500" : "text-pink-400"}`}>
                  {message.content}
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/50 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
          custom={25}
          variants={childVariants}
        >
          <p className="text-center sm:text-left">
            <a href="/privacy-policy" className="underline hover:text-pink-400">
              Privacy Policy
            </a>{" "}
            | Copyright © Arts Council of Pakistan Karachi
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default WcFooter;