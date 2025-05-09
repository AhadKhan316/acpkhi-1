import { motion } from "framer-motion";

import SponsorsImage from "/src/assets/wcf-assets/partners.jpg";

const PtfSponsors = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-6 bg-white text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Our <span className="text-red-800">Partners</span>
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
              alt="Our Sponsors"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PtfSponsors;