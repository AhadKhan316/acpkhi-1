import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import HeroImg1 from "/src/assets/acp-logo-and-hero-img/acp-hero1.jpeg";
import HeroImg2 from "/src/assets/acp-logo-and-hero-img/acp-hero2.jpeg";
import HeroImg3 from "/src/assets/acp-logo-and-hero-img/acp-hero3.jpeg";
import HeroImg4 from "/src/assets/acp-logo-and-hero-img/acp-hero4.jpeg";
import HeroImg5 from "/src/assets/acp-logo-and-hero-img/acp-hero5.jpeg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    HeroImg1,
    HeroImg2,
    HeroImg3,
    HeroImg4,
    HeroImg5,
  ];

  // Auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Framer Motion Variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const moveDown = () => {
    const targetSection = document.getElementById("footer");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] text-white flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Hero Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none z-10"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center px-6 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight drop-shadow-lg"
          variants={titleVariants}
        >
          Hub of Arts and Culture
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow"
          variants={subtitleVariants}
        >
          Committed to the promotion, education and preservation of art and culture since 1954
        </motion.p>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-red-700"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            onClick={moveDown}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;