// import React from "react";
// import { motion } from "framer-motion";

// // Placeholder images and video (replace with actual PLF assets)
// // const heroVideo = "https://www.youtube.com/embed/sample-video-id?autoplay=1&loop=1&mute=1&playlist=sample-video-id"; // Placeholder video
// const missionImage = "https://placehold.co/600x400";
// const visionImage = "https://placehold.co/600x400";

// const PlfAbout = () => {
//   return (
//     <div className="bg-green-800">
//       {/* Hero Section with Video */}
//       <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-br from-green-50 to-white">
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Unique Overlapping Circles */}
//           <svg className="w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="none">
//             <circle cx="50" cy="50" r="40" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.5" />
//             <circle cx="80" cy="80" r="50" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.7" />
//             <circle cx="120" cy="60" r="30" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.4" />
//           </svg>
//         </div>
//         <div className="mx-6 relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-green-900 tracking-tight mb-6"
//           >
//             About PLF
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//             className="text-lg sm:text-xl md:text-2xl text-center text-gray-700 max-w-3xl mx-auto"
//           >
//             The Pakistan Literature Festival (PLF) is a dynamic platform dedicated to celebrating and promoting the richness of Pakistani literature and culture.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//             className="mt-12 relative"
//           >
//             <iframe
//               className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96"
//               src="https://www.youtube.com/embed/5UavsFzUT0Q?si=kWMBDRwoNFXNJRfA&autoplay=1&loop=1&mute=1&playlist=5UavsFzUT0Q"
//               title="AUC Promo Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//             {/* Decorative Accent */}
//             <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-800 rounded-full opacity-20 blur-xl" />
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-800 rounded-full opacity-20 blur-xl" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section className="py-6 bg-white relative">
//         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="relative order-2 lg:order-1"
//             >
//               <img
//                 src={missionImage}
//                 alt="Our Mission"
//                 className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
//               />
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-800 rounded-full opacity-50 blur-2xl z-[-1]" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="order-1 lg:order-2 flex flex-col justify-center"
//             >
//               <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-green-900 mb-6 relative">
//                 Our Mission
//                 <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-800 rounded-full" />
//               </h2>
//               <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//                 To foster a love for Pakistani literature by bringing together writers, poets, and enthusiasts through engaging events, workshops, and literary discussions that inspire and educate.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-8 px-6 py-3 bg-green-900 text-white rounded-lg text-base font-medium hover:bg-green-800 transition-colors duration-300 w-fit"
//               >
//                 Explore Events
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Vision Section */}
//       <section className="py-6 bg-gradient-to-r from-green-50 to-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full opacity-20 blur-3xl pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex flex-col justify-center"
//             >
//               <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-green-900 mb-6 relative">
//                 Our Vision
//                 <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-800 rounded-full" />
//               </h2>
//               <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//                 To elevate Pakistani literature on a global stage, uniting diverse voices and preserving our literary heritage for future generations.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-8 px-6 py-3 bg-green-900 text-white rounded-lg text-base font-medium hover:bg-green-800 transition-colors duration-300 w-fit"
//               >
//                 Join Us
//               </motion.button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="relative"
//             >
//               <img
//                 src={visionImage}
//                 alt="Our Vision"
//                 className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
//               />
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-800 rounded-full opacity-30 blur-xl z-[-1]" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-8 bg-white">
//         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-green-900 mb-6"
//           >
//             Our Impact
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { value: "8+", label: "Years of Excellence" },
//               { value: "40+", label: "Events Hosted" },
//               { value: "800+", label: "Participants" },
//               { value: "4", label: "Cities Reached" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//                 className="text-center p-6 bg-red-50 rounded-xl shadow-md"
//               >
//                 <h3 className="text-3xl sm:text-4xl font-bold text-green-900">{stat.value}</h3>
//                 <p className="text-sm sm:text-base text-gray-600 mt-2">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PlfAbout;

import React, { useState } from "react";
import { motion } from "framer-motion";

function PlfAbout() {
  const [activeSection, setActiveSection] = useState("history");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1],
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const renderSection = () => {
    switch (activeSection) {
      // case "history":
      //   return (
      //     <motion.div
      //       key="history"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Literary Journey
      //         </motion.h2>
      //         <motion.p
      //           className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700"
      //           variants={itemVariants}
      //         >
      //           Launched in 2017, the Pakistan Literature Festival (PLF) has grown into a cornerstone of literary celebration, fostering dialogue among writers, poets, and enthusiasts across Pakistan. Starting May 23rd, 2025, in just 2 days, PLF 2025 will bring together over 800 participants to celebrate the richness of Pakistani literature and culture.
      //         </motion.p>
      //       </div>
      //     </motion.div>
      //   );
      // case "vision":
      //   return (
      //     <motion.div
      //       key="vision"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Vision
      //         </motion.h2>
      //         <motion.div
      //           className="relative"
      //           variants={itemVariants}
      //         >
      //           <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl text-green-400 opacity-20">
      //             "
      //           </div>
      //           <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 italic">
      //             To elevate Pakistani literature on a global stage, uniting diverse voices and preserving our literary heritage.
      //           </p>
      //           <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl text-green-400 opacity-20">
      //             "
      //           </div>
      //         </motion.div>
      //         <motion.p
      //           className="mt-8 text-lg text-gray-600"
      //           variants={itemVariants}
      //         >
      //           PLF aims to bridge cultural gaps, inspire creativity, and promote Pakistan’s literary heritage internationally through innovation and engagement.
      //         </motion.p>
      //       </div>
      //     </motion.div>
      //   );
      // case "mission":
      //   return (
      //     <motion.div
      //       key="mission"
      //       variants={sectionVariants}
      //       initial="hidden"
      //       animate="visible"
      //       className="my-12 p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl"
      //     >
      //       <div className="max-w-4xl mx-auto text-center">
      //         <motion.h2
      //           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 mb-8"
      //           variants={itemVariants}
      //         >
      //           Our Mission
      //         </motion.h2>
      //         <motion.ul
      //           className="space-y-6 text-left max-w-2xl mx-auto"
      //           variants={containerVariants}
      //         >
      //           {[
      //             "Foster a love for Pakistani literature through events",
      //             "Bring together writers, poets, and enthusiasts",
      //             "Promote literary discussions and workshops",
      //             "Preserve and share Pakistan’s literary heritage",
      //             "Inspire creativity and cultural dialogue",
      //           ].map((item, index) => (
      //             <motion.li
      //               key={index}
      //               className="flex items-start text-lg text-gray-700"
      //               variants={itemVariants}
      //             >
      //               <svg
      //                 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
      //                 fill="none"
      //                 stroke="currentColor"
      //                 viewBox="0 0 24 24"
      //               >
      //                 <path
      //                   strokeLinecap="round"
      //                   strokeLinejoin="round"
      //                   strokeWidth="2"
      //                   d="M5 13l4 4L19 7"
      //                 ></path>
      //               </svg>
      //               {item}
      //             </motion.li>
      //           ))}
      //         </motion.ul>
      //       </div>
      //     </motion.div>
      //   );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-green-800 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900">
            About
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Pakistan Literature Festival is a first-of-its-kind mega event in the country. The festival will celebrate and honor our culture, languages, literature, and art on a global scale in a way that has never been done before.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {["history", "vision", "mission"].map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`px-8 py-3 rounded-full font-semibold capitalize text-lg transition-all duration-300 relative overflow-hidden ${activeSection === section
                ? "bg-green-800 text-white shadow-lg"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-900 opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Content Section */}
        {/* {renderSection()} */}

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center bg-gradient-to-r from-green-50 to-white p-8 sm:p-12 rounded-3xl shadow-inner"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Literary Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of the Pakistan Literature Festival, starting May 23rd, 2025, and help shape the future of literary exchange in just 2 days!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.plfkarachi.com/events"
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-lg hover:bg-gray-50 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Upcoming Events
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </motion.a>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}

export default PlfAbout;



