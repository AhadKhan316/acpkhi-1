import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFeatherAlt } from "react-icons/fa";

import PlfHeroImg1 from "/src/assets/plf-assets/1.jpg"
import PlfHeroImg2 from "/src/assets/plf-assets/2.jpg"
import PlfHeroImg3 from "/src/assets/plf-assets/3.jpg"
import PlfHeroImg4 from "/src/assets/plf-assets/4.jpg"
import PlfHeroImg5 from "/src/assets/plf-assets/5.jpg"
import PlfHeroImg6 from "/src/assets/plf-assets/6.jpg"
import PlfHeroImg7 from "/src/assets/plf-assets/7.jpg"
import PlfHeroImg8 from "/src/assets/plf-assets/8.jpg"
import PlfHeroImg9 from "/src/assets/plf-assets/9.jpg"
import PlfHeroImg10 from "/src/assets/plf-assets/10.jpg"

const PlfHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    PlfHeroImg1,
    PlfHeroImg2,
    PlfHeroImg3,
    PlfHeroImg4,
    PlfHeroImg5,
    PlfHeroImg6,
    PlfHeroImg7,
    PlfHeroImg8,
    PlfHeroImg9,
    PlfHeroImg10,
    // "../src/assets/plf-assets/hero-image4.png",
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

  const PlfmoveDown = () => {
    const targetSection = document.getElementById("plfFooter");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }


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
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(13, 84, 43, 0.7)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] text-white flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900/70 pointer-events-none z-10"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-30 text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
          variants={titleVariants}
        >
          <span className="block">Welcome to</span>
          <span className="text-green-700 inline-block overflow-hidden whitespace-nowrap">
            Pakistan Literature Festival
          </span>
        </motion.h1>
        <motion.h5
          className="mt-1 sm:mt-2 text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl tracking-tight opacity-90"
          variants={subtitleVariants}
        >
          YOUTH IS THE ONLY WAY FORWARD!
        </motion.h5>
        <motion.button
          className="mt-4 sm:mt-6 bg-green-900 text-white px-10 sm:px-14 py-4 rounded-full font-semibold hover:bg-green-800 transition duration-300 text-xs sm:text-sm md:text-base"
          variants={buttonVariants}
          whileHover="hover"
        >
          Join Us Now
        </motion.button>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-15 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <span
            key={index}
            className={` w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-green-700"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            onClick={PlfmoveDown}
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

export default PlfHero;