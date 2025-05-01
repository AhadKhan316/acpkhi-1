import React from "react";
import { motion } from "framer-motion";

import AucDelegatePageCard1 from "/src/assets/auc-assets/page-delegate1.jpg"
import AucDelegatePageCard2 from "/src/assets/auc-assets/page-delegate2.jpg"
import AucDelegatePageCard3 from "/src/assets/auc-assets/page-delegate3.jpg"
import AucDelegatePageCard4 from "/src/assets/auc-assets/page-delegate4.jpg"
import AucDelegatePageCard5 from "/src/assets/auc-assets/page-delegate5.jpg"
import AucDelegatePageCard6 from "/src/assets/auc-assets/page-delegate6.jpg"
import AucDelegatePageCard7 from "/src/assets/auc-assets/page-delegate7.jpg"
import AucDelegatePageCard8 from "/src/assets/auc-assets/page-delegate8.jpg"

const delegates = [
  {
    name: "Adnan Siddiqui",
    title: "Actor",
    bio: "Renowned Pakistani actor and television personality.",
    image: AucDelegatePageCard1,
  },
  {
    name: "Iftikhar Arif",
    title: "Poet",
    bio: "Celebrated Urdu poet and scholar.",
    image: AucDelegatePageCard2,
  },
  {
    name: "Saba Qamar",
    title: "Actress",
    bio: "Award-winning actress known for her versatility.",
    image: AucDelegatePageCard3,
  },
  {
    name: "Anwar Maqsood",
    title: "Writer",
    bio: "Iconic playwright and satirist.",
    image: AucDelegatePageCard4,
  },
  {
    name: "Zeba Bakhtiar",
    title: "Actress & Director",
    bio: "Veteran actress and film director.",
    image: AucDelegatePageCard5,
  },
  {
    name: "Mustafa Qureshi",
    title: "Actor",
    bio: "Legendary figure in Pakistani cinema.",
    image: AucDelegatePageCard6,
  },
  {
    name: "Nida Yasir",
    title: "TV Host",
    bio: "Popular television host and actress.",
    image: AucDelegatePageCard7,
  },
  {
    name: "Bushra Ansari",
    title: "Actress & Comedian",
    bio: "Renowned actress and comedian.",
    image: AucDelegatePageCard8,
  },
  {
    name: "Shahid Afridi",
    title: "Cricketer",
    bio: "Former Pakistani cricketer and philanthropist.",
    image: AucDelegatePageCard1,
  }

];

const AucDelegates = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-red-50 to-white min-h-screen text-gray-900 ">
      {/* Hero Section with Diagonal Overlay */}
      <section className="relative overflow-hidden py-8 md:py-24">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 70,100 0,100" fill="url(#diagonal)" />
            <defs>
              <linearGradient id="diagonal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" style={{ stopColor: "#ef4444" }} /> {/* Red-500 */}
                <stop offset="100%" style={{ stopColor: "transparent" }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-red-800 tracking-tight mb-6"
          >
            Our Esteemed Delegates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-black max-w-3xl mx-auto"
          >
            Discover the luminaries driving the legacy of Urdu culture forward.
          </motion.p>
        </div>
      </section>

      {/* Delegates Grid */}
      <section className="py-8">
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
                  boxShadow: "0 15px 30px rgba(239, 68, 68, 0.2)", // Red shadow
                  transition: { duration: 0.3 },
                }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-red-100 flex flex-col max-w-[400px] mx-auto"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <img
                    src={delegate.image}
                    alt={delegate.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* AUC Branding Badge */}
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold transform group-hover:bg-red-700 transition-colors duration-300">
                    AUC Delegate
                  </div>
                </div>

                {/* Delegate Info */}
                <div className="p-6 flex flex-col justify-between bg-gradient-to-b from-white to-red-50">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-900 mb-2 truncate">
                      {delegate.name}
                    </h3>
                    <p className="text-sm sm:text-base text-red-700 font-medium mb-3">
                      {/* {delegate.title} */}
                    </p>
                    {/* <p className="text-sm text-gray-600 line-clamp-2">{delegate.bio}</p> */}
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-300 self-start"
                  >
                    Read More
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-t from-red-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl font-bold text-red-800 mb-6"
          >
            Be Part of AUC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-lg text-black mb-8 max-w-2xl mx-auto"
          >
            Engage with our delegates and celebrate the richness of Urdu heritage.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-lg text-lg font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AucDelegates;