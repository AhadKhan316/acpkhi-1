import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import WcFooterLogo from "/src/assets/wc-assets/wc-logo.png";


const WcFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img
              src={WcFooterLogo}
              alt="Women's Conference Logo"
              className="w-24 h-24"
            />
          </div>

          {/* Sections Container */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            {/* Info Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Info</h3>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>M.R. Kiyani Road, Karachi 74200, Pakistan</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>Call Us: +92-21-99213090-1</span>
              </div>
            </div>

            {/* Chapters Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Chapters</h3>
              <ul className="list-none">
                <li>4th Women Conference</li>
                <li>3rd Women Conference</li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Socials</h3>
              <ul className="list-none">
                <li>Facebook</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-6 border-white/50" />

        {/* Bottom Section */}
        <div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Women Conference Text */}
          <p className="text-center mb-2">Women Conference</p>

          {/* Privacy Policy and Copyright */}
          <p className="text-center text-sm">
            <a
              href="/privacy-policy"
              className="underline hover:text-pink-400"
            >
              Privacy Policy
            </a>{" "}
            | Copyright © Arts Council of Pakistan Karachi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WcFooter;