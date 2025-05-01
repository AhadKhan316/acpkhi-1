import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

// Custom Arrow Components
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-pink-700 hover:text-pink-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: "30px",
      backgroundColor: "#f472b6", // pink-400
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
    className={`${className} text-pink-700 hover:text-pink-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "30px",
      backgroundColor: "#f472b6", // pink-400
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

// Category Card Component
const CategoryCard = ({ image, title, paragraph, buttonText = "Explore" }) => {
  const cardRef = useRef(null);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const fallbackImage = "https://placehold.co/256x160";

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-2xl overflow-hidden max-w-[350px] h-[430px] mx-auto flex flex-col shadow-lg border border-pink-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
      whileHover={{ scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic Image Container */}
      <div className="relative w-74 h-60 mx-auto mt-6 rounded-lg overflow-hidden bg-pink-100">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={image || fallbackImage}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy" // Lazy loading for performance
          onError={(e) => (e.target.src = fallbackImage)}
        />
        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-lg border-2 border-pink-500/30 group-hover:border-pink-500/70 transition-colors duration-300 animate-pulse-slow" />
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col items-center text-center">
        {/* Title with Gradient Underline */}
        <h3 className="text-2xl font-bold text-pink-900 relative mb-4">
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-500 to-pink-700 transition-all duration-300 group-hover:w-2/3" />
        </h3>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm text-gray-600 mb-6"
        >
          {paragraph}
        </motion.p>

        {/* Button with Ripple Effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-2 bg-pink-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:bg-pink-700"
        >
          {buttonText}
          <span className="absolute inset-0 bg-pink-500/30 scale-0 rounded-full group-hover:scale-150 transition-transform duration-300 origin-center" />
        </motion.button>
      </div>

      {/* Glowing Edge Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "20px",
    dots: true,
    customPaging: () => (
      <div className="w-2 h-2 bg-pink-400 rounded-full mt-4 transition-all duration-300 hover:bg-pink-600" />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerPadding: "10px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" style={{ stopColor: "#db2777" }} />
              <stop offset="100%" style={{ stopColor: "transparent" }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-pink-800 tracking-tight"
        >
          Explore Categories
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="px-4">
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
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WcCategoriesCard;