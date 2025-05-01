import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images
import PerformingShows1 from "/src/assets/ptf-assets/ptf-performing-shows1.png";
import PerformingShows2 from "/src/assets/ptf-assets/ptf-performing-shows2.png";
import PerformingShows3 from "/src/assets/ptf-assets/ptf-performing-shows3.png";
import PerformingShows4 from "/src/assets/ptf-assets/ptf-performing-shows4.png";

// Custom Arrows for Slider
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-red-800 hover:text-red-400 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "30px",
      // backgroundColor: "#b91c1c",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-1 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-red-700 hover:text-red-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "30px",
      backgroundColor: "#b91c1c", // red-700
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-1 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

// Prime Shows Card Component
const PtfPrimeShowsCard = ({ shows, title = "Prime" }) => {
  // Sample show data
  const sampleShows = [
    {
      title: "The Silent Echo",
      date: "May 15, 2025",
      director: "Aisha Khan",
      image: PerformingShows1,
    },
    {
      title: "Shadows of Lahore",
      date: "June 22, 2025",
      director: "Rahul Mehta",
      image: PerformingShows2,
    },
    {
      title: "Whispers in the Wind",
      date: "July 10, 2025",
      director: "Fatima Syed",
      image: PerformingShows3,
    },
    {
      title: "Tehran Nights",
      date: "August 5, 2025",
      director: "Amir Hossein",
      image: PerformingShows4,
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    customPaging: () => (
      <div className="w-2 h-2 bg-red-400 rounded-full mt-4 transition-all duration-300 hover:bg-red-600" />
    ),
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const fallbackImage = "https://placehold.co/150x150";

  return (
    <section className="py-8 px-4 sm:px-6 md:px-8 bg-white text-black relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" style={{ stopColor: "#b91c1c" }} />
              <stop offset="100%" style={{ stopColor: "transparent" }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-black tracking-tight"
        >
          {title} <span className="text-red-700">Shows</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Slider {...settings}>
            {(shows || sampleShows).map((show, index) => (
              <div key={index} className="px-3 sm:px-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                    y: -5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg mx-auto max-w-[320px] min-h-[460px] flex flex-col group border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[431px] bg-gray-100 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <img
                      src={show.image || fallbackImage}
                      alt={show.title}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => (e.target.src = fallbackImage)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 border-2 border-red-700/70 rounded-t-xl m-2 transition-colors duration-300 group-hover:border-red-800/90" />
                  </div>

                  {/* Show Info */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-50">
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-900 mb-2 truncate">
                      {show.title}
                    </h3>
                    <p className="text-sm sm:text-base text-red-700 font-medium truncate">
                      {show.date}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 truncate">
                      Directed by {show.director}
                    </p>
                  </div>

                  {/* Subtle Accent */}
                  <motion.div
                    className="absolute bottom-3 right-3 w-4 h-4 bg-red-800 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PtfPrimeShowsCard;