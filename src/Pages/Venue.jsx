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

  const swiperImages = venueData.map((venue) => ({
    src: venue.image,
    alt: venue.name,
  }));

  return (
    <div className="bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 my-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Explore Our Venues
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {venueData.map((item) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/facilities/${item.slug}`}>
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold drop-shadow-md mb-2">{item.name}</h3>
                  <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-md">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-  ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenuesPage;
