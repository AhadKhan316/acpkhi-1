import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import acpFooterLogo from "/src/assets/acp-logo-and-hero-img/Acp logo White down.png";
import acpFooterLogoSmall from "/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png";

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
    { id: 1, text: "About ACP", href: "#about" },
    { id: 2, text: "Governing Body", href: "GoverningBody" },
    { id: 3, text: "Sovapa", href: "sovapa" },
    { id: 4, text: "Facilities", href: "facilities" },
    { id: 5, text: "Career", href: "#" },
    { id: 6, text: "Contact Us", href: "ContactUs" },
  ];

  const quickLinks2 = [
    { id: 1, text: "World Culture Festival", href: "/festival/wcf" },
    { id: 2, text: "Aalmi Urdu Conference", href: "/festival/auc" },
    { id: 3, text: "Pakistan Literature Festival", href: "/festival/plf" },
    { id: 4, text: "Pakistan Theatre Festival", href: "/festival/ptf" },
    { id: 5, text: "Pakistan Youth Festival", href: "/festival/pyf" },
    { id: 6, text: "Women Conference", href: "/festival/wc" },
  ];

  const socialLinks = [
    { id: 1, href: "https://www.facebook.com/ACPKHI/", icon: FaFacebookF },
    { id: 2, href: "https://www.instagram.com/acpkhiofficial", icon: FaInstagram },
    { id: 3, href: "https://twitter.com/@acpkhi", icon: FaTwitter },
    { id: 4, href: "https://youtube.com/@acpkhi", icon: FaYoutube },
    { id: 5, href: "https://www.linkedin.com/company/acpkhi", icon: FaLinkedin },
    { id: 6, href: "https://www.tiktok.com/@acpkhi", icon: FaTiktok },
  ];

  const contactInfo = [
    { id: 1, label: "UAN", value: "021-111-227-544" },
    { id: 2, label: "Email", value: "info@acpkhi.com" },
    { id: 3, label: "Location", value: "M.R. Kiyani Road, Karachi. Pakistan." },
  ];

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
      id="footer"
      className="bg-gradient-to-b from-black to-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-start md:items-center border-b border-gray-700 py-6">
          <Link to="/" className="w-full md:w-auto text-left md:text-center">
            {/* Large screen logo (md and above) */}
            <motion.img
              src={acpFooterLogo}
              alt="Arts Council Logo Large"
              className="hidden md:block h-auto max-h-36 w-auto object-contain mx-0 md:mx-auto"
            />
            {/* Small screen logo (below md) */}
            <motion.img
              src={acpFooterLogoSmall}
              alt="Arts Council Logo Small"
              className="block md:hidden h-auto max-h-34 w-auto object-contain mx-0 md:mx-auto"
            />
          </Link>
          <h4 className="text-gray-300 text-base font-medium mt-4 mb-2 text-left md:text-center">
            Get Connected with Us
          </h4>
          <div className="flex space-x-4 justify-start md:justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                custom={1 + index}
                variants={iconVariants}
                whileHover="hover"
              >
                <link.icon className="h-7 w-7" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Quick Links 1 */}
          <motion.div custom={7} variants={childVariants}>
            <h3 className="font-bold text-lg mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks1.map((link, index) => (
                <motion.li key={link.id} custom={8 + index} variants={childVariants}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links 2 */}
          <motion.div custom={13} variants={childVariants}>
            <h3 className="font-bold text-lg mb-4 uppercase">Events</h3>
            <ul className="space-y-2">
              {quickLinks2.map((link, index) => (
                <motion.li key={link.id} custom={14 + index} variants={childVariants}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={18} variants={childVariants}>
            <h3 className="font-bold text-lg mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={19 + index}
                  variants={childVariants}
                  className="text-gray-400"
                >
                  <span className="font-medium">{item.label}:</span> {item.value}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div custom={22} variants={childVariants}>
            <h3 className="font-bold text-lg mb-4 uppercase">Newsletter</h3>
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
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-white transition-all placeholder-gray-400"
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#B90602] text-white font-semibold py-2 rounded transition ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"}`}
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
          className="border-t border-gray-700 pt-6 flex flex-col items-center"
          custom={25}
          variants={childVariants}
        >
          <p className="text-gray-400 text-sm mb-4">
            Copyright © Arts Council of Pakistan Karachi. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;