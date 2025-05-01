import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow for Slider
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-white text-2xl" />
  </button>
);

// Custom Prev Arrow for Slider
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-white text-2xl" />
  </button>
);

// Course Instructors
// Communication Design Department
import Instructor2 from "/src/assets/academies/CommunicationDesignAssets/muhammadAli-Instructor1.png";
import Instructor1 from "/src/assets/academies/CommunicationDesignAssets/mOwais-Instructor2.jpeg";
// import instructor3 from "/src/assets/academies/CommunicationDesignAssets/instructor3.jpg";


const placeholderImages = {
  "graphic-design": [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=GraphicDesign-Image2",
    "https://via.placeholder.com/400x300?text=GraphicDesign-Image3",
    "https://via.placeholder.com/400x300?text=GraphicDesign-Image4",
    "https://via.placeholder.com/400x300?text=GraphicDesign-Image5",
  ],
  dance: [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=Dance-Image2",
    "https://via.placeholder.com/400x300?text=Dance-Image3",
    "https://via.placeholder.com/400x300?text=Dance-Image4",
    "https://via.placeholder.com/400x300?text=Dance-Image5",
  ],
  "fine-arts": [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=FineArts-Image2",
    "https://via.placeholder.com/400x300?text=FineArts-Image3",
    "https://via.placeholder.com/400x300?text=FineArts-Image4",
    "https://via.placeholder.com/400x300?text=FineArts-Image5",
  ],
  music: [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=Music-Image2",
    "https://via.placeholder.com/400x300?text=Music-Image3",
    "https://via.placeholder.com/400x300?text=Music-Image4",
    "https://via.placeholder.com/400x300?text=Music-Image5",
  ],
  "textile-design": [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=TextileDesign-Image2",
    "https://via.placeholder.com/400x300?text=TextileDesign-Image3",
    "https://via.placeholder.com/400x300?text=TextileDesign-Image4",
    "https://via.placeholder.com/400x300?text=TextileDesign-Image5",
  ],
  theatre: [
    "https://acpkhi.com/imgs/academies.webp",
    "https://via.placeholder.com/400x300?text=Theatre-Image2",
    "https://via.placeholder.com/400x300?text=Theatre-Image3",
    "https://via.placeholder.com/400x300?text=Theatre-Image4",
    "https://via.placeholder.com/400x300?text=Theatre-Image5",
  ],
};

const CoursePage = () => {
  const { department } = useParams();

  const courseData = {
    "graphic-design": {
      name: "Communication Design Department",
      heroImages: placeholderImages["graphic-design"],
      description: "The Communication Design Department offers a creative journey into the world of graphic design, focusing on visual storytelling, branding, and digital media to equip students with industry-ready skills.",
      details: {
        "1-Year Diploma": [
          "Students will get a comprehensive understanding of:",
          "Drawing",
          "Basic Design",
          "Computer Graphics",
          "History of Graphic Design",
          "Calligraphy",
          "Introduction to Photography",
          "Advertising Design",
          "Basic Design",
        ],
        "3-Month Certificate Course (Morning Shift / Weekend Classes)": [
          "Students will get a basic understanding of:",
          "Drawing",
          "History of Graphic Design",
          "Multimedia Advertisement",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 30 years (for this course)",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 10,000",
          "Monthly Fee for the course: Rs. 8,000",
        ],
      },
      instructors: [
        { name: "Muhammad Ali Khan", title: "Head of Department", image: Instructor2 },
        { name: "Muhammad Owais", title: "UI/UX Designer, 2D & 3D Graphic Designer Teacher", image: Instructor1 },

      ],
      registerLink: "/academies/graphic-design/register",
    },
    dance: {
      name: "Dance Department",
      heroImages: placeholderImages.dance,
      description: "The Dance Department provides a dynamic platform to learn classical and contemporary dance forms, fostering creativity and performance skills under expert guidance.",
      details: {
        "1-Year Diploma": [
          "Students will master the following disciplines:",
          "Classical Dance",
          "Contemporary Dance",
          "Dance History",
          "Choreography Techniques",
        ],
        "3-Month Certificate Course (Evening Classes)": [
          "Students will learn the basics of:",
          "Choreography Basics",
          "Dance Movement",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 16 - 28 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 8,000",
          "Monthly Fee for the course: Rs. 6,000",
        ],
      },
      instructors: [
        { name: "Aisha Khan", title: "Lead Choreographer", image: "https://via.placeholder.com/150" },
        { name: "Rahul Sharma", title: "Dance Instructor", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/dance/register",
    },
    "fine-arts": {
      name: "Fine Arts Department",
      heroImages: placeholderImages["fine-arts"],
      description: "The Fine Arts Department nurtures artistic talent through painting, sculpture, and art history, encouraging students to explore their creativity and express themselves through visual arts.",
      details: {
        "1-Year Diploma": [
          "Students will explore:",
          "Painting Techniques",
          "Sculpture",
          "Art History",
          "Color Theory",
        ],
        "3-Month Certificate Course (Morning Shift)": [
          "Students will gain an understanding of:",
          "Art History",
          "Basic Sketching",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 32 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 12,000",
          "Monthly Fee for the course: Rs. 9,000",
        ],
      },
      instructors: [
        { name: "Sara Ahmed", title: "Head of Fine Arts", image: "https://via.placeholder.com/150" },
        { name: "Bilal Hassan", title: "Painting Instructor", image: "https://via.placeholder.com/150" },
        { name: "Nadia Malik", title: "Sculpture Teacher", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/fine-arts/register",
    },
    music: {
      name: "Music Department",
      heroImages: placeholderImages.music,
      description: "The Music Department offers a harmonious blend of vocal and instrumental training, music theory, and composition, helping students develop their musical talents and perform confidently.",
      details: {
        "1-Year Diploma": [
          "Students will develop skills in:",
          "Vocal Training",
          "Instrument Mastery (Piano/Guitar)",
          "Music Theory",
          "Music Composition",
        ],
        "3-Month Certificate Course (Weekend Classes)": [
          "Students will learn:",
          "Music Theory Basics",
          "Vocal Exercises",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 16 - 30 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 10,000",
          "Monthly Fee for the course: Rs. 7,000",
        ],
      },
      instructors: [
        { name: "Zainab Raza", title: "Vocal Coach", image: "https://via.placeholder.com/150" },
        { name: "Omar Farooq", title: "Instrument Instructor", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/music/register",
    },
    "textile-design": {
      name: "Textile Design Department",
      heroImages: placeholderImages["textile-design"],
      description: "The Textile Design Department explores the art of fabric design and pattern making, equipping students with skills to create innovative and market-ready textile designs.",
      details: {
        "1-Year Diploma": [
          "Students will specialize in:",
          "Textile Printing",
          "Fabric Design",
          "Pattern Making",
          "Textile History",
        ],
        "3-Month Certificate Course (Evening Classes)": [
          "Students will learn the basics of:",
          "Pattern Making",
          "Textile Techniques",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 30 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 11,000",
          "Monthly Fee for the course: Rs. 8,500",
        ],
      },
      instructors: [
        { name: "Fatima Noor", title: "Head of Textile Design", image: "https://via.placeholder.com/150" },
        { name: "Ali Raza", title: "Textile Designer", image: "https://via.placeholder.com/150" },
        { name: "Hina Khan", title: "Pattern Making Expert", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/textile-design/register",
    },
    theatre: {
      name: "Theatre Department",
      heroImages: placeholderImages.theatre,
      description: "The Theatre Department offers immersive training in acting, stage direction, and theatre production, preparing students for a career in the performing arts.",
      details: {
        "1-Year Diploma": [
          "Students will master:",
          "Acting Techniques",
          "Stage Direction",
          "Theatre History",
          "Stage Design",
        ],
        "3-Month Certificate Course (Morning Shift)": [
          "Students will learn the basics of:",
          "Script Writing",
          "Acting Basics",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 28 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 9,000",
          "Monthly Fee for the course: Rs. 6,500",
        ],
      },
      instructors: [
        { name: "Khalid Mehmood", title: "Theatre Director", image: "https://via.placeholder.com/150" },
        { name: "Sana Javed", title: "Acting Coach", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/theatre/register",
    },
  };

  const [currentCourse, setCurrentCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const loadData = () => {
      const data = courseData[department] || courseData["graphic-design"];
      if (data) {
        setCurrentCourse(data);
      } else {
        console.error("No data found for department:", department);
      }
    };
    loadData();
  }, [department]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!currentCourse) {
    return (
      <div className="text-center py-10 text-black">
        Loading course data...
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-2/3">
              <Slider {...sliderSettings}>
                {currentCourse.heroImages.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Academy Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ backgroundColor: "#e5e7eb" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Description */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <motion.h2
                className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About {currentCourse.name}
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {currentCourse.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section>

          <div className="mb-12 flex flex-col sm:flex-row gap-2 sm:gap-4">
            {["details", "instructors", "howToApply", "enroll"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 rounded-xl text-lg font-semibold capitalize transition-colors duration-300 ${activeTab === tab
                  ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                  : "bg-[#B90602] text-white cursor-pointer hover:bg-black/80 hover:shadow-lg"
                  }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === "howToApply" ? "How to Apply" : tab === "enroll" ? "Enroll Now" : tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Details
                </h2>
                <div className="space-y-4">
                  {Object.entries(currentCourse.details).map(([section, items], index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{section}</h3>
                      <ul className="space-y-3">
                        {items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <FaCheckCircle className="text-red-600 mr-3" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "howToApply" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  How to Apply
                </h2>
                <div className="space-y-4">
                  {Object.entries(currentCourse.howToApply).map(([section, items], index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{section}</h3>
                      <ul className="space-y-3">
                        {items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <FaCheckCircle className="text-red-600 mr-3" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "enroll" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Enroll Now
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Select Academy</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      defaultValue={department}
                    >
                      {Object.keys(courseData).map((key) => (
                        <option key={key} value={key}>{courseData[key].name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Preferred Start Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <motion.button
                    className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === "instructors" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Instructors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCourse.instructors.map((instructor, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-4 overflow-hidden rounded-md border-2 border-red-600">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          style={{ backgroundColor: "#e5e7eb" }}
                        />
                      </div>
                      <div className="border-t-2 border-red-600 w-16 mx-auto mb-3"></div>
                      <h3 className="text-lg font-semibold text-gray-900">{instructor.name}</h3>
                      <p className="text-sm text-gray-600">{instructor.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;