import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1]
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const stats = [
    { value: "70+", label: "Years of Legacy" },
    { value: "500+", label: "Annual Events" },
    { value: "1M+", label: "Annual Visitors" },
    { value: "80+", label: "Connected Countries" }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-blue-50"></div>
      </div>

      {/* Main content container with equal padding on all sides */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mx-auto max-w-7xl">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              variants={textVariants}
            >
              Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">We Are</span>
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
              variants={textVariants}
            >
              The Arts Council of Pakistan, Karachi is where artists, thinkers, and changemakers converge. Hosting over 200 annual events and collaborating with 40+ countries, ACPKHI stands as Pakistan's most dynamic force in arts and culture. From preserving traditions to pushing creative boundaries, we don't just host the arts — we connect with millions and shape the future through creativity.
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto my-8 sm:my-10 rounded-full"
              variants={dividerVariants}
            />
          </div>

          {/* Stats section with responsive grid and spacing */}
          <div className="mb-12 lg:mb-16 px-4 sm:px-0">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
              variants={textVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 sm:p-5 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-2">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;