// src/components/PYFFooter.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import PyfFooterLogo from "/src/assets/pyf-assets/pyf-logo.png"

const PyfFooter = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Decorative Background Element */}
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Logo Section */}
        <motion.div
          className="flex flex-col items-center sm:items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={PyfFooterLogo}
            alt="PYF Logo"
            className="w-40 h-auto mb-4"
          />
          {/* <p className="text-sm text-gray-400 text-center sm:text-left">
            Pakistan Youth Festival
          </p> */}
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="text-center sm:text-left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center sm:justify-start">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>M.R. Kiyani Road, Karachi 74200, Pakistan</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@pyf.org" className="hover:text-green-400 transition-colors">
                info@pyf.org
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+923000802391" className="hover:text-green-400 transition-colors">
                Call Us: +92-300-0802391
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Shows Section */}
        <motion.div
          className="text-center sm:text-left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Shows</h3>
          <ul className="space-y-2">
            <li>
              <a href="/pyf/about-season" className="hover:text-green-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/pyf/artists" className="hover:text-green-400 transition-colors">
                Artists
              </a>
            </li>
            <li>
              <a href="/pyf/contact" className="hover:text-green-400 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/pyf/day-highlights" className="hover:text-green-400 transition-colors">
                Day Highlights
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Socials Section */}
        <motion.div
          className="text-center sm:text-left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © Pakistan Youth Festival. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PyfFooter;