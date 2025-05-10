import { useState } from "react";
import { motion } from "framer-motion";

const PtfAbout = () => {
  const [activeTab, setActiveTab] = useState("ptf"); // Default tab: About PTF

  const tabs = [
    {
      id: "ptf",
      title: "About PTF",
      content: (
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">
            Pakistan Theatre Festival
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            Pakistan Theatre Festival 2025, presented by Arts Council of Pakistan, Karachi, is a landmark event that transcends borders and languages. Featuring a dynamic lineup of 7 international and 27 prominent national theatre groups, this festival spans an incredible 30 days. Immerse yourself in the magic of 45 captivating shows, interactive workshops, and talks. Explore global cultural diversity and a variety of genres under one roof, with plays in languages including Urdu, English, Turkish, German, Sinhala, Persian, Punjabi, and Sindhi.
          </p>
        </div>
      ),
    },
    {
      id: "acp",
      title: "About ACP",
      content: (
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">
            Arts Council of Pakistan
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            The Arts Council of Pakistan, Karachi, is a leading cultural institution dedicated to promoting art, literature, and cultural heritage across Pakistan. Established in 1954, it has been a beacon for artists and intellectuals, hosting events like the Pakistan Theatre Festival to foster creativity and cultural exchange.
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
    inactive: { scale: 1, backgroundColor: "#374151" },
    active: {
      scale: 1.05,
      backgroundColor: "#b91c1c",
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <section className="w-full py-6 sm:py-8 bg-white overflow-hidden relative" id="aboutPtf">
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
              whileHover="hover"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Scroll Panel */}
        <motion.div
          key={activeTab} // Ensures animation retriggers on tab change
          className="relative bg-white/90 rounded-lg shadow-xl border-t-4 border-red-700 max-w-full sm:max-w-3xl mx-auto"
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

export default PtfAbout;