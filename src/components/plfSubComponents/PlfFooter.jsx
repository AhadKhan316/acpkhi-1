import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import PlfFooterLogo from "/src/assets/plf-assets/plf-logo.png";

const PlfFooter = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Wave Background */}
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <motion.div
              className="relative w-50 h-50 rounded-full bg-green-800/20 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>
                <Link to="/festival/plf">
                  <img
                    src={PlfFooterLogo}
                    alt="PLF Logo"
                    className="h-auto w-50 mr-2 transform hover:scale-110 transition duration-300"
                  />

                </Link>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-green-400/30 group-hover:border-green-400/50 transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4">
              Info
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              M.R. Kiyani Road, Karachi 74200, Pakistan.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Call Us: +92-221-99213090-1
            </p>
          </div>

          {/* Chapters Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4">
              Chapters
            </h3>
            <ul className="space-y-2">
              {["Quetta", "Sukkur", "Muzaffarabad", "Lahore"].map((chapter) => (
                <li key={chapter}>
                  <motion.a
                    href="#"
                    className="text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {chapter}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4">
              Socials
            </h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xl sm:text-2xl">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-green-800/30 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            Pakistan Literary Festival
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Privacy Policy © Arts Council of Pakistan Karachi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlfFooter;