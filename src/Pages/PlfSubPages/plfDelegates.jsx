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
    <div className="bg-gradient-to-b from-green-50 to-white text-gray-900 py-6">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 tracking-tight mb-4"
          >
            Meet Our Delegates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            A distinguished group of individuals shaping the future of Pakistani literature and culture.
          </motion.p>
        </div>
      </section>

      {/* Delegates Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {delegates.map((delegate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/4] overflow-hidden">
                  <img
                    src={delegate.image}
                    alt={delegate.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Decorative Ribbon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-green-900 text-white flex items-center justify-center rotate-45 transform translate-x-2 -translate-y-2 shadow-sm">
                    <span className="text-xs font-bold transform -rotate-45">PLF</span>
                  </div>
                </div>

                {/* Delegate Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-1">{delegate.name}</h3>
                  {/* <p className="text-sm text-green-700 font-medium mb-2">{delegate.title}</p> */}
                  {/* <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{delegate.bio}</p> */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md text-sm font-medium hover:bg-green-800 transition-colors self-start"
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
      {/* <section className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4"
          >
            Join the PLF Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
          >
            Connect with our delegates and contribute to the celebration of Pakistani literature.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-900 text-white rounded-md text-base font-medium hover:bg-green-800 transition-colors"
          >
            Get Involved
          </motion.button>
        </div>
      </section> */}
    </div>
  );
};

export default PlfDelegates;