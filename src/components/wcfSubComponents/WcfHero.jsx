import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import your WCF hero images
import WcfHero1 from "/src/assets/wcf-assets/480353134_935591345356131_845620241989635301_n.jpg";
import WcfHero2 from "/src/assets/wcf-assets/480465735_935590975356168_2897742645734404426_n.jpg";
import WcfHero3 from "/src/assets/wcf-assets/480748608_935079365407329_2583587052900021695_n.jpg";
import WcfHero4 from "/src/assets/wcf-assets/480689688_935592328689366_5465043570001838355_n.jpg";
import WcfHero5 from "/src/assets/wcf-assets/480899209_935593665355899_2148262077644342806_n.jpg";

const WcfHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    WcfHero1,
    WcfHero2,
    WcfHero3,
    WcfHero4,
    WcfHero5
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

  // const wcfMoveDown = () => {
  //   const targetSection = document.getElementsById("footerWcf");
  //   if (targetSection) {
  //     targetSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  const wcfMoveDown = () => {
    // Corrected the method name to getElementById
    const targetSection = document.getElementById("footerWcf");
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
            alt={`WCF Hero Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none z-10"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight drop-shadow-lg"
          variants={titleVariants}
        >
          World Culture Festival
        </motion.h1>
    

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold mb-4 opacity-90 drop-shadow text-red-600"
          variants={subtitleVariants}
        >
          Where Culture Comes Alive!
        </motion.p>

        {/* <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 opacity-90 drop-shadow font-semibold"
          variants={subtitleVariants}
        >
          THEATRE - MUSIC - DANCE - FINEARTS
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 opacity-90 drop-shadow"
          variants={subtitleVariants}
        >
          26 SEP TO 02<sup>nd</sup> NOV AT ARTS COUNCIL KARACHI
        </motion.p> */}

        {/* <motion.button
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#B90602] hover:bg-red-600 transition duration-150 ease-in-out"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Register Now"
        >
          FOR REGISTRATION
          <ArrowRight className="ml-2 -mr-1 h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
        </motion.button> */}
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
            onClick={wcfMoveDown}
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

export default WcfHero;