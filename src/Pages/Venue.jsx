import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWithSwiper from "../reusableComponents/ReusableCarouselOfAboutUs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images for the slider
import venueImg1 from "../assets/venues/audi1.png";
import venueImg2 from "../assets/venues/audi2.png";
import venueImg3 from "../assets/venues/studio1.png";
import venueImg4 from "../assets/venues/studio2.png";
import venueImg5 from "../assets/venues/haseena-moin.png";
import venueImg6 from "../assets/venues/jaun-elia.png";
import venueImg7 from "../assets/venues/ampitheatre.png";
import venueImg8 from "../assets/venues/cafe.png";
import venueImg9 from "../assets/venues/art-gallery.png";
import venueImg10 from "../assets/venues/library.png";
import venueImg11 from "../assets/venues/rooftop.png";
import venueImg12 from "../assets/venues/lobby.png";
import venueImg13 from "../assets/venues/gulrang.png";
import venueImg14 from "../assets/venues/audio-studio.png";
import venueImg15 from "../assets/venues/parking.png";

const VenuesPage = () => {
  const venueData = [
    { id: 1, name: "Auditorium 1", slug: "audi1", image: venueImg1 },
    { id: 2, name: "Auditorium 2", slug: "audi2", image: venueImg2 },
    { id: 3, name: "Studio 1", slug: "studio1", image: venueImg3 },
    { id: 4, name: "Studio 2", slug: "studio2", image: venueImg4 },
    { id: 5, name: "Haseena Moin Hall", slug: "haseena-moin-hall", image: venueImg5 },
    { id: 6, name: "Jaun Elia Lawn", slug: "jaun-elia-lawn", image: venueImg6 },
    { id: 7, name: "Z.A Bukhari Amphitheatre", slug: "za-bukhari-amphitheatre", image: venueImg7 },
    { id: 8, name: "Café D' Art", slug: "cafe-d-art", image: venueImg8 },
    { id: 9, name: "Ahmed Pervez Art Gallery", slug: "ahmed-pervez-art-gallery", image: venueImg9 },
    { id: 10, name: "Josh Malihabadi Library", slug: "josh-malihabadi-library", image: venueImg10 },
    { id: 11, name: "360° Rooftop Lounge", slug: "360-rooftop-lounge", image: venueImg11 },
    { id: 12, name: "Lobby Area", slug: "lobby-area", image: venueImg12 },
    { id: 13, name: "Gulrang Café", slug: "gulrang-cafe", image: venueImg13 },
    { id: 14, name: "Audio Studio", slug: "audio-studio", image: venueImg14 },
    { id: 15, name: "Parking Area", slug: "parking-area", image: venueImg15 },
  ];

  // Transform venueData into the format expected by SectionWithSwiper
  const swiperImages = venueData.map((venue) => ({
    src: venue.image,
    alt: venue.name,
  }));

  return (
    <div className="bg-white text-black py-6 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* Slider Section using SectionWithSwiper */}
        <SectionWithSwiper
          title="Our Facilities"
          description="The Arts Council of Pakistan Karachi is a hub of cultural and artistic activities, offering a range of venues for various events. From grand auditoriums to intimate studios, our spaces are designed to inspire creativity and foster collaboration."
          images={swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          autoplay={true}
          autoplayDelay={2500}
        />

        {/* Venues Section (Embedded Cards logic) */}
        <div className="bg-white sm:py-6 lg:py-8 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-8">
          <div className="mx-2">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-6 lg:mb-6 tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Venues
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {venueData.map((item, index) => (
                <Link to={`/facilities/${item.slug}`}>
                  <motion.div
                    key={item.id}
                    className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      duration: 0.5
                    }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    {/* Image container with aspect ratio */}
                    <div className="relative w-full aspect-[5/5] overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm mb-4 drop-shadow-md">{item.description}</p>
                        )}
                        <motion.button
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-300 flex items-center"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#c53030"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </motion.button>

                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuesPage;