import React, { useState } from "react";
import { motion } from "framer-motion";

import presidentImg from '../assets/governing-body-new/ahmed-shah.png';

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Tab content data
  const tabs = [
    {
      id: "about",
      title: "About",
      subtitle: "Our Mission and Vision",
      content: (
        <div className="px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* About */}
          </motion.h2>
          <motion.p
            className="text-gray-400 italic text-sm sm:text-base mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Our Mission and Vision */}
          </motion.p>
          <motion.div
            // className="h-1 w-20 bg-black mx-auto mb-6 sm:mb-8 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          ></motion.div>
          <motion.p
            className="text-black mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Arts Council supports cultural activities while educating youth in the field of arts. It strives to promote literature, fine arts, and performing arts in Pakistan.
          </motion.p>
        </div>
      ),
    },
    {
      id: "president",
      title: "President's Message",
      subtitle: "A Word from Our Leader",
      content: (
        <div className="px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* President's Message */}
          </motion.h2>
          <motion.p
            className="text-black italic text-2xl sm:text-5xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* A Word from Our Leader */}
          </motion.p>
          <motion.div
            // className="h-1 w-20 bg-black mx-auto mb-6 sm:mb-8 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          ></motion.div>
          {/* President's Image */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl group">
              <img
                src={presidentImg}
                alt="President Mohammad Ahmed Shah"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-200 rounded-full transition-all duration-300"></div>
            </div>
          </motion.div>
          <motion.h4
            className="text-xl sm:text-3xl lg:text-4xl text-black font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Mohammad Ahmed Shah (HI, SI)
          </motion.h4>
          <motion.p
            className="text-black mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
          </motion.p>
        </div>
      ),
    },
  ];

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


  // Framer Motion variants for tab buttons
  const buttonVariants = {
    active: {
      y: 0,
      transition: { duration: 0.3 },
    },
    inactive: {
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -3,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-6 sm:py-6 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-8 sm:py-10 rounded-xl overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`relative px-4 text-xl sm:text-2xl lg:text-3xl font-bold text-black ${activeTab === tab.id ? "text-black" : "text-black"
                  }`}
                variants={buttonVariants}
                initial="inactive"
                animate={activeTab === tab.id ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute left-0 right-0 h-1 mt-2 bg-[#B90602] rounded-t"
                    layoutId="underline"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;