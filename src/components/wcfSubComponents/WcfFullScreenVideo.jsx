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

  return (
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
  );
};

export default FullScreenVideo;