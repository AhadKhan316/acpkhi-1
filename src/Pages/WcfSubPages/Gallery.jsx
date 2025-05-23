import { motion } from "framer-motion";
import { useState } from "react";
import poster2024 from '/src/assets/wcf-assets/main-wcf-poster.jpeg';

const festivals = [
  {
    year: "2024",
    title: "World Culture Festival 2024",
    image: poster2024,
    description: "Celebrating global unity through art and culture with participants from 50+ countries.",
    highlights: [
      "Grand opening ceremony with 500 performers",
      "Cultural pavilions from 30+ nations",
      "International food festival",
      "Nightly fireworks displays"
    ],
    stats: [
      { value: "50+", label: "Countries" },
      { value: "10K+", label: "Attendees" },
      { value: "300+", label: "Performers" }
    ]
  },
  // Add more festivals when available
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.3, 1]
    }
  }
};

const posterHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Gallery() {
  const [selectedFestival, setSelectedFestival] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Poster Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative group">
            {/* Main Poster Display - Larger and Centered */}
            <motion.div
              whileHover="hover"
              variants={posterHoverVariants}
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              onClick={() => setSelectedFestival(festivals[0])}
            >
              <motion.img
                src={poster2024}
                alt="World Culture Festival 2024"
                className="w-full h-auto object-cover"
                whileHover={imageHoverVariants.hover}
                transition={imageHoverVariants.hover.transition}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-[#B90602] text-white text-sm font-semibold tracking-wider rounded-full mb-3">
                    2024 EDITION
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    World Culture Festival 2024
                  </h2>
                  <p className="text-gray-200 mt-2 max-w-lg">
                    Celebrating global unity through art and culture
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 text-[#B90602] p-2 rounded-full group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>

            {/* View Details Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-6"
            >
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span>Click poster to view details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="#B90602">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Festival Details Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#B90602] mb-6">About This Year's Festival</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The World Culture Festival 2024 brings together artists, performers, and cultural ambassadors from over 50 countries for a spectacular celebration of global unity through art, music, dance, and cuisine.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-[#B90602] mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {festivals[0].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-[#B90602]/10 p-1 rounded-full mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#B90602]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#B90602]/5 to-[#E37A1E]/5 p-6 rounded-xl h-full">
                  <h4 className="font-bold text-[#B90602] mb-4">Festival Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {festivals[0].stats.map((stat, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                        <div className="text-3xl font-bold text-[#B90602]">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#B90602] hover:bg-[#9A0502] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                      View Full Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal for Poster Details */}
        {selectedFestival && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto"
            >
              <button
                onClick={() => setSelectedFestival(null)}
                className="absolute top-4 right-4 bg-white text-[#B90602] rounded-full p-3 z-10 hover:bg-[#B90602] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Full-size Poster Display */}
                  <div className="flex items-center justify-center bg-gray-100 p-8">
                    <img
                      src={selectedFestival.image}
                      alt={selectedFestival.title}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Details Section */}
                  <div className="p-10">
                    <div className="mb-8">
                      <span className="inline-block px-4 py-1.5 bg-[#B90602] text-white text-xs font-semibold tracking-wider rounded-full mb-6">
                        {selectedFestival.year} EDITION
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {selectedFestival.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {selectedFestival.description}
                      </p>
                    </div>
                    
                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-[#B90602] mb-6 pb-2 border-b border-gray-200">Event Highlights</h4>
                      <ul className="space-y-4">
                        {selectedFestival.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-[#B90602]/10 p-1.5 rounded-full mr-4 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B90602]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="flex-1 bg-[#B90602] hover:bg-[#9A0502] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                        Download Poster
                      </button>
                      <button className="flex-1 bg-white text-[#B90602] font-medium py-3 px-6 rounded-lg border border-[#B90602] hover:bg-[#B90602]/5 transition-colors">
                        Share Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to <span className="text-[#B90602]">Participate?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us as a performer, volunteer, or partner for the next World Culture Festival.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(185, 6, 2, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#B90602] hover:bg-[#9A0502] text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#B90602] font-bold py-4 px-10 rounded-full border-2 border-[#B90602] transition-all duration-300 hover:bg-[#B90602]/5"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;