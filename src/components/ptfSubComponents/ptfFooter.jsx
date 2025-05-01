import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import PtfFooterLogo from "/src/assets/ptf-assets/ptf-logo.png";

const PtfFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center mb-4">
            {/* Placeholder for logo icon */}
            <div className="h-30 w-55 mr-2">
              <img src={PtfFooterLogo} alt="Footer Logo" className="w-full h-full object-cover rounded" />
            </div>
            {/* <h2 className="text-xl font-bold text-white">
              Pakistan <span className="text-red-700">Theatre</span> Festival
            </h2> */}
          </div>
          <p className="text-gray-400 text-sm">
            Celebrating Arts & Culture
          </p>
        </div>

        {/* Get in Touch Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" />
              <span>Lahore Arts Council, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-white mr-2" />
              <span>+92-300-1234567</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-white mr-2" />
              <span>info@ptf.org</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-700 transition-colors duration-300"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-700 transition-colors duration-300"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-700 transition-colors duration-300"
            >
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Your Email</h3>
          <form className="flex flex-col sm:flex-row w-full max-w-sm space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-2/3 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-1/3 bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
        PTF © 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default PtfFooter;