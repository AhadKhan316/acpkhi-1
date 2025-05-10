import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import academiesimg from "/src/assets/acp-logo-and-hero-img/academiesimg.png"; 

const Academies = () => {
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
      className="bg-white py-6 sm:py-6 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-4">
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
                   src={academiesimg}
                 
                  alt="ACP Academies"
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
                <span className="text-sm font-medium text-gray-900">Creative Arts</span>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-b from-white to-gray-50"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  Artistic Excellence
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-5 tracking-tight"
                variants={itemVariants}
              >
                SOVAPA
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 font-medium"
                variants={itemVariants}
              >
                School of Visual and Performing Arts
              </motion.p>

              {/* <motion.div
                className="h-1 w-20 bg-red-700 mb-8 rounded-full"
                variants={itemVariants}
              ></motion.div> */}

              <motion.p
                className="text-black text-base sm:text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
                Since 1955, SOVAPA has been shaping creative minds and nurturing the next generation of artists. What began as a single department and a single teacher has grown into a dynamic hub for artistic discovery—where young talents are empowered to explore, experiment, and evolve.

Whether in visual or performing arts, our students train under the mentorship of leading industry professionals, gaining the skills and confidence to inspire, innovate, and make their mark on the world.
              </motion.p>

              {/* <motion.p
                className="text-black text-base sm:text-lg leading-relaxed mb-8"
                variants={itemVariants}
              >
                From theatre and music to fine arts and design, our academies empower hundreds of students annually under the guidance of world-class instructors.
              </motion.p> */}

              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <Link to="/sovapa">
                  <button className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    Discover Our Academies
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute top-6 right-6 bg-white/90 px-6 py-3 rounded-full shadow-xl z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-base font-semibold text-gray-900">Est. 1955</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Academies;