import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const PlfContactUs = () => {
  return (
    <div className="bg-green-50 min-h-screen text-gray-900 pt-12">
      {/* Hero Section */}
      <section className="py-8 md:py-8 text-center">
        <div className="mx-4 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-green-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We’d love to hear from you. Get in touch with the Pakistan Literature Festival team.
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mb-4 mt-20">Our Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-800 w-5 h-5" />
                <div>
                  <p className="text-lg text-green-900">Email</p>
                  <a href="mailto:info@plf.org" className="text-green-900 hover:text-green-700 font-medium">
                    info@plf.org
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-800 w-5 h-5" />
                <div>
                  <p className="text-lg text-green-800">Phone</p>
                  <a href="tel:+923001234567" className="text-green-900 hover:text-green-700 font-medium">
                    +92 300 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-800 w-5 h-5" />
                <div>
                  <p className="text-lg text-green-800">Address</p>
                  <p className="text-green-900 font-medium">Lahore Literary Hub, Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { href: "#", icon: <FaFacebookF />, alt: "Facebook" },
                  { href: "#", icon: <FaInstagram />, alt: "Instagram" },
                  { href: "#", icon: <FaTiktok />, alt: "TikTok" },
                  { href: "#", icon: <FaYoutube />, alt: "YouTube" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white hover:text-green-400 text-lg"
                    aria-label={social.alt}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-green-900 text-white rounded-lg text-base font-medium hover:bg-green-800 transition-colors duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlfContactUs;