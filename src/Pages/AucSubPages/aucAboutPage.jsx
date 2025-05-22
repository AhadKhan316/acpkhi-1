// import React from "react";
// import { motion } from "framer-motion";

// // Placeholder images and video (replace with actual AUC assets)
// // const heroVideo = "https://www.youtube.com/embed/w-GmbGxkSDI?si=oeKO3N61_Vniamnq&autoplay=1&loop=1&mute=1&playlist=w-GmbGxkSDI"; // Placeholder video
// const missionImage = "https://placehold.co/600x400";
// const visionImage = "https://placehold.co/600x400";

// const AboutAuc = () => {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* Hero Section with Video */}
//       <section className="relative py-6 md:py-12 overflow-hidden bg-gradient-to-br from-red-50 to-white">
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Unique Overlapping Circles */}
//           <svg className="w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="none">
//             <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
//             <circle cx="80" cy="80" r="50" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.7" />
//             <circle cx="120" cy="60" r="30" fill="none" stroke="#b91c1c" strokeWidth="2" opacity="0.4" />
//           </svg>
//         </div>
//         <div className="px-6 sm:px-6 lg:px-8 relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-red-800 tracking-tight mb-6"
//           >
//             About Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//             className="text-lg sm:text-xl md:text-2xl text-center text-black max-w-3xl mx-auto"
//           >
//             The All Urdu Conference (AUC) is a vibrant platform dedicated to celebrating and preserving the essence of Urdu language and culture.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//             className="mt-12 relative"
//           >
//             {/* <video
//               src={heroVideo}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96"
//             /> */}
//             {/* <iframe
//               className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96"
//               src="https://www.youtube.com/embed/w-GmbGxkSDI?si=oeKO3N61_Vniamnq&autoplay=1&loop=1&mute=1&playlist=w-GmbGxkSDI"
//               title="AUC Promo Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe> */}
//             {/* Decorative Accent */}
//             <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl" />
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Mission Section with Angled Card */}
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
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-2xl z-[-1]" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="order-1 lg:order-2 flex flex-col justify-center"
//             >
//               <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-red-800 mb-6 relative">
//                 Our Mission
//                 <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600 rounded-full" />
//               </h2>
//               <p className="text-base sm:text-lg text-black leading-relaxed">
//                 To nurture and promote Urdu heritage by creating a dynamic community of artists, scholars, and enthusiasts through innovative events, educational programs, and cultural exchanges that resonate globally.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-base font-medium hover:bg-red-700 transition-colors duration-300 w-fit"
//               >
//                 Explore Events
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Vision Section with Floating Card */}
//       <section className="py-6 bg-gradient-to-r from-red-50 to-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex flex-col justify-center"
//             >
//               <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-red-800 mb-6 relative">
//                 Our Vision
//                 <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600 rounded-full" />
//               </h2>
//               <p className="text-base sm:text-lg text-black leading-relaxed">
//                 To become a worldwide symbol of Urdu excellence, inspiring creativity, fostering unity, and connecting cultures across generations through the timeless beauty of the Urdu language.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-base font-medium hover:bg-red-700 transition-colors duration-300 w-fit"
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
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-300 rounded-full opacity-30 blur-xl z-[-1]" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-6 bg-white">
//         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-red-800 mb-6"
//           >
//             Our Impact
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { value: "10+", label: "Years of Excellence" },
//               { value: "50+", label: "Events Hosted" },
//               { value: "1000+", label: "Participants" },
//               { value: "5", label: "Countries Reached" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//                 className="text-center p-6 bg-red-50 rounded-xl shadow-md"
//               >
//                 <h3 className="text-3xl sm:text-4xl font-bold text-red-700">{stat.value}</h3>
//                 <p className="text-sm sm:text-base text-black mt-2">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutAuc;


import React, { useState } from "react";
import { motion } from "framer-motion";

function AboutAuc() {
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
      case "history":
      // return (
      //   <motion.div
      //     key="history"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Cultural Journey
      //       </motion.h2>
      //       <motion.p
      //         className="text-xl sm:text-xl md:text-xl leading-relaxed text-gray-700"
      //         variants={itemVariants}
      //       >
      //         Launched as a flagship event by the Arts Council of Pakistan, Karachi, the World Culture Festival (WCF) began in 2023, bringing together global artists to celebrate cultural diversity. Starting May 23rd, 2025, in just 3 days, WCF 2025 will host over 250 artists from 35+ countries, showcasing theatre, music, dance, and fine arts, building on a legacy of uniting cultures.
      //       </motion.p>
      //     </div>
      //   </motion.div>
      // );
      // case "vision":
      // return (
      //   <motion.div
      //     key="vision"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Vision
      //       </motion.h2>
      //       <motion.div
      //         className="relative"
      //         variants={itemVariants}
      //       >
      //         <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
      //           "
      //         </div>
      //         <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 italic">
      //           To create a world without borders, where art fosters global unity and cultural exchange.
      //         </p>
      //         <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
      //           "
      //         </div>
      //       </motion.div>
      //       <motion.p
      //         className="mt-8 text-lg text-gray-600"
      //         variants={itemVariants}
      //       >
      //         WCF aims to elevate Pakistan’s cultural presence internationally, promoting peace and innovation through artistic collaboration.
      //       </motion.p>
      //     </div>
      //   </motion.div>
      // );
      // case "mission":
      // return (
      //   <motion.div
      //     key="mission"
      //     variants={sectionVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
      //   >
      //     <div className="max-w-4xl mx-auto text-center">
      //       <motion.h2
      //         className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
      //         variants={itemVariants}
      //       >
      //         Our Mission
      //       </motion.h2>
      //       <motion.ul
      //         className="space-y-6 text-left max-w-2xl mx-auto"
      //         variants={containerVariants}
      //       >
      //         {[
      //           "Unite artists from over 35 countries in a global celebration",
      //           "Promote cultural diplomacy through diverse art forms",
      //           "Showcase Pakistan’s heritage on an international stage",
      //           "Provide platforms for emerging global talents",
      //           "Inspire peace and creativity across borders",
      //         ].map((item, index) => (
      //           <motion.li
      //             key={index}
      //             className="flex items-start text-lg text-gray-700"
      //             variants={itemVariants}
      //           >
      //             <svg
      //               className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M5 13l4 4L19 7"
      //               ></path>
      //             </svg>
      //             {item}
      //           </motion.li>
      //         ))}
      //       </motion.ul>
      //     </div>
      //   </motion.div>
      // );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The All Urdu Conference (AUC) is a vibrant platform dedicated to celebrating and preserving the essence of Urdu language and culture.
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
                ? "bg-red-600 text-white shadow-lg"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Content Section */}
        {renderSection()}

        {/* CTA Section */}
        {/* <motion.div
          className="mt-20 text-center bg-gradient-to-r from-red-50 to-yellow-50 p-8 sm:p-12 rounded-3xl shadow-inner"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Cultural Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of the World Culture Festival, starting May 23rd, 2025, and help shape the future of global cultural exchange in just 3 days!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.wcfkarachi.com/events"
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

export default AboutAuc;
