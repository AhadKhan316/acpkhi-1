import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

// PLF Logo
import PlfFooterLogo from "/src/assets/plf-assets/plf-logo.png";
// ACP Logo (assumed to be the same as used in WCF Footer)
import AcpLogo from "/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png";

import centerimg from "/src/assets/auc-assets/Untitled-1.png";

const PlfFooter = () => {
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
    { id: 1, text: "About PLF", href: "/festival/plf/about" },
    { id: 2, text: "Delegates", href: "/festival/plf/delegates" },
    { id: 3, text: "Higlighted Sessions", href: "#plfHighlightedSessions" },
    { id: 4, text: "Chapters", href: "#ourChapters" },
    { id: 5, text: "Our Partners", href: "#ourPartners" },
    { id: 6, text: "Contact Us", href: "/festival/plf/contactUs" },
  ];

  const quickLinks2 = [
    { id: 1, text: "Pakistan Literature Festival", href: "/festival/plf" },
    { id: 2, text: "Aalmi Urdu Conference", href: "/festival/auc" },
    { id: 3, text: "World Culture Festival", href: "/festival/wcf" },
    { id: 4, text: "Pakistan Theatre Festival", href: "/festival/ptf" },
    { id: 5, text: "Pakistan Youth Festival", href: "/festival/pyf" },
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
    { id: 1, label: "Phone", value: "+92-221-99213090-1", icon: "phone" },
    { id: 2, label: "Email", value: "info@acpkhi.com", icon: "email" },
    { id: 3, label: "Location", value: "M.R. Kiyani Road, Karachi, Pakistan", icon: "location" },
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
      id="plfFooter"
      className="relative bg-gray-900 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Wave Background (preserved from original) */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-32 sm:h-48 text-green-800/30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,245.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        {/* Gradient Overlay (preserved from original) */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center border-b border-green-800/30 pb-4">
          {/* ACP x PLF Logo */}
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

            <Link to="/festival/plf" className="h-full flex items-center">
              <img
                src={PlfFooterLogo}
                alt="Pakistan Literature Festival Logo"

                className="object-contain w-auto max-h-[150px] max-w-[75px] sm:max-h-[150px] lg:max-h-[150px]"
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
                className="text-gray-300 hover:text-green-400 transition"
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
            <h3 className="font-bold text-lg sm:text-xl text-green-400 mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks1.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={8 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-gray-300 hover:text-green-400 transition">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links 2 (Events) */}
          <motion.div custom={13} variants={childVariants}>
            <h3 className="font-bold text-lg sm:text-xl text-green-400 mb-4 uppercase">Events</h3>
            <ul className="space-y-2">
              {quickLinks2.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={14 + index}
                  variants={childVariants}
                >
                  <a href={link.href} className="text-gray-300 hover:text-green-400 transition">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={18} variants={childVariants}>
            <h3 className="font-bold text-lg sm:text-xl text-green-400 mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={19 + index}
                  variants={childVariants}
                  className="flex items-start"
                >
                  <span className="text-gray-300">{item.label}: </span>
                  <span className="text-gray-300 ml-1">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={22} variants={childVariants}>
            <h3 className="font-bold text-lg sm:text-xl text-green-400 mb-4 uppercase">Newsletter</h3>
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
                className="w-full p-2 bg-green-800/20 border border-green-800/30 rounded text-white text-sm focus:outline-none focus:border-green-400 transition-all placeholder-gray-300"
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
          className="mt-12 pt-8 border-t border-green-800/30 text-center"
          custom={25}
          variants={childVariants}
        >
          <p className="text-sm sm:text-base text-gray-400">
            Pakistan Literature Festival
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Privacy Policy © Arts Council of Pakistan Karachi.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default PlfFooter;