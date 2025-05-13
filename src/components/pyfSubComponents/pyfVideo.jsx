import { motion } from "framer-motion";

const PyfVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/iaHo9AQkaPo?si=NAc-SScXdZ0ddHkG&autoplay=1&loop=1&mute=1&playlist=iaHo9AQkaPo";

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
    <section className="w-full py-12 sm:py-16 bg-white text-black overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-green-800">
          Experience PYF in Motion
        </h2>
        <p className="mt-2 text-base sm:text-xl text-black max-w-3xl mx-auto">
          Watch our promo video to experience the vibrant spirit of the Pakistan Youth Festival.
        </p>
      </motion.div>

      {/* Video Container */}
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
              title="PYF Promo Video Highlights"
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

export default PyfVideo;