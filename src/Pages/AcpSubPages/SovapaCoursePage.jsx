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
import CdHead1 from "/src/assets/academies/CommunicationDesignAssets/muhammadAli-Head1.png";
import Instructor1 from "/src/assets/academies/CommunicationDesignAssets/mOwais-Instructor2.jpeg";
// import instructor3 from "/src/assets/academies/CommunicationDesignAssets/instructor3.jpg";

// Dance Department
import DanceHead1 from "/src/assets/academies/DanceAssets/maniChao-Head1.jpeg";
import DanceInstructor2 from "/src/assets/academies/DanceAssets/khurramTal-Instructor2.jpeg";
import DanceInstructor3 from "/src/assets/academies/DanceAssets/ghani-Instructor3.jpeg";

// Fine Arts Department
import FineArtsHead1 from "/src/assets/academies/FineArtsAssets/muhammadZeeshan-Head1.jpg";
import FineArtsInstructor2 from "/src/assets/academies/FineArtsAssets/Saleem-Instructor2.jpg";
import FineArtsInstructor3 from "/src/assets/academies/FineArtsAssets/farukhShahab-Instructor3.jpg";
import FineArtsInstructor4 from "/src/assets/academies/FineArtsAssets/ubaidSyed-Instructor4.jpeg";
import FineArtsInstructor5 from "/src/assets/academies/FineArtsAssets/muneerShah-Instructor5.jpeg";
import FineArtsInstructor6 from "/src/assets/academies/FineArtsAssets/faheemRao-Instructor6.jpeg";
import FineArtsInstructor7 from "/src/assets/academies/FineArtsAssets/syedFarazAli-Instructor7.jpeg";
import FineArtsInstructor8 from "/src/assets/academies/FineArtsAssets/Shamama-Instructor8.jpg";
import FineArtsInstructor9 from "/src/assets/academies/FineArtsAssets/nazarUlIslam-Instructor9.jpeg";
import FineArtsInstructor10 from "/src/assets/academies/FineArtsAssets/Shamama-Instructor8.jpg";
import FineArtsInstructor11 from "/src/assets/academies/FineArtsAssets/Shamama-Instructor8.jpg";
import FineArtsInstructor12 from "/src/assets/academies/FineArtsAssets/Shamama-Instructor8.jpg";

// Music Department
import MusicHead1 from "/src/assets/academies/MusicAssets/AhsanBari-Head1.jpg";
import MusicHod2 from "/src/assets/academies/MusicAssets/imad-hod2.jpeg";
import MusicInstructor3 from "/src/assets/academies/MusicAssets/mehmoodAliKhan-Instructor3.jpeg";
import MusicInstructor4 from "/src/assets/academies/MusicAssets/intezarHussain-Instructor4.jpeg";
import MusicInstructor5 from "/src/assets/academies/MusicAssets/philipShahid-Instructor5.jpeg";
import MusicInstructor6 from "/src/assets/academies/MusicAssets/warisJimmy-Instructor6.jpeg";
import MusicInstructor7 from "/src/assets/academies/MusicAssets/zulfiqarAli-Instructor7.jpeg";
import MusicInstructor8 from "/src/assets/academies/MusicAssets/waqasGhulab-Instructor8.jpeg";
import MusicInstructor9 from "/src/assets/academies/MusicAssets/shamsUlArfeen-Instructor9.jpeg";
import MusicInstructor10 from "/src/assets/academies/MusicAssets/muzzi-Instructor10.jpg";
import MusicInstructor11 from "/src/assets/academies/MusicAssets/gul-Instructor11.jpg";
import MusicInstructor12 from "/src/assets/academies/MusicAssets/shahzaib-Instructor12.jpeg";
import MusicInstructor13 from "/src/assets/academies/MusicAssets/Zeeshan-Instructor13.jpg";
import MusicInstructor14 from "/src/assets/academies/MusicAssets/shahidTabla-Instructor14.jpg";
import MusicInstructor15 from "/src/assets/academies/MusicAssets/john-Instructor15.jpeg";
import MusicInstructor16 from "/src/assets/academies/MusicAssets/faheem-Instructor16.jpg";
import MusicInstructor17 from "/src/assets/academies/MusicAssets/faheem-Instructor16.jpg";
import MusicInstructor18 from "/src/assets/academies/MusicAssets/faheem-Instructor16.jpg";
import MusicInstructor19 from "/src/assets/academies/MusicAssets/faheem-Instructor16.jpg";

// Textile Design Department
import TextileHead1 from "/src/assets/academies/TextileDesignAssets/muhammadZeeshan-Head1.jpg";
import TextileInstructor2 from "/src/assets/academies/TextileDesignAssets/aamirIjaz-Instructor2.jpeg";
import TextileInstructor3 from "/src/assets/academies/TextileDesignAssets/shahKhalid-Instructor3.jpeg";
import TextileInstructor4 from "/src/assets/academies/TextileDesignAssets/mYaseen-Instructor4.jpeg";
import TextileInstructor5 from "/src/assets/academies/TextileDesignAssets/Shamama-Instructor5.jpg";



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
          "Multimedia Design",
          "Portfolio Building",
        ],
        Days: [
          "Monday to Friday",
          "Shift : Morning",
        ],
        "3-Month Certificate Course (Morning Shift / Weekend Classes)": [
          "Students will get a basic understanding of:",
          "History of Graphic Design",
          "Multimedia Advertisement",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age bracket: 10 - 35 years (varies from course to course)",
        ],
        "Documents": [
          "CNIC/B-Form copy",
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC Copy",
        ],
        "Fee Structure": [
          "Admission fee for short course: Rs 1,000",
          "Admission fee for diploma: Rs 10,000",
          "Monthly fee for all courses: Rs 8,000",
        ],
      },
      instructors: [
        { name: "Muhammad Ali Khan", title: "Head of Department", image: CdHead1 },
        { name: "Muhammad Owais", title: "UI/UX Designer, 2D & 3D Graphic Designer Teacher", image: Instructor1 },
        { name: "Sachin Kumar", title: "Graphic Design Assistant Teacher", image: Instructor1 },

      ],
      registerLink: "/academies/graphic-design/register",
    },
    dance: {
      name: "Dance Department",
      heroImages: placeholderImages.dance,
      description: "The Dance Department provides a dynamic platform to learn classical and contemporary dance forms, fostering creativity and performance skills under expert guidance.",
      details: {
        "6-Month Course": [
          "The classes comprise of the following:",
          "Classical Dance",
          "Freestyle",
          "Hip Hop",
          "Filmy Dance",
          "Yoga",
        ],
        "At-the-End": ["Students will put up one performance at ACPKHI at the end of the course."],
        Days: [
          "(Tuesday, Thursday & Saturday)",
          "Shift : Evening",
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
          "Age bracket: 10-35 (varies from course to course)",
        ],
        "Documents": [
          "CNIC/B-Form copy",
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC Copy",
        ],
        "Fee Structure": [
          "Admission fee for any course: Rs, 1,000",
          "Monthly fee for short course: Rs 8,000",
        ],
        "Fee-Structure": [
          "The fee is only to be paid on a trimester basis",
        ]
      },
      instructors: [
        { name: "Mani Haider Chao", title: "Head of Department", image: DanceHead1 },
        { name: "Khurram Shahzad", title: "Hip Hop Teacher", image: DanceInstructor2 },
        { name: "Mohammad Ghani", title: "Filmy Dance Teacher", image: DanceInstructor3 },
      ],
      registerLink: "/academies/dance/register",
    },
    "fine-arts": {
      name: "Fine Arts Department",
      heroImages: placeholderImages["fine-arts"],
      description: "The Fine Arts Department nurtures artistic talent through painting, sculpture, and art history, encouraging students to explore their creativity and express themselves through visual arts.",
      details: {
        "4-Year Diploma (Affiliated with Sindh Technical Board)": [
          "Students will gain mid-level knowledge of the following subjects:",
          "History of Arts & Philosophy of Arts",
          "Drawing",
          "Painting",
          "Calligraphy",
          "Printmaking",
          "Sculpture",
          "Miniature",
        ],
        Days: [
          "Monday to Friday",
          "Shift : Morning",
        ],
        "2-Year Certificate Course (Affiliated with Sindh Technical Board)": [
          "Students will gain mid-level knowledge of the following subjects:",
          "History of Arts & Philosophy of Arts",
          "Drawing",
          "Painting",
          "Calligraphy",
          "Printmaking",
          "Sculpture",
          "Miniature",
        ],
        "2-Year Certificate Course Days": [
          "Monday to Friday",
          "Shift : Morning",
        ],
        "3-Month Executive Course (Weekend Classes)": [
          "Students can pick any one of the following disciplines in the executive course:",
          "Drawing",
          "Painting",
        ]
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age bracket: 10-35 (varies from course to course)",
        ],
        "Documents": [
          "CNIC/B-Form copy",
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC Copy",
        ],
        "Fee Structure": [
          "Admission fee for short course: Rs 1,000",
          "Admission fee for diploma: Rs 10,000",
          "Monthly fee for all courses: Rs 8,000",
        ],
      },
      instructors: [
        { name: "Muhammad Zeeshan", title: "Head of Department", image: FineArtsHead1 },
        { name: "Saleem Raza", title: "Drawing Teacher", image: FineArtsInstructor2 },
        { name: "Farukh Tanveer Sahab", title: "Concept of Painting", image: FineArtsInstructor3 },
        { name: "Ubaid Syed", title: "Painting Teacher", image: FineArtsInstructor4 },
        { name: "Nazar Ul Islam", title: "Maniature Teacher", image: FineArtsInstructor9 },
        { name: "Munir Shah", title: "Water Color Teacher", image: FineArtsInstructor5 },
        { name: "Faheem Rao", title: "Sculpture Teacher", image: FineArtsInstructor6 },
        { name: "Syed Faraz Ali", title: "Contemporary Sculpture & Thesis Review Teacher", image: FineArtsInstructor7 },
        { name: "Shamama Tuz Zahra", title: "History of Art Teacher", image: FineArtsInstructor8 },
        { name: "Masood Alam Khan", title: "Technique of Water Color Teacher", image: FineArtsInstructor9 },
        { name: "Uzma Noor", title: "Print Making Teacher", image: FineArtsInstructor11 },
        { name: "Kashif Khan", title: "Calligrapher Teacher", image: FineArtsInstructor12 },
      ],
      registerLink: "/academies/fine-arts/register",
    },
    music: {
      name: "Music Department",
      heroImages: placeholderImages.music,
      description: "The Music Department offers a harmonious blend of vocal and instrumental training, music theory, and composition, helping students develop their musical talents and perform confidently.",
      details: {
        "3-Year Diploma": [
          "Students will get to choose one of the following disciplines:",
          "Vocal (Singing)",
          "Guitar",
          "Keyboard (Piano)",
          "Drums",
        ],
        "Compuslory Theory Course": [
          "Compulsory theory courses will be taught with any one of the above subjects. Students will be a part of ACKHI’s music productions. They will also perform at music festivals."
        ],
        Days: [
          "Monday to Friday",
          "Shift: Evening",
        ],
        "3-Month Executive Weekend Classes": [
          "Students will get to choose one of the following disciplines:",
          "Vocal (Singing)",
          "Guitar",
          "Keyboard (Piano)",
          "Drums",
          "Violin",
          "Audio Production",
        ],
        "Executive Course": [
          "Students of the Executive Course will also learn basic music theory. Students will put up a music performance ACPKHI at the end of the course."
        ],
        "3-Months Executive Course Days": [
          "Saturday & Sunday",
          "Shift : Evening"
        ],
      },

      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age bracket: 10-35 (varies from course to course)",
        ],
        "Documents": [
          "CNIC/B-Form copy",
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission fee for any course: Rs 1,000",
          "Trimester fee for diploma: Rs 18,000",
          "Monthly fee for short course: Rs 8,000",
          "The fee is only to be paid on a trimester basis.",
        ],
      },
      instructors: [
        { name: "Ahsan Iqbal Bari", title: "Head of Department", image: MusicHead1 },
        { name: "Emad Ur Rehman", title: "HOD Music Production (Teaching Music Production)", image: MusicHod2 },
        { name: "Mehmood Ali Khan", title: "Vocal Teacher", image: MusicInstructor3 },
        { name: "Intezar Hussain", title: "Vocal Teacher", image: MusicInstructor4 },
        { name: "Philip Shahid", title: "Piano Teacher", image: MusicInstructor5 },
        { name: "Waris Jimmy", title: "Tabla Player", image: MusicInstructor6 },
        { name: "Zulfiqar Ali", title: "Tabla Player", image: MusicInstructor7 },
        { name: "M. Waqas Ghulab", title: "Rhythem Understanding Teacher", image: MusicInstructor8 },
        { name: "Shams Ul Ariffeen", title: "Drums Teacher", image: MusicInstructor9 },
        { name: "Muzamil Sammad", title: "Music producer (Teaching Keyboard)", image: MusicInstructor10 },
        { name: "Gul Muhammad Khan", title: "Sarangi Teacher", image: MusicInstructor11 },
        { name: "Shahzaib Ali", title: "Vocal Teacher", image: MusicInstructor12 },
        { name: "Zeeshan Pervaiz", title: "Guitar Teacher", image: MusicInstructor13 },
        { name: "Shahid Ali", title: "Tabla Player", image: MusicInstructor14 },
        { name: "John Joseph Saville", title: "Piano Teacher", image: MusicInstructor15 },
        { name: "Faheem Ahmed", title: "Drums and Theory Teacher", image: MusicInstructor16 },
        { name: "Faheem Khan", title: "Vocal Teacher", image: MusicInstructor17 },
        { name: "Faheem Khan", title: "Vocal Teacher", image: MusicInstructor18 },
        { name: "Faheem Khan", title: "Vocal Teacher", image: MusicInstructor19 },
      ],
      registerLink: "/academies/music/register",
    },
    "textile-design": {
      name: "Textile Design Department",
      heroImages: placeholderImages["textile-design"],
      description: "The Textile Design Department explores the art of fabric design and pattern making, equipping students with skills to create innovative and market-ready textile designs.",
      details: {
        "4-Year Diploma (Affiliated with Sindh Technical Board)": [
          "Students will get a deep understanding of the following subjects and display their work in public exhibitions:",
          "History of Arts & Philosophy of Arts",
          "Technique of Fabric Technology",
          "Technique of Fabric Printing",
          "Drawing",
          "Application of Design",
          "Design Development",
          "Hard Craft Textile",
        ],
        Days: [
          "Monday to Friday (Morning shift)"
        ],
        "2-Year Certificate Course (Affiliated with Sindh Technical Board)": [
          "Students will get a mid-level understanding of the following subjects:",
          "History of Arts & Philosophy of Arts",
          "Technique of Fabric Technology",
          "Technique of Fabric Printing",
          "Drawing",
          "Application of Design",
          "Design Development",
          "Hard Craft Textile",
        ],
        "2-Year Certificate Course Days": [
          "Monday to Friday (Morning shift)"
        ],
        "3-Month Certificate Course (Morning Shift / Weekend classes)": [
          "Block Printing",
          "Screen Printing",
          "Handcrafted",
        ],
      },

      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age bracket: 10-35 (varies from course to course)",
        ],
        "Documents": [
          "CNIC/B-Form copy",
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC Copy",
        ],
        "Fee Structure": [
          "Admission fee for short course: Rs 1,000",
          "Admission fee for diploma: Rs 10,000",
          "Monthly fee for all courses: Rs 8,000",
          "The fee is only to be paid on a trimester basis.",
        ],
      },
      instructors: [
        { name: "Muhammad Zeeshan", title: "Head of Department", image: TextileHead1 },
        { name: "M. Amir Aijaz", title: "Textile Design Teacher", image: TextileInstructor2 },
        { name: "Shah Khalid", title: "Textile Design Teacher", image: TextileInstructor3 },
        { name: "Muhammad Yaseen", title: "Khadi Master Teacher", image: TextileInstructor4 },
        { name: "Shamama Tuz Zahra", title: "History of Art Teacher", image: TextileInstructor5 },
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
                className="text-2xl sm:text-4xl font-bold text-black mb-4"
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
          <div className="p-6">
            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 border-l-4 border-red-600 pl-4">
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
                <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 border-l-4 border-red-600 pl-4">
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
                <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 border-l-4 border-red-600 pl-4">
                  Enroll Now
                </h2>

                {/* Form Container with Background Image */}
                <div
                  className="relative bg-cover bg-center rounded-lg p-6 sm:p-8 lg:p-12"
                  style={{
                    backgroundImage: `url('https://acpkhi.com/imgs/academies.webp')`,
                    // backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    // backgroundBlendMode: 'overlay',
                  }}
                >
                  {/* Overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-white rounded-lg"></div>

                  {/* Form Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-4xl font-bold text-black mb-8 text-center uppercase">
                      Admission Form
                    </h3>

                    {/* Contact Info */}
                    <div className="flex justify-end mb-6">
                      <div className="bg-white text-black p-2 rounded-lg text-sm font-semibold">
                        For Details Call WhatsApp: <a href="tel:+923008023937" className="underline">+92 300 802 3937</a>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="Full Name"
                        />
                      </div>

                      {/* Father's Name */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          Father's Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="Father's Full Name"
                        />
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          Date of Birth
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>

                      {/* Phone No */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          Phone No
                        </label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="+92- "
                        />
                      </div>

                      {/* WhatsApp No */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          WhatsApp No
                        </label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="+92-"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-black"
                          placeholder="example@domain.com"
                        />
                      </div>

                      {/* District */}
                      <div>
                        <label className="block text-black font-semibold mb-2 uppercase text-sm">
                          District
                        </label>
                        <select
                          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
                          defaultValue=""
                        >
                          <option value="" disabled>Select District</option>
                          {/* Add district options as needed */}
                          <option value="central">Central</option>
                          <option value="east">East</option>
                          <option value="south">South</option>
                          <option value="west">West</option>
                          <option value="korangi">Korangi</option>
                          <option value="keamari">Keamari</option>
                          <option value="malir">Malir</option>
                        </select>
                      </div>
                    </div>

                    {/* Department Selection */}
                    <div className="mt-6">
                      <label className="block text-black font-semibold mb-2 uppercase text-sm">
                        Select Department
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {Object.keys(courseData).map((key) => (
                          <label key={key} className="flex items-center text-black">
                            <input
                              type="checkbox"
                              className="mr-2 h-5 w-5 text-black border-gray-600 rounded focus:ring-black"
                              value={key}
                            />
                            {courseData[key].name}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Duration Selection */}
                    <div className="mt-6">
                      <label className="block text-black font-semibold mb-2 uppercase text-sm">
                        Select Duration
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {["Short Course", "Diploma"].map((duration) => (
                          <label key={duration} className="flex items-center text-black">
                            <input
                              type="checkbox"
                              className="mr-2 h-5 w-5 text-black border-gray-600 rounded focus:ring-black"
                              value={duration.toLowerCase().replace(" ", "-")}
                            />
                            {duration}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-start">
                      <motion.button
                        className="px-16 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Submit
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "instructors" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 border-l-4 border-red-600 pl-4">
                  Instructors
                </h2>

                {/* Head of the Department Section */}
                {currentCourse.instructors.length > 0 && (
                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-16 max-w-7xl mx-auto"
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-2/5 relative">
                          <div className="aspect-square lg:aspect-auto lg:h-full">
                            <img
                              src={currentCourse.instructors[0].image}
                              alt={currentCourse.instructors[0].name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12 lg:w-3/5">
                          <div className="mb-6">
                            <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
                              Head of the Department
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            {currentCourse.instructors[0].name}
                          </h3>

                          <div className="text-gray-600 space-y-4 text-lg">
                            <p>
                              Leading the department with a vision to inspire and educate, {currentCourse.instructors[0].name} brings years of expertise and passion to the Arts Council of Pakistan.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* Other Instructors Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {currentCourse.instructors.slice(1).map((instructor, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-2 overflow-hidden rounded-t-lg">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className=" object-cover"
                          loading="lazy"
                          style={{ backgroundColor: "#e5e7eb" }}
                        />
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-4">
                        {instructor.name}
                      </h3>
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