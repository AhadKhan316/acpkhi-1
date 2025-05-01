import { useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("auc"); // Default tab: About AUC

  const tabs = [
    {
      id: "auc",
      title: "About AUC",
      content: (
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">
            Aalmi Urdu Conference
          </h3>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            The Aalmi Urdu Conference returns to the Arts Council of Pakistan, Karachi, with the 17th year spotlighting Karachi - the vibrant city that has shaped the Nations very soul. This year’s theme centres on delving into the city’s rich heritage of literature, music, dance, theatre, and art, all through the lens of Urdu.
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
    inactive: { scale: 1, backgroundColor: "#353131" },
    active: {
      scale: 1.05,
      backgroundColor: "#c10007",
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-white overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-red-800 tracking-tight">
          Our Legacy Unfolded
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black max-w-3xl mx-auto">
          Explore the essence of AUC and ACP through a modern lens on tradition.
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

      {/* Parchment Texture Background */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M10%2010c20%200%2040%2010%2040%2030s-20%2030-40%2030-40-10-40-30%2020-30%2040-30z%22%20stroke%3D%22%23e5e7eb%22%20stroke-width%3D%221%22%20opacity%3D%220.3%22%2F%3E%3C%2Fsvg%3E')] opacity-10 pointer-events-none"></div> */}
    </section>
  );
};

export default AboutSection;