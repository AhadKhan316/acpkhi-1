import React from "react";
import { motion } from "framer-motion";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      text: "Coming to the Arts Council of Pakistan , Karachi, even on the first day felt like I have been here for a number of years because of the warmth I felt.",
      name: "Kushtrim B Mehmati ",
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
      text: "I loved being at the Arts Council of Pakistan, Karachi. The people here are very openminded and welcoming.",
      name: "Dan Griffiths",
      role: "USA",
      image: "https://48hills.org/wp-content/uploads/2024/06/David-Griffiths-Church-of-Clown-main.jpg",
    },
  ];

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for feedback cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="user-feedback"
      className="py-6 sm:py-6 lg:py-16 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none"></div> */}

      <div className="px-4 relative max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What Our Community Says
          </motion.h2>
          <motion.p
            className="text-black italic text-sm sm:text-base mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Hear from Our Amazing Members
          </motion.p>
          <motion.div
            // className="h-1 w-20 bg-black mx-auto mb-6 sm:mb-8 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Feedback Cards */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-6 space-y-6 lg:space-y-0">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="bg-gradient-to-b from-white/25 to-gray shadow-lg rounded-xl p-6 flex flex-col max-w-md mx-auto lg:mx-0 lg:-rotate-1 group transition-all duration-300"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              style={{ zIndex: feedbacks.length - index }}
            >
              <div className="relative flex-grow">
                <span className="absolute top-0 left-0 text-black text-4xl leading-none">“</span>
                <p className="text-black italic text-base sm:text-lg pl-6 pr-2">
                  {feedback.text}
                </p>
                <span className="absolute bottom-0 right-0 text-black text-4xl leading-none">”</span>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={feedback.image}
                    alt={`${feedback.name} profile`}
                    className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-3 sm:mr-4"
                  />
                </div>
                <div>
                  <h4 className="text-black font-semibold text-base sm:text-lg">
                    {feedback.name}
                  </h4>
                  <span className="text-black text-sm sm:text-base">
                    {feedback.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;