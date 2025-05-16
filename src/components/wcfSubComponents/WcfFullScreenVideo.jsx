import React from 'react';

import { motion } from 'framer-motion';

const FullScreenVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_&autoplay=1&mute=1&loop=1&playlist=y2B89Bf5SHA";

  const contentVariants = {
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

  return (
    <section className="w-full py-12 sm:py-16 bg-white text-red-800 overflow-hidden">

      {/* Section Header */}
      < motion.div
        className="text-center mb-5 sm:mb-6"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }
        }
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Experience WCF in Motion
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black mx-2">
          Watch our promo video to see the spirit of the Aalmi Urdu Conference.
        </p>
      </motion.div >
      <motion.section
        className="relative flex items-center justify-center overflow-hidden mt-10"
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
    </section>
  );
};

export default FullScreenVideo;