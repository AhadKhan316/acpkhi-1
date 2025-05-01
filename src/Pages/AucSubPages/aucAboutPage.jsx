import React from "react";
import { motion } from "framer-motion";

// Placeholder images and video (replace with actual AUC assets)
// const heroVideo = "https://www.youtube.com/embed/w-GmbGxkSDI?si=oeKO3N61_Vniamnq&autoplay=1&loop=1&mute=1&playlist=w-GmbGxkSDI"; // Placeholder video
const missionImage = "https://placehold.co/600x400";
const visionImage = "https://placehold.co/600x400";

const AboutAuc = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Hero Section with Video */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-red-50 to-white">
        <div className="absolute inset-0 pointer-events-none">
          {/* Unique Overlapping Circles */}
          <svg className="w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
            <circle cx="80" cy="80" r="50" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.7" />
            <circle cx="120" cy="60" r="30" fill="none" stroke="#b91c1c" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>
        <div className="mx-4 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-red-800 tracking-tight mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-center text-black max-w-3xl mx-auto"
          >
            The All Urdu Conference (AUC) is a vibrant platform dedicated to celebrating and preserving the essence of Urdu language and culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-12 relative"
          >
            {/* <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96"
            /> */}
            <iframe
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover h-64 sm:h-80 md:h-96"
              src="https://www.youtube.com/embed/w-GmbGxkSDI?si=oeKO3N61_Vniamnq&autoplay=1&loop=1&mute=1&playlist=w-GmbGxkSDI"
              title="AUC Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section with Angled Card */}
      <section className="py-8 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <img
                src={missionImage}
                alt="Our Mission"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-2xl z-[-1]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 flex flex-col justify-center"
            >
              <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-red-800 mb-6 relative">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600 rounded-full" />
              </h2>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                To nurture and promote Urdu heritage by creating a dynamic community of artists, scholars, and enthusiasts through innovative events, educational programs, and cultural exchanges that resonate globally.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-base font-medium hover:bg-red-700 transition-colors duration-300 w-fit"
              >
                Explore Events
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section with Floating Card */}
      <section className="py-8 bg-gradient-to-r from-red-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-red-800 mb-6 relative">
                Our Vision
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-600 rounded-full" />
              </h2>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                To become a worldwide symbol of Urdu excellence, inspiring creativity, fostering unity, and connecting cultures across generations through the timeless beauty of the Urdu language.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg text-base font-medium hover:bg-red-700 transition-colors duration-300 w-fit"
              >
                Join Us
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={visionImage}
                alt="Our Vision"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-xl object-cover transform -rotate-3 hover:-translate-y-2 transition-transform duration-300"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-300 rounded-full opacity-30 blur-xl z-[-1]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-red-800 mb-12"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years of Excellence" },
              { value: "50+", label: "Events Hosted" },
              { value: "1000+", label: "Participants" },
              { value: "5", label: "Countries Reached" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="text-center p-6 bg-red-50 rounded-xl shadow-md"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-red-700">{stat.value}</h3>
                <p className="text-sm sm:text-base text-black mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuc;