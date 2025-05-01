import { motion } from "framer-motion";

const PlfVideo = () => {
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
    <section className="w-full py-6 sm:py-8 text-green-900 overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-green-800 text-center mt-12 mb-8">
          PLF Sukkur Chapter 2 Highlights
        </h2>
        <p className="mt-2 text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
          Watch our promo video to see the spirit of the Pakistan Literature Festival.
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
              src="https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&loop=1&mute=1&playlist=5UavsFzUT0Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto text-gray-600"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Dive into the highlights of PLF Sukkur Chapter 2, featuring captivating performances, insightful discussions, and the celebration of Pakistan’s literary heritage.
        </motion.p>
      </div>
    </section>
  );
};

export default PlfVideo;