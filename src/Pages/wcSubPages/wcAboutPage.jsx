import React, { useState } from "react";
import { motion } from "framer-motion";

function WcAboutPage() {
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
      // case "history":
      //   return (
      //     <motion.div
      //       key="history"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Literary Journey
      //         </motion.h2>
      //         <motion.p
      //           className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700"
      //           variants={itemVariants}
      //         >
      //           Launched in 2017, the Pakistan Literature Festival (PLF) has grown into a cornerstone of literary celebration, fostering dialogue among writers, poets, and enthusiasts across Pakistan. Starting May 23rd, 2025, in just 2 days, PLF 2025 will bring together over 800 participants to celebrate the richness of Pakistani literature and culture.
      //         </motion.p>
      //       </div>
      //     </motion.div>
      //   );
      // case "vision":
      //   return (
      //     <motion.div
      //       key="vision"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Vision
      //         </motion.h2>
      //         <motion.div
      //           className="relative"
      //           variants={itemVariants}
      //         >
      //           <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl text-green-400 opacity-20">
      //             "
      //           </div>
      //           <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 italic">
      //             To elevate Pakistani literature on a global stage, uniting diverse voices and preserving our literary heritage.
      //           </p>
      //           <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl text-green-400 opacity-20">
      //             "
      //           </div>
      //         </motion.div>
      //         <motion.p
      //           className="mt-8 text-lg text-gray-600"
      //           variants={itemVariants}
      //         >
      //           PLF aims to bridge cultural gaps, inspire creativity, and promote Pakistan’s literary heritage internationally through innovation and engagement.
      //         </motion.p>
      //       </div>
      //     </motion.div>
      //   );
      // case "mission":
      //   return (
      //     <motion.div
      //       key="mission"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Mission
      //         </motion.h2>
      //         <motion.ul
      //           className="space-y-6 text-left max-w-2xl mx-auto"
      //           variants={containerVariants}
      //         >
      //           {[
      //             "Foster a love for Pakistani literature through events",
      //             "Bring together writers, poets, and enthusiasts",
      //             "Promote literary discussions and workshops",
      //             "Preserve and share Pakistan’s literary heritage",
      //             "Inspire creativity and cultural dialogue",
      //           ].map((item, index) => (
      //             <motion.li
      //               key={index}
      //               className="flex items-start text-lg text-gray-700"
      //               variants={itemVariants}
      //             >
      //               <svg
      //                 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
      //                 fill="none"
      //                 stroke="currentColor"
      //                 viewBox="0 0 24 24"
      //               >
      //                 <path
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   strokeWidth="2"
      //                   d="M5 13l4 4L19 7"
      //                 ></path>
      //               </svg>
      //               {item}
      //             </motion.li>
      //           ))}
      //         </motion.ul>
      //       </div>
      //     </motion.div>
      //   );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-green-800 blur-3xl"></div>
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-pink-900">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Women Conference presented by the Arts Council of Pakistan Karachi is an effort to empower women and build a brighter future together by exploring leadership, entrepreneurship, personal development, and social impact through inspiring keynotes, interactive workshops, and engaging panels. Connect with diverse women and make meaningful associations. A platform where women of all ages, backgrounds, and experience levels are welcome.
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
                ? "bg-green-800 text-white shadow-lg"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Content Section */}
        {/* {renderSection()} */}

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center bg-gradient-to-r from-green-50 to-white p-8 sm:p-12 rounded-3xl shadow-inner"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Literary Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of the Pakistan Literature Festival, starting May 23rd, 2025, and help shape the future of literary exchange in just 2 days!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.plfkarachi.com/events"
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

export default WcAboutPage;
