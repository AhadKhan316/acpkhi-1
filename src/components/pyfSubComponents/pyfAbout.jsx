import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PyfAbout = () => {
  const [activeTab, setActiveTab] = useState("pyf");

  const tabs = [
    {
      id: "pyf",
      title: "About PYF",
      content: (
        <div className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-green-800 mb-4">
            Pakistan Youth Festival
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            The Pakistan Youth Festival is a groundbreaking celebration of youth talent, energy, and creativity across the nation. This festival aims to empower young individuals by showcasing their skills, fostering innovation, and uniting communities through art, culture, and sports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center">
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-green-400 transition duration-300 text-sm sm:text-base"
            >
              <FaCalendarAlt className="mr-2" /> Coming Soon
            </a>
            <a
              href="#"
              className="flex items-center text-gray-800 hover:text-green-400 transition duration-300 text-sm sm:text-base"
            >
              <FaMapMarkerAlt className="mr-2" /> Across Pakistan
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "organizers",
      title: "About Organizers",
      content: (
        <div className="p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-green-800 mb-4">
            Arts Council Karachi
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            The Pakistan Youth Festival is brought to life by a passionate team dedicated to uplifting the youth of Pakistan. Comprising cultural enthusiasts, educators, and community leaders, the organizers work tirelessly to create a platform that inspires and connects the next generation.
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
    <section className="w-full py-6 sm:py-8 bg-gradient-to-b from-red-50 to-white overflow-hidden relative" id="aboutPyf">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-green-800 text-center mt-12 mb-8">
          Our Journey Unfolded
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black max-w-3xl mx-auto">
          Explore the heart of PYF and its vision through a modern take on youth empowerment.
        </p> */}
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

export default PyfAbout;