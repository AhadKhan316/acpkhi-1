import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-green-700 hover:text-green-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "30px",
      backgroundColor: "green",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-green-700 hover:text-green-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "30px",
      backgroundColor: "green",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

const PlfSpeakerCard = ({ speakers, title = "Speakers" }) => {
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
      <div className="w-2 h-2 bg-green-400 rounded-full mt-4 transition-all duration-300 hover:bg-green-600" />
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
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-green-900 text-gray-900 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" style={{ stopColor: "#22c55e" }} />
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
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-white tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="px-3 sm:px-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                    y: -5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg mx-auto max-w-[320px] h-[380px] sm:h-[400px] md:h-[420px] flex flex-col group border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <img
                      src={speaker.image || fallbackImage}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => (e.target.src = fallbackImage)}
                    />
                    <div className="absolute inset-0 border-2 border-green-700/70 rounded-t-xl m-2 transition-colors duration-300 group-hover:border-green-800/90" />
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-50">
                    <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2 truncate">{speaker.name}</h3>
                    {/* {speaker.role && (
                      <p className="text-sm sm:text-base text-green-700 font-medium truncate">{speaker.role}</p>
                    )}
                    {speaker.bio && (
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">{speaker.bio}</p>
                    )} */}
                  </div>

                  {/* Subtle Accent */}
                  <motion.div
                    className="absolute bottom-3 right-3 w-4 h-4 bg-green-700 rounded-full"
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

export default PlfSpeakerCard;