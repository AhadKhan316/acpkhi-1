import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import SponsorLogo1 from '/src/assets/wcf-assets/wcf-sponsors/sponsor1.png'
import SponsorLogo2 from '/src/assets/wcf-assets/wcf-sponsors/sponsor2.png'
import SponsorLogo3 from '/src/assets/wcf-assets/wcf-sponsors/sponsor3.png'
import SponsorLogo4 from '/src/assets/wcf-assets/wcf-sponsors/sponsor1.png'
import SponsorLogo5 from '/src/assets/wcf-assets/wcf-sponsors/sponsor3.png'

const PtfSponsors = () => {
  const sponsors = [
    { id: 1, name: 'InnovateCorp', logo: SponsorLogo1 },
    { id: 2, name: 'EcoSystems', logo: SponsorLogo2 },
    { id: 3, name: 'GlobalNet', logo: SponsorLogo3 },
    { id: 4, name: 'VisionLabs', logo: SponsorLogo4 },
    { id: 5, name: 'PeakPulse', logo: SponsorLogo5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive item count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleItems(4);
      else if (window.innerWidth >= 768) setVisibleItems(3);
      else setVisibleItems(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(sponsors.length - visibleItems, 0);

  // Auto-play logic
  useEffect(() => {
    if (!isPaused && sponsors.length > visibleItems) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, maxIndex, sponsors.length, visibleItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => goToSlide(currentIndex === 0 ? maxIndex : currentIndex - 1);
  const nextSlide = () => goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">Sponsors</span>
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div> */}
        </motion.div>

        {/* Modern Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden px-2">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <motion.div
                    className="h-48 bg-white rounded-2xl flex items-center justify-center p-8 border border-gray-200 hover:border-black transition-all duration-300"
                    whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-40 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {sponsors.length > visibleItems && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-black transition-all z-10"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 transition-all z-10"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Modern Pagination */}
          {sponsors.length > visibleItems && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-gradient-to-r from-red-700 to-red-500 w-8' : 'bg-gray-200'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PtfSponsors;