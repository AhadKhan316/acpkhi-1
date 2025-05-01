import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// WC session images (replace with actual assets)
import WcHighlightedSession1 from "/src/assets/wc-assets/wc-highlighted-session1.jpg";
import WcHighlightedSession2 from "/src/assets/wc-assets/wc-highlighted-session2.jpg";
import WcHighlightedSession3 from "/src/assets/wc-assets/wc-highlighted-session3.jpg";
import WcHighlightedSession4 from "/src/assets/wc-assets/wc-highlighted-session4.jpg";
// import WcSession5 from "/src/assets/wc-assets/wc-session5.jpg";

// Sample WC session data
const sessions = [
  {
    title: "Empowering Leadership",
    paragraph: "Join industry leaders to explore strategies for impactful leadership in today's world.",
    image: WcHighlightedSession1,
  },
  {
    title: "Innovation in Action",
    paragraph: "Discover how women are driving innovation across technology, business, and more.",
    image: WcHighlightedSession2,
  },
  {
    title: "Building Community",
    paragraph: "Learn to foster connections and create supportive networks for lasting change.",
    image: WcHighlightedSession3,
  },
  {
    title: "Resilient Futures",
    paragraph: "Engage with stories of resilience and strategies to overcome challenges.",
    image: WcHighlightedSession4,
  },
  {
    title: "Women in STEM",
    paragraph: "Celebrate achievements and discuss advancing women in science, tech, and engineering.",
    // image: WcSession5,
  },
];

// Custom arrow components
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} rounded-full transition duration-300 w-8 h-8 sm:w-12 sm:h-12 z-10`}
    style={{ ...style, display: "block", right: "35px", backgroundColor: "#db2777" }} // pink-600
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
    style={{ ...style, display: "block", left: "35px", backgroundColor: "#db2777" }} // pink-600
    onClick={onClick}
  >
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

const SessionCard = ({ title, paragraph, image }) => {
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
      className="relative w-full max-w-[400px] bg-white rounded-xl border-2 border-gray-200 overflow-hidden mx-auto transition-all duration-300 flex flex-col"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
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
        />
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{paragraph}</p>
      </div>
    </motion.div>
  );
};

const WcHighlightedSessions = () => {
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
    <section className="py-12 bg-gradient-to-b from-white to-pink-50">
      <div className="mx-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-pink-800 tracking-tight"
        >
          Highlighted Sessions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Slider {...settings}>
            {sessions.map((session, index) => (
              <div key={index} className="px-2 sm:px-4">
                <SessionCard
                  title={session.title}
                  paragraph={session.paragraph}
                  image={session.image}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default WcHighlightedSessions;