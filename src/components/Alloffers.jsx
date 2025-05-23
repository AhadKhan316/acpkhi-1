import React from 'react';
import { motion } from 'framer-motion';

import WCFLogo from '/src/assets/venues/Audi1/audi1.1.jpg';
import PLFLogo from '/src/assets/venues/Studio2/studio2.1.jpg';
import AUCLogo from '/src/assets/venues/library.png';

const Alloffers = () => {
  const showcases = [
    { id: 1, title: 'Auditoriums', desc: 'State-of-the-art venues for conferences and events', logo: WCFLogo },
    { id: 2, title: 'Studios', desc: 'Professional recording and production facilities', logo: PLFLogo },
    { id: 3, title: 'Libraries', desc: 'Resource centers with extensive collections', logo: AUCLogo },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium venues designed to meet your professional needs
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={showcase.logo}
                  alt={showcase.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{showcase.title}</h3>
                <p className="text-gray-600 mb-4">{showcase.desc}</p>
                <button className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg">
            Explore All Facilities
          </button >
        </motion.div>
      </div>
    </section>
  );
};

export default Alloffers;