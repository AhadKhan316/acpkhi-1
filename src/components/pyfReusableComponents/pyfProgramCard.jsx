// src/components/PYFProgramCard.jsx
import { motion } from "framer-motion";

const PyfProgramCard = ({ program }) => {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4 },
    },
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg max-w-md w-full mx-auto relative border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Image Section (3:2 aspect ratio for 5472x3648) */}
      <div className="relative w-full h-0 pb-[66.67%] overflow-hidden">
        <img
          src={program.image || "https://placehold.co/5472x3648"}
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-green-900/20 to-transparent"></div>
      </div>

      {/* Title Section */}
      <div className="p-4 bg-gradient-to-b from-white to-gray-50">
        <motion.h3
          className="text-xl md:text-2xl font-semibold text-green-800 text-center truncate"
          variants={titleVariants}
        >
          {program.title}
        </motion.h3>
      </div>

      {/* Decorative Accent */}
      <motion.div
        className="absolute top-2 right-2 w-6 h-6 bg-green-800 rounded-full opacity-80"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default PyfProgramCard;