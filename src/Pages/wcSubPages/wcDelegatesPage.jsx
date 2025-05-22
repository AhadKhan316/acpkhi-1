import React from "react";
import { motion } from "framer-motion";

// import WcDelegateCard1 from "/src/assets/wc-assets/delegate1.jpg";
// import WcDelegateCard2 from "/src/assets/wc-assets/delegate2.jpg";
// import WcDelegateCard3 from "/src/assets/wc-assets/delegate3.jpg";
// import WcDelegateCard4 from "/src/assets/wc-assets/delegate4.jpg";
// import WcDelegateCard5 from "/src/assets/wc-assets/delegate5.jpg";
// import WcDelegateCard6 from "/src/assets/wc-assets/delegate6.jpg";

const delegates = [
  // { name: "Ayesha Khan", image: WcDelegateCard1 },
  // { name: "Sana Malik", image: WcDelegateCard2 },
  // { name: "Zara Ahmed", image: WcDelegateCard3 },
  // { name: "Nadia Javed", image: WcDelegateCard4 },
  // { name: "Hina Shahid", image: WcDelegateCard5 },
  // { name: "Rabia Noor", image: WcDelegateCard6 },
];

const WcDelegatePage = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 to-white text-gray-900 py-6">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 tracking-tight mb-4"
          >
            Meet Our Delegates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            A distinguished group of women leaders shaping the future of empowerment and dialogue.
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
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-900 text-white flex items-center justify-center rotate-45 transform translate-x-2 -translate-y-2 shadow-sm">
                    <span className="text-xs font-bold transform -rotate-45">WC</span>
                  </div>
                </div>

                {/* Delegate Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-900 mb-1">{delegate.name}</h3>
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-4"
          >
            Join the Women Conference Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
          >
            Connect with our delegates and contribute to the celebration of women's empowerment, starting tomorrow, May 23rd, 2025!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-900 text-white rounded-md text-base font-medium hover:bg-red-800 transition-colors"
          >
            Get Involved
          </motion.button>
        </div>
      </section> */}
    </div>
  );
};

export default WcDelegatePage;