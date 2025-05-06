import React from 'react';
import { motion } from 'framer-motion';

const PlfVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&mute=1&loop=1&playlist=5UavsFzUT0Q";

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
      className="relative flex items-center justify-center overflow-hidden mt-22"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      {/* Background Video Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full aspect-video max-h-full max-w-full">
          <iframe
            className="w-full h-full object-contain object-center"
            src={videoUrl}
            title="PLF Sukkur Chapter 2 Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PlfVideo;