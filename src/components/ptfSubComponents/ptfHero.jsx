import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// Replace with your Pakistan Theatre Festival hero images
import PtfHeroImg1 from "/src/assets/ptf-assets/ptf-hero-img1.jpg";
import PtfHeroImg2 from "/src/assets/ptf-assets/ptf-hero-img2.jpg";
import PtfHeroImg3 from "/src/assets/ptf-assets/ptf-hero-img3.jpg";

const PtfHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [PtfHeroImg1, PtfHeroImg2, PtfHeroImg3];

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

  const PtfmoveDown = () => {
    const targetSection = document.getElementById("ptfFooter");
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
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none z-10"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight drop-shadow-lg"
          variants={titleVariants}
        >
          Welcome to the
        </motion.h1>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight text-red-700"
          variants={titleVariants}
        >
          Pakistan Theatre Festival
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 opacity-90 drop-shadow"
          variants={subtitleVariants}
        >
          Celebrating art & culture
        </motion.p>
        <motion.button
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#B90602] hover:bg-red-600 transition duration-150 ease-in-out"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Join Us Now"
        >
          {/* /festival/ptf/register */}
          <Link to="#">Join Us Now</Link>
          <ArrowRight className="ml-2 -mr-1 h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-red-700"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            onClick={PtfmoveDown}
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

export default PtfHero;