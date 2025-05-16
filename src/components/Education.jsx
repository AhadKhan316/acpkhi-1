import React from "react";
import { motion } from "framer-motion";
import educationimg from "/src/assets/acp-logo-and-hero-img/education-support.jpg"

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.1, 0.8, 0.2, 1] }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-yellow-600 opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400"
            variants={textVariants}
          >
            Community Engagement
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-300"
            variants={textVariants}
          >
            Innovative learning methodologies that transform students into industry-ready professionals
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <motion.div 
            className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
            <div 
              className="w-full h-full"
              style={{ backgroundImage: `url(${educationimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Hands-on Learning</h3>
              <p className="text-gray-200">Real-world projects and practical experience</p>
            </div>
          </motion.div>

          {/* Cards section */}
          <div className="space-y-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700/50"
              variants={cardVariants}
            >
              <div className="flex items-start mb-4">
                <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SOVAPA</h3>
                  <p className="text-gray-300 mb-4">World-class courses designed with industry leaders in arts and design.</p>
                  <a 
                    href="/sovapa" 
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700/50"
              variants={cardVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tech Programme - District Central</h3>
                  <p className="text-gray-300 mb-4">Modern courses designed to increase chances of employability.</p>
                  <a 
                    href="#district-it" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Explore More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700/50"
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Arts Education Programmes - Sindh Arts Councils</h3>
                  <p className="text-gray-300 mb-4">Music and fine arts courses made available to students from various districts of Sindh</p>
                  <a 
                    href="#sindh-education" 
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
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