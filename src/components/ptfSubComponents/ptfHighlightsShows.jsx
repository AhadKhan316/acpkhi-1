import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for PTF
import PtfHighlights1 from "/src/assets/ptf-assets/ptf-highlights1.png";
import PtfHighlights2 from "/src/assets/ptf-assets/ptf-highlights2.png";
import PtfHighlights3 from "/src/assets/ptf-assets/ptf-highlights3.png";
import PtfHighlights4 from "/src/assets/ptf-assets/ptf-highlights4.png";
// import PtfHighlightedShow5 from "/src/assets/ptf-assets/ptf-show5.jpg";

// Sample show data
const shows = [
  {
    title: "The Silent Echo",
    theatreName: "Lahore Drama Theatre",
    countryName: "Pakistan",
    isHighlighted: true,
    image: PtfHighlights1,
  },
  {
    title: "Shadows of Lahore",
    theatreName: "Mumbai Stage Ensemble",
    countryName: "India",
    isHighlighted: false,
    image: PtfHighlights2,
  },
  {
    title: "Whispers in the Wind",
    theatreName: "Karachi Playhouse",
    countryName: "Pakistan",
    isHighlighted: false,
    image: PtfHighlights3,
  },
  {
    title: "Tehran Nights",
    theatreName: "Tehran Stage Society",
    countryName: "Iran",
    isHighlighted: false,
    image: PtfHighlights4,
  },
  {
    title: "Rooftop Rhapsody",
    theatreName: "Islamabad Arts Collective",
    countryName: "Pakistan",
    isHighlighted: false,
    // image: PtfHighlightedShow5,
  },
];

// Custom arrow components
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} rounded-full transition duration-300 w-8 h-8 sm:w-12 sm:h-12 z-10`}
    style={{ ...style, display: "block", right: "15px", backgroundColor: "transparent" }}
    onClick={onClick}
  >
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} rounded-full transition duration-300 w-8 h-8 sm:w-12 sm:h-12 z-10`}
    style={{ ...style, display: "block", left: "35px", backgroundColor: "transparent" }}
    onClick={onClick}
  >
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

const ShowCard = ({ title, theatreName, countryName, isHighlighted, image }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = (event.clientX - rect.left - centerX) / centerX;
    const mouseY = (event.clientY - rect.top - centerY) / centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fallbackImage = "https://placehold.co/201x251";

  return (
    <motion.div
      ref={ref}
      className={`relative w-full max-w-[400px] bg-white rounded-xl overflow-hidden mx-auto ${isHighlighted
        ? "bg-gradient-to-br from-red-50 to-white border-none"
        : "border-2 border-gray-200"
        } transition-all duration-300 flex flex-col`}
      whileHover={{
        scale: 1.05,
        boxShadow: isHighlighted
          ? "0 0 20px rgba(185, 28, 28, 0.5)"
          : "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[201/251] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <img
          src={image || fallbackImage}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = fallbackImage)}
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-2 truncate">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-1">{theatreName}</p>
        <p className="text-xs sm:text-sm text-gray-600">{countryName}</p>
      </div>

      {isHighlighted && (
        <div className="absolute top-2 right-2 w-4 h-4 bg-red-700 rounded-full animate-pulse" />
      )}
    </motion.div>
  );
};

const PtfHighlightedTheatre = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6 bg-wgite">
      <div className="mx-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight"
        >
          Highlighted <span className="text-red-700">Shows</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Slider {...settings}>
            {shows.map((show, index) => (
              <div key={index} className="px-2 sm:px-4">
                <ShowCard
                  title={show.title}
                  theatreName={show.theatreName}
                  countryName={show.countryName}
                  isHighlighted={show.isHighlighted}
                  image={show.image}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PtfHighlightedTheatre;