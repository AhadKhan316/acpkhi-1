import { motion } from "framer-motion";
import { useState } from "react";
import { FaUsers, FaLightbulb, FaGlobe, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const WcHighlightedSessions = () => {
  const sessions = [
    {
      title: "Empowering Leadership",
      venue: "Arts Council of Pakistan, Karachi",
      isHighlighted: false,
      icon: <FaUsers className="w-16 h-16 sm:w-20 sm:h-20 text-pink-800" />,
    },
    {
      title: "Innovation in Action",
      venue: "Arts Council of Pakistan, Karachi",
      isHighlighted: false,
      icon: <FaLightbulb className="w-16 h-16 sm:w-20 sm:h-20 text-pink-800" />,
    },
    {
      title: "Building Community",
      venue: "Arts Council of Pakistan, Karachi",
      isHighlighted: false,
      icon: <FaGlobe className="w-16 h-16 sm:w-20 sm:h-20 text-pink-800" />,
    },
    {
      title: "Resilient Futures",
      venue: "Arts Council of Pakistan, Karachi",
      isHighlighted: false,
      icon: <FaShieldAlt className="w-16 h-16 sm:w-20 sm:h-20 text-pink-800" />,
    },
    {
      title: "Women in STEM",
      venue: "Arts Council of Pakistan, Karachi",
      isHighlighted: false,
      icon: <FaLaptopCode className="w-16 h-16 sm:w-20 sm:h-20 text-pink-800" />,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const fallbackIcon = <FaUsers className="w-16 h-16 sm:w-20 sm:h-20 text-pink-300" />;

  return (
    <section className="px-6 sm:px-6 md:px-8 bg-white text-black relative overflow-hidden" id="wcHighlightedSessions">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-pink-900 tracking-tight"
        >
          Highlighted Sessions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((session, index) => (
            <motion.div
              key={session.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative bg-pink-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-48 sm:h-56 bg-white/90 flex items-center justify-center overflow-hidden">
                {session.icon || fallbackIcon}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0"
                  animate={{ opacity: hoveredIndex === index ? 0.7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide mb-2">
                    {session.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
                    {session.venue}
                  </p>
                </div>
                <motion.div
                  className="mt-4 w-12 h-1 bg-pink-300 rounded-full"
                  animate={{ width: hoveredIndex === index ? "48px" : "32px" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WcHighlightedSessions;