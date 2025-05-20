import React from "react";
import { motion } from "framer-motion";

const ReusableCard = ({ name, description, image, buttonText = "Learn More", showButton = false }) => {
  return (
    <motion.div
      className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {/* Image container with aspect ratio */}
      {/* [4/5] */}
      <div className="relative w-full aspect-[5/5] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold drop-shadow-md">{name}</h3>
          {description && (
            <p className="text-sm drop-shadow-md">{description}</p>
          )}
          {showButton && (
            <motion.button
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-300 flex items-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#c53030"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReusableCard;