import React from "react";
import { motion } from "framer-motion";

// Artist Images
import PyfArtistCard1 from "/src/assets/pyf-assets/pyf-delegate1.jpg";
import PyfArtistCard2 from "/src/assets/pyf-assets/pyf-delegate2.jpg";
import PyfArtistCard3 from "/src/assets/pyf-assets/pyf-delegate3.jpg";
import PyfArtistCard4 from "/src/assets/pyf-assets/pyf-delegate4.jpg";
import PyfArtistCard5 from "/src/assets/pyf-assets/pyf-delegate5.jpg";
import PyfArtistCard6 from "/src/assets/pyf-assets/pyf-delegate6.jpg";
import PyfArtistCard7 from "/src/assets/pyf-assets/ahmed-jahanzaib.jpg";
import PyfArtistCard8 from "/src/assets/pyf-assets/ahsan-bari.jpg";
import PyfArtistCard9 from "/src/assets/pyf-assets/auj.jpg";
import PyfArtistCard10 from "/src/assets/pyf-assets/bagga.jpg";
import PyfArtistCard11 from "/src/assets/pyf-assets/jambroz.jpg";
import PyfArtistCard12 from "/src/assets/pyf-assets/mustafa-baloch.jpg";
import PyfArtistCard13 from "/src/assets/pyf-assets/wahab.jpg";

const artists = [
  { name: "Afaq Adnan", image: PyfArtistCard1 },
  { name: "Ali Azmat", image: PyfArtistCard2 },
  { name: "Asim Azhar", image: PyfArtistCard3 },
  { name: "Arman Rahim", image: PyfArtistCard4 },
  { name: "Kashmir Band", image: PyfArtistCard5 },
  { name: "Natasha Baig", image: PyfArtistCard6 },
  { name: "Ahmed Jahanzaib", image: PyfArtistCard7 },
  { name: "Ahsan Bari", image: PyfArtistCard8 },
  { name: "Auj The Band", image: PyfArtistCard9 },
  { name: "Sahir Ali Bagga", image: PyfArtistCard10 },
  { name: "Jambro'z", image: PyfArtistCard11 },
  { name: "Mustafa Baloch", image: PyfArtistCard12 },
  { name: "Wahab Bughti", image: PyfArtistCard13 },
];

const PyfDelegatesPage = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 to-white text-gray-900 py-6">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 tracking-tight mb-4"
          >
            Meet Our Artists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            A distinguished group of individuals shaping the future of Pakistani performing arts.
          </motion.p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {artists.map((artist, index) => (
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
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Decorative Ribbon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-green-900 text-white flex items-center justify-center rotate-45 transform translate-x-2 -translate-y-2 shadow-sm">
                    <span className="text-xs font-bold transform -rotate-45">PYF</span>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-1">{artist.name}</h3>
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
            Join the PYF Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
          >
            Connect with our artists and contribute to the celebration of Pakistani performing arts, starting tomorrow, May 23rd, 2025!
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

export default PyfDelegatesPage;