import React from "react";
import { motion } from "framer-motion";

import PlfDelegateCard1 from "/src/assets/plf-assets/page-delegate1.jpg";
import PlfDelegateCard2 from "/src/assets/plf-assets/page-delegate2.jpg";
import PlfDelegateCard3 from "/src/assets/plf-assets/page-delegate3.jpg";
import PlfDelegateCard4 from "/src/assets/plf-assets/page-delegate4.jpg";
import PlfDelegateCard5 from "/src/assets/plf-assets/page-delegate5.jpg";
import PlfDelegateCard6 from "/src/assets/plf-assets/page-delegate6.jpg";

const delegates = [
  {
    name: "Ahsan Bari",
    title: "Singer",
    bio: "Internationally acclaimed Pakistani novelist.",
    image: PlfDelegateCard1,
  },
  {
    name: "Ajmal Siraj",
    title: "Writer",
    bio: "Renowned author and political commentator.",
    image: PlfDelegateCard2,
  },
  {
    name: "Ali Mengan",
    title: "Novelist",
    bio: "Award-winning Pakistani-British writer.",
    image: PlfDelegateCard3,
  },
  {
    name: "Ali Murtaza Solangi",
    title: "Poet",
    bio: "Celebrated Urdu poet known for his revolutionary verse.",
    image: PlfDelegateCard4,
  },
  {
    name: "Amar Sindhu",
    title: "Author",
    bio: "Pioneering Pakistani novelist and essayist.",
    image: PlfDelegateCard5,
  },
  {
    name: "Amar Iqbal",
    title: "Poet",
    bio: "Influential Urdu poet of the 20th century.",
    image: PlfDelegateCard6,
  },
];

const PlfDelegates = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-green-70 to-white min-h-screen text-gray-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.5" />
            <circle cx="80" cy="80" r="50" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.7" />
            <circle cx="120" cy="60" r="30" fill="none" stroke="#0D542B" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-center text-green-900 tracking-tight mb-6"
          >
            Meet Our Delegates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-xl text-center text-gray-700 max-w-3xl mx-auto"
          >
            A distinguished group of individuals shaping the future of Pakistani literature and culture.
          </motion.p>
        </div>
      </section>

      {/* Delegates Grid */}
      <section className="py-8 bg-green-800 relative mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {delegates.map((delegate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="relative bg-green-800 rounded-2xl overflow-hidden shadow-lg flex flex-col h-[500px] group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-green-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                  <img
                    src={delegate.image}
                    alt={delegate.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Decorative Ribbon */}
                  <div className="absolute top-6 right-7 w-16 h-16 bg-white rotate-45 transform translate-x-8 -translate-y-8  transition-colors duration-300">
                    <span className="absolute inset-0 flex items-center justify-center text-green-900 text-xs font-extrabold transform -rotate-45">
                      PLF
                    </span>
                  </div>
                </div>

                {/* Delegate Info */}
                <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-white to-green-50">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2 truncate">
                      {delegate.name}
                    </h3>
                    <p className="text-sm sm:text-base text-green-900 font-medium mb-3">
                      {/* {delegate.title} */}
                    </p>
                    {/* <p className="text-sm text-gray-600 line-clamp-3">{delegate.bio}</p> */}
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-green-900 text-white rounded-lg text-sm font-medium hover:bg-green-800 transition-colors duration-300 self-start"
                  >
                    Learn More
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-green-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl font-bold text-green-900 mb-6"
          >
            Join the PLF Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Connect with our delegates and contribute to the celebration of Pakistani literature.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-900 text-white rounded-lg text-lg font-medium hover:bg-green-800 transition-colors duration-300"
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PlfDelegates;