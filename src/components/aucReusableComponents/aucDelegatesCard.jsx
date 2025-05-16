import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} text-red-700 hover:text-red-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
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
    className={`${className} text-red-700 hover:text-red-900 rounded-full transition-all duration-300 sm:w-14 sm:h-14 w-10 h-10 shadow-md hover:shadow-lg`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
    </svg>
  </div>
);

const AucDelegateCard = ({ delegates, title = "" }) => {
  const navigate = useNavigate();

  const handleViewAllDelegates = () => {
    navigate("/delegates");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="mt-10">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-red-900 hover:bg-red-900 transition-all" />
    ),
  };

  const handleImageClick = (delegate) => {
    navigate(`/delegates/${delegate.id || delegate.slug}`);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-red-900">
              {title}
            </h2>
          </div>
          <button
            onClick={handleViewAllDelegates}
            className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap mt-5"
          >
            All Delegates
          </button>
        </motion.div>

        <div className="px-4 sm:px-6">
          <Slider {...settings}>
            {delegates.map((delegate, index) => (
              <div key={index} className="px-2">
                <DelegateCard delegate={delegate} index={index} onImageClick={handleImageClick} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const DelegateCard = ({ delegate, index, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const fallbackImage = "https://placehold.co/600x900/1e293b/ffffff?text=Delegate";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative h-[350px] rounded-2xl overflow-hidden group mx-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxWidth: "400px" }}
    >
      <div className="absolute inset-0" />

      <motion.div
        className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 rounded-2xl"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute inset-0 overflow-hidden cursor-pointer"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        }}
        onClick={() => onImageClick(delegate)}
      >
        <motion.img
          src={delegate.image || fallbackImage}
          alt={delegate.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.6 },
          }}
          onError={(e) => (e.target.src = fallbackImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 border border-white/20 rounded-2xl m-1 group-hover:m-0 group-hover:border-red-400/50 transition-all duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <motion.h3
          className="text-2xl font-bold text-white mb-1"
          animate={{
            y: isHovered ? -5 : 0,
            transition: { duration: 0.3 },
          }}
        >
          {delegate.name}
        </motion.h3>

        {delegate.role && (
          <motion.p
            className="text-red-300 font-medium mb-2"
            animate={{
              y: isHovered ? -3 : 0,
              opacity: isHovered ? 1 : 0.9,
              transition: { duration: 0.3 },
            }}
          >
            {delegate.role}
          </motion.p>
        )}

        {delegate.company && (
          <motion.p
            className="text-sm text-white/80"
            animate={{
              y: isHovered ? -2 : 0,
              opacity: isHovered ? 1 : 0.8,
              transition: { duration: 0.3 },
            }}
          >
            {delegate.company}
          </motion.p>
        )}
      </div>

      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"
        animate={{
          y: [0, -5, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
          transition: { duration: 2, repeat: Infinity },
        }}
      />
    </motion.div>
  );
};

export default AucDelegateCard;