import React from "react";
import { motion } from "framer-motion";
import educationimg from "/src/assets/acp-logo-and-hero-img/education-support.jpg";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.1, 0.8, 0.2, 1] },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-600 opacity-10 blur-3xl hidden lg:block"></div>
      </div>

      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400"
            variants={textVariants}
          >
            Learn With Us
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300"
            variants={textVariants}
          >
            Our learning programmes are tailored to your needs
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image section */}
          <motion.div
            className="relative h-74 sm:h-80 md:h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-6 md:mb-0"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
            <div
              className="w-full h-full"
              style={{ backgroundImage: `url(${educationimg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 z-20">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">SOVAPA</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-200">School of Visual and Performing Arts</p>
            </div>
          </motion.div>

          {/* Cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Card 1: Music */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Music</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Immerse yourself in the world of sound with our comprehensive music programs.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Theatre */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-4 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-red-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1m0 16v-2.5m0 0l-2 1m2-1l2 1m-2 1v2.5M20 18l-2-1m2 1l2-1m-2 1v2.5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Theatre</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Bring stories to life through our dynamic theatre arts curriculum.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Dance */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-4 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Dance</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Express yourself through movement with our diverse dance programs.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Fine Arts */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-4 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start">
                <div className="bg-green-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Fine Arts</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Create stunning visual art with our fine arts training and mentorship.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Textile Design */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-4 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Textile Design</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Design innovative fabrics and patterns with our textile design courses.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 6: Graphic Design */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700/50 mb-4 sm:mb-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start">
                <div className="bg-pink-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Graphic Design</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Master visual communication with our cutting-edge graphic design programs.</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors text-sm sm:text-base"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;