{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/KaZUFhZdSgg?si=XO8nh12_nN_FEXlT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }


import React from 'react';
import { motion } from 'framer-motion';

const PtfPromoVideoSection = () => {
  const videoUrl = "https://www.youtube.com/embed/KaZUFhZdSgg?si=XO8nh12_nN_FEXlT&autoplay=1&loop=1&mute=1&playlist=KaZUFhZdSgg";

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
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }
        }
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Experience PTF in Motion
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black max-w-3xl mx-auto">
          Watch our promo video to see the spirit of the Pakistan Theatre Festival.
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
              title="PTF Highlights"
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

export default PtfPromoVideoSection;