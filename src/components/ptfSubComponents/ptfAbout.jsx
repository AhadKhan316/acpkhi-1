import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

// Placeholder background image (replace with actual theatre-related image)
// const backgroundImage = "/src/assets/ptf-assets/ptf-hero-img1.jpg"; 

const PtfAbout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parallax effect for background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  // Framer Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { width: "6rem" },
    visible: {
      width: "12rem",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center py-8 sm:py-6 lg:py-8">
        {/* Background with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
            y,
          }}
        ></motion.div>

        {/* Content */}
        <motion.div
          className="relative max-w-5xl mx-4 sm:mx-6 lg:mx-auto px-6 sm:px-8 py-10 bg-white/90 backdrop-blur-md rounded-lg shadow-2xl z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div
            className="h-1 bg-red-700 mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
          ></motion.div>

          <motion.div variants={contentVariants}>
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Pakistan </span>
              <span className="text-red-700">Theatre Festival</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              Pakistan Theatre Festival 2025, presented by Arts Council of Pakistan, Karachi, is a landmark event that transcends borders and languages. Featuring a dynamic lineup of 7 international and 27 prominent national theatre groups, this festival spans an incredible 30 days. Immerse yourself in the magic of 45 captivating shows, interactive workshops, and talks. Explore global cultural diversity and a variety of genres under one roof, with plays in languages including Urdu, English, Turkish, German, Sinhala, Persian, Punjabi, and Sindhi.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                className="inline-block"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-red-700 text-white px-4 py-3 rounded-md font-semibold transition duration-300 text-base lg:text-lg"
                >
                  Watch Promo
                </button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                // whileHover="hover"
                className="inline-block"
              >
                <Link
                  to="/festival/ptf/tickets"
                  className="bg-gray-700 text-white px-4 py-3 rounded-md font-semibold transition duration-300 text-base lg:text-lg hover:bg-gray-600"
                >
                  Ticket Closed
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          variants={modalVariants}
        >
          <div className="relative max-w-4xl w-full mx-4 sm:mx-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-red-700 hover:text-red-600 text-3xl font-bold"
            >
              &times;
            </button>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/KaZUFhZdSgg?si=4GkuXnoMWjb_EoTo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PtfAbout;