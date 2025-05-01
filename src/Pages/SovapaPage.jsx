import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWithSwiper from "../reusableComponents/ReusableCarouselOfAboutUs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import departmentImg1 from "../assets/academies/communication-design.png";
import departmentImg2 from "../assets/academies/dance.png";
import departmentImg3 from "../assets/academies/fine-arts.png";
import departmentImg4 from "../assets/academies/music.png";
import departmentImg5 from "../assets/academies/textile-design.png";
import departmentImg6 from "../assets/academies/Theatre.png";


import sliderImg1 from "../assets/academies/acp-drone-2023.png";
import sliderImg2 from "../assets/academies/music.png";
import sliderImg3 from "../assets/academies/dance.png";
import sliderImg4 from "../assets/academies/fine-arts.png";
import sliderImg5 from "../assets/academies/textile-design.png";
import sliderImg6 from "../assets/academies/Theatre.png";

const SovapaPage = () => {
  const academyData = [
    { id: 1, name: "Graphic Design", image: departmentImg1, route: "graphic-design" },
    { id: 2, name: "Dance", image: departmentImg2, route: "dance" },
    { id: 3, name: "Fine Arts", image: departmentImg3, route: "fine-arts" },
    { id: 4, name: "Textile Design", image: departmentImg4, route: "textile-design" },
    { id: 5, name: "Theatre", image: departmentImg5, route: "theatre" },
    { id: 6, name: "Music", image: departmentImg6, route: "music" },
  ];

  const swiperImages = [
    { src: sliderImg1, alt: "Slider 1" },
    { src: sliderImg2, alt: "Slider 2" },
    { src: sliderImg3, alt: "Slider 3" },
    { src: sliderImg4, alt: "Slider 4" },
    { src: sliderImg5, alt: "Slider 5" },
    { src: sliderImg6, alt: "Slider 6" },
  ];

  return (
    <div className="py-6 min-h-screen bg-white text-black">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        <SectionWithSwiper
          title="Arts Council Academies Where Artists Thrive"
          description="Since 1954, the Arts Council of Pakistan Academies have been the perfect place to nurture your creativity. Our Performing Arts Academy & Visual Arts Academy boast of highly qualified faculty in their respective disciplines. Join us to kickstart your artistic career."
          images={swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          autoplay={true}
          autoplayDelay={2500}
        />

        {/* Departments Section (Embedded Cards logic) */}
        <div className="bg-white sm:py-6 lg:py-8 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-8">
          <div className="mx-2">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-6 lg:mb-6 tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Departments
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {academyData.map((item, index) => (
                <Link to={`/sovapa/${item.route}`} key={item.id}>
                  <motion.div
                    className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[5/5] overflow-hidden cursor-pointer">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content */}
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
                          whileHover={{ scale: 1.05, backgroundColor: "#c53030" }}
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

export default SovapaPage;