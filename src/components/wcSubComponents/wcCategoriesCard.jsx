import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

// Custom Arrow Components
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-white rounded-full transition-all duration-300 sm:w-12 sm:h-12 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "20px",
      backgroundColor: "#f472b6", // pink-400
      zIndex: 10,
    }}
    onClick={onClick}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-white rounded-full transition-all duration-300 sm:w-12 sm:h-12 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "20px",
      backgroundColor: "#f472b6", // pink-400
      zIndex: 10,
    }}
    onClick={onClick}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

// Category Card Component
const CategoryCard = ({ image, title, paragraph, buttonText = "Explore" }) => {
  const cardRef = useRef(null);

  // Subtle 3D Tilt Effect
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const fallbackImage = "https://placehold.co/256x160";

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-xl overflow-hidden max-w-[320px] h-[400px] mx-auto flex flex-col shadow-md border border-pink-200/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
        <img
          src={image || fallbackImage}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => (e.target.src = fallbackImage)}
        />
        {/* Subtle Glowing Border */}
        <div className="absolute inset-0 rounded-t-xl border border-pink-400/20 group-hover:border-pink-400/50 transition-colors duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 flex flex-col items-center text-center">
        {/* Title with Gradient Underline */}
        <h3 className="text-xl font-semibold text-pink-900 relative mb-3">
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-700 transition-all duration-300 group-hover:w-1/2" />
        </h3>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-600 mb-4 line-clamp-3"
        >
          {paragraph}
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-pink-600 text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-pink-700"
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Categories Component
const WcCategoriesCard = () => {
  // Sample Categories Data
  const categories = [
    {
      image: "/src/assets/wc-assets/wc-categories-img1.jpeg",
      title: "Leadership",
      paragraph: "Empower your leadership skills with insights from industry trailblazers.",
      buttonText: "Learn More",
    },
    {
      image: "/src/assets/wc-assets/category-innovation.jpg",
      title: "Innovation",
      paragraph: "Explore cutting-edge ideas driving change in technology and beyond.",
      buttonText: "Discover",
    },
    {
      image: "/src/assets/wc-assets/category-community.jpg",
      title: "Community",
      paragraph: "Build networks and foster collaboration for a stronger future.",
      buttonText: "Join Now",
    },
    {
      image: "/src/assets/wc-assets/category-resilience.jpg",
      title: "Resilience",
      paragraph: "Learn strategies to thrive through challenges and adversity.",
      buttonText: "Explore",
    },
    {
      image: "/src/assets/wc-assets/category-stem.jpg",
      title: "STEM",
      paragraph: "Celebrate and advance women’s contributions in science and tech.",
      buttonText: "Get Involved",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "30px",
    dots: true,
    customPaging: () => (
      <div className="w-2.5 h-2.5 bg-pink-400 rounded-full mt-3 transition-all duration-300 hover:bg-pink-600" />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerPadding: "20px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "30px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "50px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "30px" },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50 relative" id="wcCategories">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-pink-800 tracking-tight"
        >
          Explore Categories
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="px-3">
                <CategoryCard
                  image={category.image}
                  title={category.title}
                  paragraph={category.paragraph}
                  buttonText={category.buttonText}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Custom CSS for Pulse Animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WcCategoriesCard;