import { motion } from "framer-motion";

const WcVideo = () => {
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
    <section className="w-full py-6 sm:py-8 text-pink-900 overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-pink-800 text-center mt-12 mb-8">
          Women's Conference 2025 Highlights
        </h2>
        <p className="mt-2 text-base sm:text-lg max-w-xl mx-auto text-gray-600">
          Watch our promo video to experience the inspiration and empowerment of the Women's Conference.
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-600/20 to-transparent animate-spotlight"></div>
          </div>

          {/* Video Iframe */}
          <div className="relative w-full pb-[56.25%] bg-gray-900">
            <iframe
              src="https://www.youtube.com/embed/Uwk5DI5Ul70?si=DGtwW1jyE2oH0iRw"
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
          Relive the moments of inspiration, connection, and empowerment from the Women's Conference 2025, featuring powerful keynotes, engaging workshops, and a vibrant community of change-makers.
        </motion.p>
      </div>
    </section>
  );
};

export default WcVideo;