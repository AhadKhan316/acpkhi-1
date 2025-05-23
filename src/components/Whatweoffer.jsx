import React from "react";
import { motion } from "framer-motion";
import WhatweofferImage from "/src/assets/acp-logo-and-hero-img/venues .jpg";

const Whatweoffer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${WhatweofferImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8 py-24 sm:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="mb-10" variants={fadeIn}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight"
              variants={textVariants}
            >
              What <span className="text-red-500">We Offer  </span>
            </motion.h2>

            <motion.div
              className="w-20 h-1 bg-red-500 mx-auto mb-6"
              variants={textVariants}
            />

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
              variants={textVariants}
            >

              We deliver one-stop innovative solutions that keep the arts alive, empower communities and drive measurable global impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={fadeIn}
          >
            {/* Service Card 1 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-red-400/30 transition-all text-center"
              whileHover={{ y: -10 }}
              variants={textVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="text-red-400 mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">World-Class Facilities</h3>
              <p className="text-gray-300">We house world-class venues and facilities that provide customised solutions to help your artistic dreams take flight.</p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-red-400/30 transition-all text-center"
              whileHover={{ y: -10 }}
              variants={textVariants}
            >
              <div className="text-red-400 mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Community Empowerment
              </h3>
              <p className="text-gray-300">Our programmes provide our people millions of tailor-made opportunities</p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 hover:border-red-400/30 transition-all text-center"
              whileHover={{ y: -10 }}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="text-red-400 mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Global Footprint</h3>
              <p className="text-gray-300">Initiatives that create measurable, positive change across borders.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whatweoffer;
