import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Upcoming Chapter Images
import PlfUpcomingChapters1 from "/src/assets/plf-assets/lahore-chapter.jpg"
import PlfUpcomingChapters2 from "/src/assets/plf-assets/muzaffarabad-chapter.jpg";
import PlfUpcomingChapters3 from "/src/assets/plf-assets/lahore-chapter.jpg";
import PlfUpcomingChapters4 from "/src/assets/plf-assets/sukkur-chapter.jpg";

// Previous Chapter Images
import PlfPreviousChapters1 from "/src/assets/plf-assets/lahore-chapter.jpg";
import PlfPreviousChapters2 from "/src/assets/plf-assets/muzaffarabad-chapter.jpg";
import PlfPreviousChapters3 from "/src/assets/plf-assets/sukkur-chapter.jpg";
import PlfPreviousChapters4 from "/src/assets/plf-assets/quetta-chapter.jpg";
import PlfPreviousChapters5 from "/src/assets/plf-assets/sukkur-chapter.jpg";


const upcomingChapters = [
  {
    event: "Pakistan Literature Festival",
    day: "TBA",
    venue: "TBA",
    image: PlfUpcomingChapters1,
  },
  {
    event: "Pakistan Literature Festival",
    day: "TBA",
    venue: "TBA",
    image: PlfUpcomingChapters2,
  },
  {
    event: "Pakistan Literature Festival",
    day: "TBA",
    venue: "TBA",
    image: PlfUpcomingChapters3,
  },
  {
    event: "Pakistan Literature Festival",
    day: "TBA",
    venue: "TBA",
    image: PlfUpcomingChapters4,
  },
];

const previousChapter = [
  {
    event: "Pakistan Literature Festival",
    day: "10th to 12th FEB-2023",
    venue: "ALHAMRA ARTS COUNCIL",
    image: PlfPreviousChapters1,
  },
  {
    event: "Pakistan Literature Festival",
    day: "3rd to 4th JUNE-2023",
    venue: "CONFERENCE: PEARL CONTINENTAL HOTEL",
    image: PlfPreviousChapters2,
  },
  {
    event: "Pakistan Literature Festival",
    day: "28th to 29th OCT-2023",
    venue: "IBA SUKKUR",
    image: PlfPreviousChapters3,
  },
  {
    event: "Pakistan Literature Festival",
    day: "15th to 16th MAY-2024",
    venue: "BUITEMS, BALLELI",
    image: PlfPreviousChapters4,
  },
  {
    event: "Pakistan Literature Festival",
    day: "25th to 26th Feb-2025",
    venue: "IBA Sukkur University",
    image: PlfPreviousChapters5,
  },
];

// Custom Arrows
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-green-700 hover:text-green-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "-12px",
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
      left: "-10px",
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

const PlfSession = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    customPaging: () => (
      <div className="w-2 h-2 bg-green-500 rounded-full mt-6 transition-all duration-300 hover:bg-green-700" />
    ),
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const fallbackImage = "https://placehold.co/400x300";

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-green-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 Q50,50 100,0 T200,0 V100 H0 Z" fill="url(#wave)" />
          <defs>
            <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: "#10b981" }} /> {/* Green-600 */}
              <stop offset="100%" style={{ stopColor: "transparent" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upcoming Chapters */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-green-800 tracking-tight"
        >
          Upcoming Chapters
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Slider {...settings}>
            {upcomingChapters.map((session, index) => (
              <div key={index} className="px-3">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                    y: -5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg max-w-[400px] mx-auto h-[480px] flex flex-col group border border-green-100"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 bg-gray-100 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <img
                      src={session.image || fallbackImage}
                      alt={session.event}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-white to-green-50">
                    <div>
                      <h3 className="text-xl font-semibold text-green-900 mb-2 truncate">{session.event}</h3>
                      <p className="text-sm text-green-700 font-medium mb-2">
                        VENUE: {session.venue}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {session.day}
                        {/* <p className="text-sm text-gray-600 line-clamp-3">{session.description}</p> */}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300 self-start"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Previous Chapter */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mt-16 mb-12 text-green-800 tracking-tight"
        >
          Previous Chapter
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Slider {...settings}>
            {previousChapter.map((session, index) => (
              <div key={index} className="px-3">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                    y: -5,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg max-w-[400px] mx-auto h-[480px] flex flex-col group border border-green-100"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 bg-gray-100 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <img
                      src={session.image || fallbackImage}
                      alt={session.event}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-white to-green-50">
                    <div>
                      <h3 className="text-xl font-semibold text-green-900 mb-2 truncate">{session.event}</h3>
                      <p className="text-sm text-green-700 font-medium mb-2">
                        VENUE: {session.venue}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {session.day}
                        {/* {session.description || "A memorable moment from our past events."} */}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300 self-start"
                    >
                      View Highlights
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PlfSession;