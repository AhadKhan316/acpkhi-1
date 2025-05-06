import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PlfVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&mute=1&loop=1&playlist=5UavsFzUT0Q";
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [videoUrl]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Framer Motion Variants
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const wcfMoveDown = () => {
    const targetSection = document.getElementById("footerWcf");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <iframe
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            src={slide}
            title="PLF Sukkur Chapter 2 Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            onClick={wcfMoveDown}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlfVideo;