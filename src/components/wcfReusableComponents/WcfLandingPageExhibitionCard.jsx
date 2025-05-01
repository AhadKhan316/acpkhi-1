import React from "react";
import { motion } from "framer-motion";

const ExhibitionGrid = ({ exhibitions = [], title = "Exhibitions", gridCols = { base: 1, sm: 2, lg: 3 }, imageAspectRatio = "1/1", maxImageHeight = "400px", useHexClip = false }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Dynamic grid classes based on props
  const gridClasses = `grid grid-cols-${gridCols.base} sm:grid-cols-${gridCols.sm} lg:grid-cols-${gridCols.lg} gap-6 sm:gap-8`;

  return (
    <section className="py-8 sm:py-6 lg:py-8 bg-white relative overflow-hidden">
      {/* Subtle Background Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.6, 0.2],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            },
          }}
        />
      ))}

      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight">
            {title}
          </h2>
          {/* <motion.div
            className="w-20 h-1 bg-black mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          /> */}
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className={gridClasses}
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              className="group"
              variants={card}
              whileHover="hover"
            >
              <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-black/20 shadow-lg h-full flex flex-col ${useHexClip ? "clip-path-hexagon" : ""}`}>
                {/* Image Container */}
                <div className="relative" style={{ aspectRatio: imageAspectRatio, maxHeight: maxImageHeight }}>
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-black text-white px-3 py-1.5 rounded-full shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-semibold uppercase">On Display</span>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {exhibition.title}
                  </h3>
                  <div className="mt-auto">
                    <button className="text-sm font-medium text-red-700 hover:text-red-800 transition-colors duration-200">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="inline-flex items-center px-8 py-4 bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:bg-red-800 transition-all duration-300">
            View All Exhibitions
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionGrid;