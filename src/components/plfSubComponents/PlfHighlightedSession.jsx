import { motion } from "framer-motion";
import { useState } from "react";

// Importing icons from react-icons
import { FaBook, FaGraduationCap, FaChartLine, FaTheaterMasks, FaNewspaper, FaUsers, FaFemale, FaPenFancy, FaMusic, FaUtensils, FaLaugh, FaGuitar } from "react-icons/fa";

const PlfHighlightedSession = () => {
  const sessions = [
    {
      id: 1,
      title: "Literary Insights",
      description: "Discussions on modern literature with renowned authors.",
      icon: <FaBook className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 2,
      title: "Future of Education",
      description: "Exploring innovative trends in global education.",
      icon: <FaGraduationCap className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 3,
      title: "Global Economics",
      description: "Analyzing economic trends with industry experts.",
      icon: <FaChartLine className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 4,
      title: "Cultural Performances",
      description: "Experience traditional dances and theatrical acts.",
      icon: <FaTheaterMasks className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 5,
      title: "Media & Journalism",
      description: "Insights into the evolving world of media.",
      icon: <FaNewspaper className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 6,
      title: "Youth Leadership",
      description: "Empowering the next generation of change-makers.",
      icon: <FaUsers className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 7,
      title: "Women in Leadership",
      description: "Celebrating achievements and discussing challenges.",
      icon: <FaFemale className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 8,
      title: "Poetic Expressions",
      description: "An evening of poetry with celebrated poets.",
      icon: <FaPenFancy className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 9,
      title: "Performing Arts Showcase",
      description: "Live performances by local and international artists.",
      icon: <FaMusic className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 10,
      title: "Global Cuisine Festival",
      description: "Taste culinary delights from around the world.",
      icon: <FaUtensils className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 11,
      title: "Humor & Satire Night",
      description: "A night of laughter with comedians and satirists.",
      icon: <FaLaugh className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
    },
    {
      id: 12,
      title: "Musical Harmony",
      description: "Enjoy live music from diverse genres.",
      icon: <FaGuitar className="w-16 h-16 sm:w-20 sm:h-20 text-green-800" />,
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

  return (
    <section className="px-6 sm:px-6 md:px-8 bg-white text-black relative overflow-hidden" id="plfHighlightedSessions">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-green-800 tracking-tight"
        >
          Highlighted Sessions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative bg-green-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-48 sm:h-56 bg-white/90 flex items-center justify-center overflow-hidden">
                {session.icon}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0"
                  animate={{ opacity: hoveredIndex === index ? 0.7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide mb-2">{session.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 line-clamp-2">{session.description}</p>
                </div>
                <motion.div
                  className="mt-4 w-12 h-1 bg-green-600 rounded-full"
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

export default PlfHighlightedSession;