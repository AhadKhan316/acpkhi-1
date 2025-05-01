import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Placeholder image for the president's photo (replace with actual WC asset)
const presidentImage = "https://placehold.co/600x400";

const WcPresidentMessage = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-pink-50 to-white relative overflow-hidden">
      {/* Decorative Blur Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold text-pink-800 mb-6 relative">
              Message By
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-pink-600 rounded-full" />
            </h2>
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-pink-800 mb-6 relative">
              Muhammad Ahmed Shah (HI , SI)
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-pink-600 rounded-full" />
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I believe in showcasing the bright face of Pakistan to the world, but I also recognize that this brightness cannot truly shine until all members of our society have access to their full rights. Women's empowerment, recognizing that their success is key to unlocking Pakistan's full potential. At the Arts Council, we are committed to supporting women in the arts and beyond, providing them with the resources and opportunities they need to thrive. I strongly believe that by empowering women, we can build a brighter future for all of Pakistan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg text-base font-medium hover:bg-pink-500 transition-colors duration-300 w-fit"
            >
              <Link to="/wc/register">Join the Conference</Link>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={presidentImage}
              alt="President's Photo"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300 rounded-full opacity-30 blur-xl z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WcPresidentMessage;