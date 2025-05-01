import { motion } from "framer-motion";

import AucFooterLogo from "/src/assets/auc-assets/auc-logo.png"

const AucFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Calligraphic Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/300x300?text=Calligraphy')] opacity-5 bg-repeat" />

      {/* Glowing Accent Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-700 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo/Title */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={AucFooterLogo}
              alt="Arts Council Logo"
              className="w-36 h-30" // Slightly adjusted size for better proportion
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              Info
            </h3>
            <p className="text-sm text-[#D1D5DB] flex items-center mb-3">
              <svg
                className="w-5 h-5 mr-2 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              M.R. Kiyani Road, Karachi 74200, Pakistan
            </p>
            <p className="text-sm text-[#D1D5DB] flex items-center mb-3">
              <svg
                className="w-5 h-5 mr-2 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              info@acpkhi.com
            </p>
            <p className="text-sm text-[#D1D5DB] flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-red-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              +92-300-0802391
            </p>
          </motion.div>

          {/* Shows (Links) */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              Shows
            </h3>
            <ul className="text-base space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#D1D5DB] hover:text-red-700 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#D1D5DB] hover:text-red-700 transition duration-300"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#D1D5DB] hover:text-red-700 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#D1D5DB] hover:text-red-700 transition duration-300"
                >
                  Sessions
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              Social
            </h3>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-white hover:text-red-700 transition duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-red-700 transition duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                YouTube
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-red-700 transition duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-sm text-[#D1D5DB]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © Arts Council of Pakistan Karachi
        </motion.div>
      </div>
    </footer>
  );
};

export default AucFooter;