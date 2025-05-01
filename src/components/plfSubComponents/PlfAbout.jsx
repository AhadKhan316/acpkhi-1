import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PlfAbout = () => {
  const [activeTab, setActiveTab] = useState("plf");

  const tabs = [
    {
      id: "plf",
      title: "About PLF",
      content: (
        <div className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-green-900 mb-4">
            Pakistan Literature Festival
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            The Pakistan Literature Festival is a first-of-its-kind mega event in the country. The festival will celebrate and honor our culture, languages, literature, and art on a global scale in a way that has never been done before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center">
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-green-800 transition duration-300 text-sm sm:text-base"
            >
              <FaCalendarAlt className="mr-2" /> 25th & 26th Feb
            </a>
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-green-800 transition duration-300 text-sm sm:text-base"
            >
              <FaMapMarkerAlt className="mr-2" /> Sukkur IBA University
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "acp",
      title: "About ACP",
      content: (
        <div className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-green-900 mb-4">
            Arts Council of Pakistan
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            The Arts Council of Pakistan, Karachi, is a leading cultural institution dedicated to promoting art, literature, and cultural heritage across Pakistan. Established in 1954, it has been a beacon for artists and intellectuals, hosting events like the Pakistan Literature Festival to foster creativity and cultural exchange.
          </p>
        </div>
      ),
    },
  ];

  // Framer Motion Variants
  const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const buttonVariants = {
    inactive: { scale: 1, backgroundColor: "#000" },
    active: {
      scale: 1.05,
      backgroundColor: "#026931",
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.1, backgroundColor: "#026931", transition: { duration: 0.2 } },
  };

  return (
    <section className="w-full py-6 sm:py-8 bg-gradient-to-b from-teal-50 to-white overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-green-800 text-center mt-12 mb-8">
          Our Legacy Unfolded
        </h2>
        <p className="mt-2 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the essence of PLF and ACP through a modern lens on tradition.
        </p>
      </motion.div>

      {/* Tabs and Content */}
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white shadow-md"
              variants={buttonVariants}
              initial="inactive"
              animate={activeTab === tab.id ? "active" : "inactive"}
              whileHover={activeTab === tab.id ? {} : "hover"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Scroll Panel */}
        <motion.div
          key={activeTab}
          className="relative bg-white/90 rounded-lg shadow-xl border-t-4 border-green-800 max-w-full sm:max-w-4xl mx-auto"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </div>
    </section>
  );
};

export default PlfAbout;