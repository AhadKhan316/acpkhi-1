import React from "react";
import { motion } from "framer-motion";

// Placeholder images for PTF artists (replace with actual PTF assets)
import PtfArtistCard1 from "/src/assets/ptf-assets/artists_Salman_Shahid1.png";
import PtfArtistCard2 from "/src/assets/ptf-assets/artist_uplift_theatre2.png";
import PtfArtistCard3 from "/src/assets/ptf-assets/artists_Nida_Butt3.png";
import PtfArtistCard4 from "/src/assets/ptf-assets/artist_Leondro_Kees4.png";
import PtfArtistCard5 from "/src/assets/ptf-assets/artist_Dawar5.png";
import PtfArtistCard11 from "/src/assets/ptf-assets/artist_Farhan_Alam6.png";
import PtfArtistCard10 from "/src/assets/ptf-assets/Khalid-Anam.png";
import PtfArtistCard6 from "/src/assets/ptf-assets/ptf-highlights1.png";
import PtfArtistCard7 from "/src/assets/ptf-assets/ptf-highlights2.png";
import PtfArtistCard8 from "/src/assets/ptf-assets/ptf-highlights3.png";
import PtfArtistCard9 from "/src/assets/ptf-assets/ptf-highlights4.png";

const artists = [
  {
    name: "Salman Shahid",
    // title: "Actor",
    // bio: "Versatile theatre actor known for his compelling performances.",
    image: PtfArtistCard1,
  },
  {
    name: "Uplift Physical Theatre",
    // title: "Director",
    // bio: "Renowned theatre director with a focus on dark comedies.",
    image: PtfArtistCard2,
  },
  {
    name: "Nida Butt",
    // title: "Actress",
    // bio: "Award-winning actress specializing in family dramas.",
    image: PtfArtistCard3,
  },
  {
    name: "Performing:Group",
    // title: "Playwright",
    // bio: "Celebrated playwright known for his tragic narratives.",
    image: PtfArtistCard4,
  },
  {
    name: "Dawar Mehmood",
    // title: "Actress",
    // bio: "Rising star in Pakistani theatre with a flair for comedy.",
    image: PtfArtistCard5,
  },
  {
    name: "Tehrik-e-Niswan",
    // title: "Director",
    // bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard6,
  },
  {
    name: "Olomopolo Media",
    // title: "Director",
    // bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard7,
  },
  {
    name: "Rehan Shaikh",
    // title: "Director",
    // bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard8,
  },
  {
    name: "Ajoka",
    // title: "Director",
    // bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard9,
  },
  {
    name: "Grips Theatre",
    title: "Director",
    bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard10,
  },
  {
    name: "Farhan Rahim",
    title: "Director",
    bio: "Influential director shaping modern Pakistani theatre.",
    image: PtfArtistCard11,
  },
];

const PtfArtistsPage = () => {
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
            Meet Our Artists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            A distinguished group of individuals shaping the future of Pakistani theatre and performing arts.
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
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-900 text-white flex items-center justify-center rotate-45 transform translate-x-2 -translate-y-2 shadow-sm">
                    <span className="text-xs font-bold transform -rotate-45">PTF</span>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-900 mb-1">{artist.name}</h3>
                  {/* <p className="text-sm text-red-700 font-medium mb-2">{artist.title}</p> */}
                  {/* <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{artist.bio}</p> */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-red-900 text-white rounded-md text-sm font-medium hover:bg-red-800 transition-colors self-start"
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-4"
          >
            Join the PTF Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
          >
            Connect with our artists and contribute to the celebration of Pakistani theatre, starting May 23rd, 2025, in just 2 days!
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

export default PtfArtistsPage;