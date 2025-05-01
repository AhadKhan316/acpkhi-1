import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PlayImg1 from "/src/assets/ptf-assets/ptf-ourPlays1.png";

// Sample data
const plays = [
  {
    title: "The Silent Echo",
    date: "April 15, 2025",
    director: "Dir. Ayesha Khan",
    image: PlayImg1,
  },
  {
    title: "Shadows of Lahore",
    date: "April 20, 2025",
    director: "Dir. Bilal Ahmed",
    image: PlayImg1,
  },
  {
    title: "Whispers in the Wind",
    date: "April 25, 2025",
    director: "Dir. Sana Malik",
    image: PlayImg1,
  },
];

const PtfOurPlaysSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? plays.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === plays.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-6 sm:py-6 lg:py-8 bg-white overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/curtain.png')`,
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 text-black tracking-tight"
        >
          Our Plays
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96">
                  <img
                    src={plays[currentIndex].image}
                    alt={plays[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">{plays[currentIndex].title}</h3>
                  <p className="text-sm sm:text-base italic mb-2">{plays[currentIndex].date}</p>
                  <p className="text-sm sm:text-base">{plays[currentIndex].director}</p>
                  <button className="mt-4 w-fit px-4 py-2 bg-red-700 text-white rounded-xl font-semibold hover:bg-red-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous play"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next play"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {plays.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-700 scale-125" : "bg-red-700/40"
                  } focus:outline-none focus:ring-2 focus:ring-red-500`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to play ${index + 1}`}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PtfOurPlaysSection;