import React from 'react';
import { motion } from 'framer-motion';
import SponsorsImage from '/src/assets/wcf-assets/partners.jpg';

const WcfSponsors = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white text-center" id='ourPartners'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">Partners</span>
        </h2>
        <motion.div
          className="relative w-full max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        // whileHover="hover"
        >
          <div className="relative w-full">
            <img
              src={SponsorsImage}
              alt="Our Partners"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WcfSponsors;