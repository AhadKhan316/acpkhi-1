import React, { useState } from "react";
import { motion } from "framer-motion";

function WcfAboutPage() {
  const [activeTab, setActiveTab] = useState("arts-council");

  const tabs = [
    { id: "arts-council", title: "About Arts Council" },
    { id: "world-culture", title: "About World Culture Festival" },
  ];

  // Framer Motion Variants
  const frameVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

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
    inactive: { scale: 1, backgroundColor: "#000000" },
    active: {
      scale: 1.05,
      backgroundColor: "#9F0712",
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.1, backgroundColor: "#9F0712", transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Hero Section with Video (Unchanged from Previous Response) */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
              Where Culture <span className="text-red-600 underline">Comes Alive!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
              35+ Countries • 250+ Artists • 100+ Performances
            </p>
          </motion.div>

          <motion.div
            className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={frameVariants}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent animate-spotlight" />
            </div>

            <div className="relative w-full pb-[56.25%] bg-white">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_"
                title="World Culture Festival Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white items-center justify-center text-center text-black text-sm sm:text-base hidden iframe-error">
                An error occurred. Please watch this video on{" "}
                <a
                  href="https://www.youtube.com/watch?v=y2B89Bf5SHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 underline"
                >
                  YouTube
                </a>
                .
              </div>
            </div>
          </motion.div>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-black"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Experience the World Culture Festival, a global celebration of theatre, music, dance, and fine arts, hosted by the Arts Council of Pakistan, Karachi.
          </motion.p>

          <motion.div
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              26<sup>th</sup> Sep to 30<sup>th</sup> Oct at Arts Council Karachi
            </p>
            <a
              href="https://www.youtube.com/watch?v=y2B89Bf5SHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Watch on <span className="font-bold ml-1">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section (Redesigned to Match PlfAbout) */}
      <section className="w-full py-6 sm:py-8 bg-white overflow-hidden relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            Our Legacy Unfolded
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto">
            Discover the essence of the Arts Council and World Culture Festival through a modern lens on tradition.
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
            className="relative bg-white/90 rounded-lg shadow-xl border-t-4 border-black max-w-full sm:max-w-4xl mx-auto"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === "arts-council" && (
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  Arts Council of Pakistan, Karachi
                </h3>
                <p className="text-black leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                  Since our inception in 1954, the Arts Council of Pakistan has been dedicated to various forms of art. ACP is currently the finest non-profit organization in the country for the promotion of Fine and Performing Arts. We host more than 500 events annually and train local talent in our Fine and Performing Arts academies.
                </p>
                <p className="text-black leading-relaxed text-sm sm:text-base max-w-3xl mx-auto mt-4">
                  The Council facilitates art and artists from all segments of society. The team, led by our President Ahmed Shah (SI), aims to promote peace and artistic professionalism. We work with the collective goal of shining a bright spotlight on Pakistan through our art and culture, achieved through literary conferences, artistic endeavors, cultural events, and competitive talent showcases.
                </p>
              </div>
            )}

            {activeTab === "world-culture" && (
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  World Culture Festival Karachi
                </h3>
                <p className="text-black leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
                  Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event, a significant step in the Council's efforts of cultural diplomacy, is set to bring together over 250 artists from over 35 countries across all continents to showcase the best talent in music, theatre, dance, and fine arts in a manner never seen before.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WcfAboutPage;