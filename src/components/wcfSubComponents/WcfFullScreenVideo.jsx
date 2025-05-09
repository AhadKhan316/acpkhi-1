<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> ed731246f978c74290bdea6e0900221087c3919d
import { motion } from 'framer-motion';

const FullScreenVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_&autoplay=1&mute=1&loop=1&playlist=y2B89Bf5SHA";

<<<<<<< HEAD
  // const [currentSlide, setCurrentSlide] = useState(0);

  // Framer Motion Variants for fade animation
=======
>>>>>>> ed731246f978c74290bdea6e0900221087c3919d
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
<<<<<<< HEAD
    <motion.section
      className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] flex items-center justify-center overflow-hidden mt-22"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">

        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="World Culture Festival Highlights"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </motion.section>
=======
    <section className="w-full py-12 sm:py-16 bg-white text-red-700 overflow-hidden">
      {/* Section Header */}
      < motion.div
        className="text-center mb-10 sm:mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }
        }
      >
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-8">
          Experience PLF in Motion
        </h2>
        <p className="mt-5 text-lg md:text-xl text-black mx-auto">
          Watch our promo video to see the spirit of the Pakistan Literature Festival.
        </p>
      </motion.div >
      <motion.section
        className="relative flex items-center justify-center overflow-hidden mt-15"
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
>>>>>>> ed731246f978c74290bdea6e0900221087c3919d
  );
};

export default FullScreenVideo;