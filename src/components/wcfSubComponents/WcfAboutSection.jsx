import React, { useState } from "react";
import { motion } from "framer-motion";


// President Image
import presImg from '/src/assets/governing-body-new/ahmed-shah.png'

// Reusable Card Component
const Card = ({ title, children }) => (
  <motion.div
    className="mx-4 text-center p-8 "
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
  const [activeTab, setActiveTab] = useState("About World Culture Festival");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    "About World Culture Festival": (
      <Card title="World Culture Festival Karachi">
        Experience a world without borders at the World Culture Festival - Karachi, the grandest global artistic gathering ever hosted in Pakistan. The event will bring together over 250 talented artists from over 35 countries, across all continents, showcasing the best talent in music, theatre, dance, and fine arts in an unprecedented way.
      </Card>
    ),
    "President Message": (
      <motion.div
        className="mx-4 flex flex-col md:flex-row items-center gap-8 md:gap-6 p-8"
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
            className="absolute top-0 left-5 text-9xl text-blackopacity-20"
            variants={fadeInVariants}
          >
            ❝
          </motion.span>

          {/* Image Section */}
          <motion.img
            src={presImg}
            alt="Ahmed Shah (H.I, S.I)"
            className="w-36 h-36 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
            variants={fadeInVariants}
          />

          {/* Quote Section */}
          <motion.div className="text-center md:text-left flex flex-col items-center md:items-start" variants={staggerContainer}>
            <motion.p
              className="text-xl md:text-2xl text-black leading-relaxed italic font-serif mb-4"
              variants={fadeInVariants}
            >
              "The World Culture Festival is the grand celebration of Arts Council of Pakistan, Karachi's efforts in cultural diplomacy. We look forward to welcoming you to experience the world at your doorstep."
            </motion.p>

            {/* Divider */}
            <motion.div className="w-24 h-1 bg-primary mb-3" variants={fadeInVariants} />

            <motion.p
              className="text-lg font-bold text-black"
              variants={fadeInVariants}
            >
              - Ahmed Shah (H.I, S.I)
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
            className="absolute bottom-0 right-5 text-9xl text-black opacity-20 font-serif"
            variants={fadeInVariants}
          >
            ❞
          </motion.span>
        </motion.div>

      </motion.div>
    ),
    "About Arts Council": (
      <Card title="Arts Council of Pakistan Karachi">
        The Arts Council of Pakistan, Karachi, has been a beacon of cultural promotion and preservation since 1954, championing the arts both locally and globally. With the World Culture Festival - Karachi, we are taking our mission to the next level, hosting Pakistan’s largest international cultural event. This grand festival embodies our commitment to bridging cultural divides and enhancing Pakistan's cultural diplomacy on the world stage.
      </Card>
    ),
  };

  return (
    <div className="bg-white text-black py-12 px-6 sm:px-6 lg:px-8">
      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {["About World Culture Festival", "President Message", "About Arts Council"].map((tab) => (
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
      <section className="py-12 sm:px-6 lg:px-8">
        {tabContent[activeTab]}
      </section>
    </div>
  );
}

export default WcfAboutSection;