import React from 'react';
import { motion } from 'framer-motion';

function WcfVideoSection() {
  // Modern animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div> */}

      <div className="mx-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {/* Video Player - Now on left side */}
          <motion.div
            className="relative group"
            variants={scaleIn}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition-all duration-500">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_"
                title="World Culture Festival Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Text Content - Now on right side */}
          <motion.div
            className="space-y-8"
            variants={slideUp}
          >
            <div>
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                WCF 2024
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Where Cultures <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Collide & Create</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black">Date</p>
                    <p className="font-semibold">26 Sep - 30 Oct</p>
                  </div>
                </div>

                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black">Location</p>
                    <p className="font-semibold">Arts Council Karachi</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-black leading-relaxed">
                Experience an unprecedented gathering of global talent at the World Culture Festival 2024, where art transcends boundaries.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "35+", label: "Countries" },
                  { value: "250+", label: "Artists" },
                  { value: "100+", label: "Performances" },
                  { value: "5", label: "Art Forms" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-black">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button className="mt-6 px-8 py-3 rounded-md text-white bg-[#B90602] hover:bg-red-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Your Tickets Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WcfVideoSection;