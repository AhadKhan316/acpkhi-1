import React, { useState } from "react";
import { motion } from "framer-motion";

// YouTube video URLs
const reelVideos = [
  "https://www.youtube.com/embed/pxG0ruABgzA", // 1
  "https://www.youtube.com/embed/VGdPNgpqCOI",
  "https://www.youtube.com/embed/5qap5aO4i9A",
  "https://www.youtube.com/embed/VGdPNgpqCOI", // 2
  "https://www.youtube.com/embed/VGdPNgpqCOI",
  "https://www.youtube.com/embed/VGdPNgpqCOI",
  "https://www.youtube.com/embed/VGdPNgpqCOI",
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Coming to the Arts Council of Pakistan, Karachi, even on the first day felt like I have been here for a number of years because of the warmth I felt.",
    name: "Kushtrim B Mehmati",
    role: "KOSOVO",
    image: "https://balkans.aljazeera.net/wp-content/uploads/2017/12/kushtrim-fb.jpg?resize=770%2C513&quality=80",
  },
  {
    id: 2,
    text: "The Arts Council of Pakistan, Karachi is home to a variety of people and welcomes everyone. The people here are very emotive. It was great interacting with them.",
    name: "Franck Le Lay",
    role: "FRANCE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMkCNldq3HyUFaRbwqOvvMbIpwvd9wbRhyw&s",
  },
  {
    id: 3,
    text: "I loved being at the Arts Council of Pakistan, Karachi. The people here are very open-minded and welcoming.",
    name: "Dan Griffiths",
    role: "USA",
    image: "https://48hills.org/wp-content/uploads/2024/06/David-Griffiths-Church-of-Clown-main.jpg",
  },
];

const Feedback = () => {
  const pageSets = [];
  const totalPages = 3; 

  for (let page = 0; page < totalPages; page++) {
    const reelIndex1 = page % reelVideos.length;
    const reelIndex2 = (page + 1) % reelVideos.length;
    const testimonialIndex1 = page % testimonials.length;
    const testimonialIndex2 = (page + 1) % testimonials.length;
    const testimonialIndex3 = (page + 2) % testimonials.length;

    const cardSet = [
      { type: "reel", src: reelVideos[reelIndex1], title: `Reel ${page * 2 + 1}`, gridArea: "1 / 1 / 3 / 2" },
      { type: "testimonial", data: testimonials[testimonialIndex1], gridArea: "1 / 2 / 2 / 5" },
      { type: "testimonial", data: testimonials[testimonialIndex2], gridArea: "2 / 2 / 3 / 4" },
      { type: "reel", src: reelVideos[reelIndex2], title: `Reel ${page * 2 + 2}`, gridArea: "2 / 4 / 4" },
      { type: "testimonial", data: testimonials[testimonialIndex3], gridArea: "3 / 1 / 3 / 4" },
    ];
    pageSets.push(cardSet);
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const currentCards = pageSets[currentPage - 1] || pageSets[0];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      id="user-feedback"
      className="py-6 sm:py-8 lg:py-16 bg-gray-50 relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-white pointer-events-none"></div>
      <div className="px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto z-10">
        <div className="text-center sm:mb-6 lg:mb-8">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What Our Community Says
          </motion.h2>
          <motion.p
            className="text-black italic text-sm sm:text-base lg:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Hear from Our Amazing Members
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {currentCards.map((card, idx) => (
            card.type === "reel" ? (
              <motion.div
                key={`reel-${currentPage}-${idx}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 lg:col-span-1 lg:row-span-2 h-[497px]"
                style={{ gridArea: card.gridArea }}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative w-full h-full rounded-xl">
                  <iframe
                    src={`${card.src}?enablejsapi=1&autoplay=1&loop=1&playlist=${card.src.split("embed/")[1]}`}
                    title={card.title}
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`testimonial-${currentPage}-${idx}`}
                className="bg-gradient-to-b from-white/90 to-gray-100 shadow-lg rounded-xl p-5 flex flex-col transition-all duration-300 h-[225px]"
                style={{ gridArea: card.gridArea }}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative flex-grow flex items-center">
                  <span className="absolute top-0 left-0 text-gray-400 text-3xl leading-none">“</span>
                  <p className="text-gray-700 italic text-sm sm:text-base pl-5 pr-2">
                    {card.data.text}
                  </p>
                  <span className="absolute bottom-0 right-0 text-gray-400 text-3xl leading-none">”</span>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={card.data.image}
                      alt={`${card.data.name} profile`}
                      className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-gray-800 font-semibold text-sm sm:text-base">
                      {card.data.name}
                    </h4>
                    <span className="text-gray-600 text-xs sm:text-sm">
                      {card.data.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center space-x-2 sm:space-x-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${currentPage === i + 1
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;