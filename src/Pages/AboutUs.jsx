import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWithSlider from "../reusableComponents/ReusableCarouselOfAboutUs";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("history");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "history":
        return (
          <motion.div
            key="history"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="my-12"
          >
            <SectionWithSlider
              title="Our History"
              description="Founded in 1980, the Arts Council of Pakistan has been a beacon for cultural preservation, talent development, and a place of collaboration for artists from all corners of Pakistan. We take pride in fostering artistic growth and supporting a creative ecosystem that spans from traditional to contemporary forms."
              images={[
                {
                  src: "https://acpkhi.com/studio%20I/1.jpg",
                  alt: "Historical 1",
                },
                {
                  src: "https://acpkhi.com/studio%20I/2.jpg",
                  alt: "Historical 2",
                },
                {
                  src: "https://acpkhi.com/imgs/ACP%20Drone%202023.webp",
                  alt: "Historical 3",
                },
              ]}
              className="sm:p-8 rounded-2xl"
              imageClassName="object-cover w-full max-h-64 sm:max-h-80 lg:max-h-96 rounded-lg"
              titleClassName="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-100 text-center"
              descriptionClassName="text-base sm:text-lg md:text-xl lg:max-w-3xl leading-loose mx-auto text-center"
            />
          </motion.div>
        );
      case "vision":
        return (
          <motion.div
            key="vision"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="my-12 rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-100 mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl lg:max-w-3xl mx-auto text-center">
              Our vision is to create a world where art unites people, transcending borders and creating a global dialogue through artistic expression. We aim to support artists and bring attention to the diverse, rich culture of Pakistan while influencing global trends through innovation and cultural engagement.
            </p>
          </motion.div>
        );
      case "mission":
        return (
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="my-12 rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-100 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl lg:max-w-3xl mx-auto text-center">
              Our mission is to serve as the premier institution supporting the development of artistic talents, fostering a rich cultural dialogue, and promoting the cultural heritage of Pakistan. We aim to provide a platform for artists, both emerging and established, to share their work with a broader audience, enrich society, and promote art as a universal language.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white text-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl lg:text-4xl font-bold text-black mb-6 text-center"
        >
          About Us
        </motion.h1>

        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {["history", "vision", "mission"].map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize text-base sm:text-lg transition-all duration-300 ${activeSection === section
                ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                : "bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              aria-label={`Switch to ${section.charAt(0).toUpperCase() + section.slice(1)}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        {renderSection()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-100 mb-6 text-center">
            Join Us in Our Mission
          </h2>
          <p className="text-black text-base sm:text-lg md:text-xl lg:max-w-3xl mb-8 text-center mx-auto">
            Be part of a growing movement to nurture creativity, support artists, and celebrate art in all its forms.
          </p>
          <div className="text-center">
            <motion.a
              href="https://www.youtube.com/c/ArtsCouncilofPakistanKarachi"
              className="inline-block bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-black/80 to-black/90 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get Involved"
            >
              Get Involved
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;