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
  // Create sets of 5 cards for each page (2 reels, 3 testimonials)
  const pageSets = [];
  const totalPages = 3; // For demonstration, creating 3 pages (adjust as needed)

  for (let page = 0; page < totalPages; page++) {
    const reelIndex1 = page % reelVideos.length; // Cycle through reelVideos
    const reelIndex2 = (page + 1) % reelVideos.length;
    const testimonialIndex1 = page % testimonials.length; // Cycle through testimonials
    const testimonialIndex2 = (page + 1) % testimonials.length;
    const testimonialIndex3 = (page + 2) % testimonials.length;

    const cardSet = [
      { type: "reel", src: reelVideos[reelIndex1], title: `Reel ${page * 2 + 1}`, gridArea: "1 / 1 / 3 / 2" },
      { type: "testimonial", data: testimonials[testimonialIndex1], gridArea: "1 / 2 / 2 / 5" },
      { type: "testimonial", data: testimonials[testimonialIndex2], gridArea: "2 / 2 / 3 / 4" },
      { type: "reel", src: reelVideos[reelIndex2], title: `Reel ${page * 2 + 2}`, gridArea: "2 / 4 / 4 / 5" },
      { type: "testimonial", data: testimonials[testimonialIndex3], gridArea: "3 / 1 / 3 / 4" },
    ];
    pageSets.push(cardSet);
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const currentCards = pageSets[currentPage - 1] || pageSets[0];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: [0.1, 0.8, 0.2, 1] },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            What Our Community Says
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from Our Amazing Members
          </p>
        </motion.div>

        {/* Feedback cards */}
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
                className="bg-gradient-to-b from-white/90 to-gray-100 shadow-xl rounded-2xl p-8 flex flex-col transition-all duration-300 h-[225px] border border-gray-200/50 hover:border-red-300/50"
                style={{ gridArea: card.gridArea }}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative flex-grow flex items-center">
                  <span className="absolute top-6 left-6 text-6xl font-serif text-gray-200/80">"</span>
                  <p className="relative z-10 text-gray-700 italic text-lg mb-8 pt-8">
                    {card.data.text}
                  </p>
                  <span className="absolute bottom-0 right-0 text-6xl font-serif text-gray-200/80">"</span>
                </div>
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-blue-500 rounded-full blur opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={card.data.image}
                      alt={`${card.data.name} profile`}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{card.data.name}</h4>
                    <p className="text-sm text-gray-500">{card.data.role}</p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-100 to-transparent transform rotate-45 origin-bottom-right"></div>
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

        {/* View more button */}
        <motion.div
          className="text-center mt-16"
          variants={titleVariants}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-blue-600">
            View More Testimonials
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Feedback;