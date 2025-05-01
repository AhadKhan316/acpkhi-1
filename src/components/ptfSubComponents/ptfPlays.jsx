import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";

// Slick custom CSS for professional look (add to your CSS file, e.g., App.css or a dedicated stylesheet)
const slickStyles = `
  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background: #b91c1c; /* red-700 */
    border-radius: 50%;
    z-index: 10;
    transition: opacity 0.3s;
  }
  .slick-prev:hover, .slick-next:hover {
    background: #dc2626; /* red-600 */
    opacity: 1;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: white;
  }
  .slick-dots li button:before {
    font-size: 12px;
    color: #9ca3af; /* gray-400 */
  }
  .slick-dots li.slick-active button:before {
    color: #b91c1c; /* red-700 */
  }
  .slick-dots {
    bottom: -30px;
  }
  @media (max-width: 640px) {
    .slick-prev, .slick-next {
      display: none !important;
    }
  }
`;

// Add this to your CSS file or use a <style> tag in your component
const styleTag = <style>{slickStyles}</style>;

const internationalPlayers = [
  {
    id: 1,
    title: "Aisha Khan",
    group: "Lahore Drama Collective",
    image: "/src/assets/ptf-assets/ptf-International-plays.png",
  },
  {
    id: 2,
    title: "Rahul Mehta",
    group: "Mumbai Theatre Ensemble",
    image: "/src/assets/ptf-assets/player2.jpg",
  },
  {
    id: 3,
    title: "Fatima Syed",
    group: "Karachi Performers Guild",
    image: "/src/assets/ptf-assets/player3.jpg",
  },
  {
    id: 4,
    title: "Amir Hossein",
    group: "Tehran Stage Society",
    image: "/src/assets/ptf-assets/player4.jpg",
  },
];

// Reusable Card Component (UNCHANGED)
const PlayerCard = ({ title, group, image, id }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(239, 68, 68, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      borderColor: "rgba(239, 68, 68, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white text-black rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-red-400 transition-all duration-300 mx-2"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="p-8 text-center">
        <motion.img
          src={image}
          alt={title}
          className="w-90 h-50 sm:w-58 md:w-98 sm:h-58 lg:w-96 lg:h-56 mx-auto mb-6 object-cover border-2 border-gray-200"
          variants={imageVariants}
          whileHover="hover"
          loading="lazy"
        />
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-700 mb-3">
          {title}
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700">{group}</p>
      </div>
      {/* <div className="bg-red-600 text-white text-center py-4">
        <Link
          to={`/festival/ptf/artists/${id}`}
          className="text-sm sm:text-base lg:text-lg font-semibold hover:underline"
        >
          View Profile
        </Link>
      </div> */}
    </motion.div>
  );
};

// Main Section Component with React Slick
const PtfInternationalPlayers = () => {
  // Section Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 5 seconds
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-6 sm:py-6 lg:py-8">
      {styleTag}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center text-black mb-8 sm:mb-6">
          International <span className="text-red-700">Plays</span>
        </h2>
        <Slider {...settings}>
          {internationalPlayers.map((player) => (
            <div key={player.id}>
              <PlayerCard
                id={player.id}
                title={player.title}
                group={player.group}
                image={player.image}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default PtfInternationalPlayers;