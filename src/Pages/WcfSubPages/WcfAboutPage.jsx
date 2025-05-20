import React, { useState } from "react";
import { motion } from "framer-motion";

function WcfAboutPage() {
  const [activeSection, setActiveSection] = useState("history");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1],
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const renderSection = () => {
    switch (activeSection) {
      case "history":
      // return (
      //   <motion.div
      //     key="history"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Cultural Journey
      //       </motion.h2>
      //       <motion.p
      //         className="text-xl sm:text-xl md:text-xl leading-relaxed text-gray-700"
      //         variants={itemVariants}
      //       >
      //         Launched as a flagship event by the Arts Council of Pakistan, Karachi, the World Culture Festival (WCF) began in 2023, bringing together global artists to celebrate cultural diversity. Starting May 23rd, 2025, in just 3 days, WCF 2025 will host over 250 artists from 35+ countries, showcasing theatre, music, dance, and fine arts, building on a legacy of uniting cultures.
      //       </motion.p>
      //     </div>
      //   </motion.div>
      // );
      // case "vision":
      // return (
      //   <motion.div
      //     key="vision"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Vision
      //       </motion.h2>
      //       <motion.div
      //         className="relative"
      //         variants={itemVariants}
      //       >
      //         <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
      //           "
      //         </div>
      //         <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 italic">
      //           To create a world without borders, where art fosters global unity and cultural exchange.
      //         </p>
      //         <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
      //           "
      //         </div>
      //       </motion.div>
      //       <motion.p
      //         className="mt-8 text-lg text-gray-600"
      //         variants={itemVariants}
      //       >
      //         WCF aims to elevate Pakistan’s cultural presence internationally, promoting peace and innovation through artistic collaboration.
      //       </motion.p>
      //     </div>
      //   </motion.div>
      // );
      // case "mission":
      // return (
      //   <motion.div
      //     key="mission"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Mission
      //       </motion.h2>
      //       <motion.ul
      //         className="space-y-6 text-left max-w-2xl mx-auto"
      //         variants={containerVariants}
      //       >
      //         {[
      //           "Unite artists from over 35 countries in a global celebration",
      //           "Promote cultural diplomacy through diverse art forms",
      //           "Showcase Pakistan’s heritage on an international stage",
      //           "Provide platforms for emerging global talents",
      //           "Inspire peace and creativity across borders",
      //         ].map((item, index) => (
      //           <motion.li
      //             key={index}
      //             className="flex items-start text-lg text-gray-700"
      //             variants={itemVariants}
      //           >
      //             <svg
      //               className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M5 13l4 4L19 7"
      //               ></path>
      //             </svg>
      //             {item}
      //           </motion.li>
      //         ))}
      //       </motion.ul>
      //     </div>
      //   </motion.div>
      // );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            About
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event, a significant step in the Council's efforts of cultural diplomacy, is set to bring together over 250 artists from over 35 countries, across all continents to showcase the best talent in music, theatre, dance, and fine arts in a manner never seen before.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {["history", "vision", "mission"].map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`px-8 py-3 rounded-full font-semibold capitalize text-lg transition-all duration-300 relative overflow-hidden ${activeSection === section
                ? "bg-red-600 text-white shadow-lg"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Content Section */}
        {renderSection()}

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center bg-gradient-to-r from-red-50 to-yellow-50 p-8 sm:p-12 rounded-3xl shadow-inner"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Cultural Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of the World Culture Festival, starting May 23rd, 2025, and help shape the future of global cultural exchange in just 3 days!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.wcfkarachi.com/events"
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-lg hover:bg-gray-50 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Upcoming Events
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </motion.a>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}

export default WcfAboutPage;