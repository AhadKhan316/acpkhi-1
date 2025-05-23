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
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-blue-50"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            variants={textVariants}
          >
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600"> We Are</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8 rounded-full"
            variants={dividerVariants}
          />

          <motion.p
            className="text-lg leading-relaxed text-gray-700 text-center px-2"
            variants={textVariants}
          >
            The Arts Council of Pakistan, Karachi is where artists, thinkers, and changemakers converge. Hosting over 500+ annual events and collaborating with 80+ countries, ACPKHI stands as Pakistan's most dynamic force in arts and culture. From preserving traditions to pushing creative boundaries, we don't just host the arts — we connect with millions and shape the future through creativity.
          </motion.p>
        </div>

        <div className="mb-12">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
            variants={textVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;