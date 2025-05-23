import React from "react";
import { motion } from "framer-motion";
import Producationsimg from "/src/assets/acp-logo-and-hero-img/Producationsimg.png";
const ProductionMessage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const parallaxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="production-message"
      className="bg-white py-12 sm:py-6 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-4 ">
        {/* Modern Image & Text Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Enhanced Image Section with Parallax Effect */}
            <motion.div
              className="relative h-80 sm:h-96 lg:h-[600px] overflow-hidden"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0"
                variants={parallaxVariants}
                whileInView={{
                  y: ["0%", "-20%"],
                  transition: {
                    y: {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 10,
                      ease: "linear",
                    },
                  },
                }}
              >
                <img
                  src={Producationsimg}
                  alt="Productions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              {/* Gradient overlay with subtle texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent mix-blend-overlay"></div>

              {/* Floating decorative element */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg shadow-lg"
                variants={itemVariants}
              >
                <span className="text-sm font-medium text-gray-900">Cultural Events</span>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="p-8 sm:p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-b from-white to-gray-50"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  Artistic Excellence
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight"
                variants={itemVariants}
              >
                Initiatives
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 font-medium"
                variants={itemVariants}
              >
                Celebrating Artistic Expression
              </motion.p>

              <motion.p
                className="text-black text-base sm:text-lg leading-relaxed mb-3"
                variants={itemVariants}
              >
                At the Arts Council of Pakistan, we see the arts as a powerful force for connection and change. Our year-round programming brings together voices from across Pakistan and the global arts community, creating space for expression, collaboration, and cultural dialogue.

                Signature events like the World Culture Festival, Aalmi Urdu Conference, Pakistan Literature Festival, Pakistan Theatre Festival, Pakistan Music Festival, and the Women's Conference reflect our commitment to celebrating diversity, creativity, and the evolving cultural spirit of our times.
              </motion.p>

              {/* <motion.div variants={itemVariants}>
                <p className="text-black text-base sm:text-lg leading-relaxed">
                  Some of our biggest events of the year include:
                </p>
                <ul className="space-y-2">
                  {[
                    "World Culture Festival",
                    "Aalmi Urdu Conference",
                    "Pakistan Literature Festival",
                    "Pakistan Theatre Festival",
                    "Pakistan Music Festival",
                    "Women's Conference",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-black text-base sm:text-lg"
                      variants={itemVariants}
                    >
                      <span className="w-2 h-2 bg-red-700 rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div> */}

              {/* <motion.p
                className="text-gray-700 text-base sm:text-lg leading-relaxed mt-6 mb-8"
                variants={itemVariants}
              >
                We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
              </motion.p> */}

              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <button className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Explore Our Initiatives
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating badge */}
          {/* <motion.div
              className="absolute top-6 right-6 bg-white/90 px-6 py-3 rounded-full shadow-xl z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="text-base font-semibold text-gray-900">Est. 1954</span>
            </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductionMessage;