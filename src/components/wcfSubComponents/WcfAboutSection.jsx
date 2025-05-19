import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';


// President Image
import presImg from '/src/assets/governing-body-new/ahmed-shah.png'

// Reusable Card Component
const Card = ({ title, children }) => (
  <motion.div
    className="text-center p-8"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.h2
      className="text-2xl md:text-4xl font-bold text-primary mb-6"
      variants={fadeInVariants}
    >
      {title}
    </motion.h2>
    <motion.div className="text-lg md:text-xl text-black leading-relaxed" variants={fadeInVariants}>
      {children}
    </motion.div>
  </motion.div>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function WcfAboutSection() {
  const [activeTab, setActiveTab] = useState("About the Festival");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    "About the Festival": (
      <Card>
        The World Culture Festival is a vibrant celebration of global creativity, bringing together artists, creators, and producers from around the world to share their cultures and co-create art. Featuring performances in music, theatre, dance, and visual arts, the festival is a dynamic platform for artistic exchange and cultural dialogue.

        With a focus on unity and cultural celebration, the festival introduces a diverse mix of national and international talent each year—offering them a space to perform, exchange ideas, and connect with fellow artists and audiences alike.
      </Card>
    ),
    "President's Message": (
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-6 p-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Image */}
        {/* <motion.img
          src="../src/assets/governing-body-new/ahmed-shah.png"
          alt="Ahmed Shah (H.I, S.I)"
          className="w-36 h-36 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          variants={fadeInVariants}
        /> */}

        <motion.div
          className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-6 p-10 "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Large Quotation Mark */}
          <motion.span
            className="absolute top-0 left-5 text-9xl text-blackopacity-20 text-red-700"
            variants={fadeInVariants}
          >
            ❝
          </motion.span>

          {/* Image Section */}
          <motion.img
            src={presImg}
            alt="Ahmed Shah (HI, SI)"
            className="w-36 h-36 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
            variants={fadeInVariants}
          />

          {/* Quote Section */}
          <motion.div className="text-center md:text-left flex flex-col items-center md:items-start" variants={staggerContainer}>
            <motion.p
              className="text-xl md:text-2xl text-black leading-relaxed italic mb-4"
              variants={fadeInVariants}
            >
              &quot;The World Culture Festival is a landmark celebration of the Arts Council of Pakistan, Karachi&apos;s commitment to cultural diplomacy. We look forward to welcoming you to experience the richness of global cultures—in the heart of Pakistan&quot;
            </motion.p>

            {/* Divider */}
            <motion.div className="w-24 h-1 bg-primary mb-3" variants={fadeInVariants} />

            <motion.p
              className="text-lg font-bold text-black"
              variants={fadeInVariants}
            >
              -Mohammad Ahmed Shah (HI, SI)
            </motion.p>
            <motion.p
              className="text-sm text-black"
              variants={fadeInVariants}
            >
              President, Arts Council of Pakistan, Karachi
            </motion.p>
          </motion.div>

          {/* Large Closing Quotation Mark */}
          <motion.span
            className="absolute -bottom-15 right-5 text-9xl text-red-700 opacity-20"
            variants={fadeInVariants}
          >
            ❞
          </motion.span>
        </motion.div>

      </motion.div>
    ),
    "About Arts Council": (
      <Card>
        The Arts Council of Pakistan, Karachi, has been a beacon of cultural promotion and preservation since 1954, championing the arts both locally and globally. With the World Culture Festival - Karachi, we are taking our mission to the next level, hosting Pakistan&apos;s largest international cultural event. This grand festival embodies our commitment to bridging cultural divides and enhancing Pakistan&apos;s cultural diplomacy on the world stage.
      </Card>
    ),
  };

  return (
    <div className="bg-white text-red-500 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tabs */}
      <div id="aboutWcf">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {["About the Festival", "President's Message", "About Arts Council"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 text-lg font-medium rounded-t-lg ${activeTab === tab
                ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                : "bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer"
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-6 sm:px-6 lg:px-8">
        {tabContent[activeTab]}
      </section>
    </div>
  );
}

export default WcfAboutSection;