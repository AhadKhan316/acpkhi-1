import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


import WcfLogo from '/src/assets/wcf-assets/wcf-logo.png';


function Footer() {
  return (
    <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={WcfLogo}
            alt="WCFK Footer Logo"
            className="h-32 mb-6"
          />
          <p className="text-sm text-gray-400 text-center md:text-left">
            ACPKHI © 2025. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
          <p className="text-gray-400">
            Arts Council of Pakistan, Karachi<br /><br />
            M.R. Kiyani Road, Karachi, Pakistan<br /><br />
            +92-300-0802391<br /><br />
            info@acpkhi.com
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-6">Newsletter</h4>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-2/3 py-3 px-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-6">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 text-xl transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 text-xl transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 text-xl transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 text-xl transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
        <p className="text-sm">
          ACPKHI © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;