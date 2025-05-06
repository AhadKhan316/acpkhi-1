import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PlfVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&mute=1&loop=1&playlist=5UavsFzUT0Q";
  const slides = [videoUrl];

  // Framer Motion Variants
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] flex items-center justify-center overflow-hidden mt-22"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          src={slides}
          title="PLF Sukkur Chapter 2 Highlights"
          frameBorder="0"
          allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </motion.section>
  );
};

export default PlfVideo;