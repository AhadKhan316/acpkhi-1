import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  const socialLinks = [
    { id: 1, href: "https://facebook.com", icon: FaFacebookF },
    { id: 2, href: "https://instagram.com", icon: FaInstagram },
    { id: 3, href: "https://linkedin.com", icon: FaLinkedinIn },
    { id: 4, href: "https://youtube.com", icon: FaYoutube },
  ];

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="social-media"
      className="py-6 sm:py-6 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none"></div> */}

      <div className="mx-4 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-gradient-to-b from-white/25 to-gray rounded-xl overflow-hidden mx-auto group  group-hover:border-gray-700 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="p-6 sm:p-6 md:p-6 lg:p-6 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3"
              custom={0}
              variants={childVariants}
            >
              Connect with Us
            </motion.h2>
            <motion.p
              className="text-black italic text-sm sm:text-base mb-6 sm:mb-8"
              custom={1}
              variants={childVariants}
            >
              Follow Us for Updates and Events
            </motion.p>
            <motion.div
              // className="h-1 w-20 bg-black mx-auto mb-8 sm:mb-10 rounded"
              custom={2}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            ></motion.div>
            <div className="flex justify-center gap-6 sm:gap-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <div className="p-4 sm:p-5 rounded-full bg-black shadow-lg relative overflow-hidden">
                    <link.icon className="text-white text-xl sm:text-2xl group-hover:text-white transition-colors duration-300" />
                    {/* Ripple Effect */}
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialMedia;