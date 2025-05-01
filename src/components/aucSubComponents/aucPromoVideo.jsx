import { motion } from "framer-motion";

const PromoVideoSection = () => {
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

  return (
    <section className="w-full py-12 sm:py-16 bg-white text-red-800 overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Experience AUC in Motion
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black max-w-3xl mx-auto">
          Watch our promo video to see the spirit of the Aalmi Urdu Conference.
        </p>
      </motion.div>

      {/* Video Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative w-full rounded-lg shadow-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={frameVariants}
          viewport={{ once: true }}
        >
          {/* Decorative Frame */}
          <div className="absolute inset-0 rounded-lg pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent animate-spotlight"></div>
          </div>

          {/* Video Iframe */}
          <div className="relative w-full pb-[56.25%] bg-gray-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/w-GmbGxkSDI?si=oeKO3N61_Vniamnq&autoplay=1&loop=1&mute=1&playlist=w-GmbGxkSDI"
              title="AUC Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-5 text-base sm:text-xl text-black max-w-3xl mx-auto opacity-90"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Dive into the highlights of past conferences, featuring captivating
          performances, insightful discussions, and the global celebration of
          Urdu heritage.
        </motion.p>
      </div>
    </section>
  );
};

export default PromoVideoSection;