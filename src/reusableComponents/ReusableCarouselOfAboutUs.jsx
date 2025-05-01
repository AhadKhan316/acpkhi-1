import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom arrow components (identical to UpcomingEvents)
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-white text-2xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-white text-2xl" />
  </button>
);

const SectionWithSlider = ({
  title,
  description,
  images,
  slidesPerView = 1,
  spaceBetween = 30,
  navigation = true,
  autoplay = true,
  autoplayDelay = 2500,
  className = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  // Slider settings (mapped from Swiper props)
  const sliderSettings = {
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
    arrows: navigation,
    autoplay: autoplay,
    autoplaySpeed: autoplayDelay,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:flex-row items-center gap-8 p-4 sm:p-6 lg:p-8 ${className}`}
    >

      {/* Slider Section */}
      <div className="w-full lg:w-1/2 relative">
        <Slider
          {...sliderSettings}
          className="rounded-xl overflow-hidden backdrop-blur-md"
        >
          {images.map((image, index) => (
            <div key={index} className="">
              <div className="transform transition-all duration-300 hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto object-cover rounded-xl ${imageClassName}`}
                // loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Centered Title and Description */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center items-center text-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 bg-clip-text ${titleClassName}`}
        >
          {title}
        </h2>
        <p
          className={`text-black text-base sm:text-lg md:text-xl lg:max-w-3xl leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>


    </motion.div>
  );
};

export default SectionWithSlider;