import React from "react";
import { motion } from "framer-motion";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      text: "Coming to the Arts Council of Pakistan, Karachi, even on the first day felt like I have been here for a number of years because of the warmth I felt.",
      name: "Kushtrim B Mehmati",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1]
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={titleVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            What People Say
          </h2>
          {/* <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            What people say about us
          </p> */}
        </motion.div>

        {/* Feedback cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl p-8 border border-gray-200/50 group-hover:border-red-300/50 transition-all duration-300">
                {/* Quote marks */}
                <div className="absolute top-6 left-6 text-6xl font-serif text-gray-200/80">
                  "
                </div>

                {/* Feedback text */}
                <p className="relative z-10 text-gray-700 italic text-lg mb-8 pt-8">
                  {feedback.text}
                </p>

                {/* Profile */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{feedback.name}</h4>
                    <p className="text-sm text-gray-500">{feedback.role}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-100 to-transparent transform rotate-45 origin-bottom-right"></div>
                </div>
              </div>

              {/* Floating country flag effect */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white overflow-hidden transform group-hover:rotate-12 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-white font-bold text-xs">
                  {feedback.role}
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="text-center mt-16"
          variants={titleVariants}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-blue-600">
            View More
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;