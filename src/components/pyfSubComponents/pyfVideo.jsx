import { motion } from "framer-motion";

const PyfVideo = () => {
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
    <section className="w-full py-6 sm:py-8 text-red-900 overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-green-800 text-center mt-12 mb-8">
          PYF Promo Video Highlights
        </h2>
        <p className="mt-2 text-base sm:text-lg max-w-3xl mx-auto text-black">
          Watch our promo video to experience the vibrant spirit of the Pakistan Youth Festival.
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/10 to-transparent animate-spotlight"></div>
          </div>

          {/* Video Iframe */}
          <div className="relative w-full pb-[56.25%] bg-green-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/iaHo9AQkaPo?si=NAc-SScXdZ0ddHkG"
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
          className="mt-6 text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto text-black"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Relive the energy of the Pakistan Youth Festival, featuring dynamic performances, inspiring moments, and the celebration of youth creativity across Pakistan.
        </motion.p>
      </div>
    </section>
  );
};

export default PyfVideo;