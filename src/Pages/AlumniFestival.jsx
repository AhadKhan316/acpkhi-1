import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Main Image
import posterImgMain from "/src/assets/ArtsAlumniAssets/alumni-main-poster-2025.jpeg";

// Segments Images
import posterImg1 from "/src/assets/ArtsAlumniAssets/an-Innocent-Murder-segment1.jpg";
import posterImg2 from "/src/assets/ArtsAlumniAssets/Kathak-Workshop-by-Nighat-Chaudhry-segment2.jpg";
import posterImg11 from "/src/assets/ArtsAlumniAssets/gumaan-segment11.jpg"
import posterImg12 from "/src/assets/ArtsAlumniAssets/ai-authenticity-segment12.jpg"
import posterImg13 from "/src/assets/ArtsAlumniAssets/alumni-stars-segment13.jpg"
import posterImg3 from "/src/assets/ArtsAlumniAssets/Salgirah-segment3.jpg";
import posterImg4 from "/src/assets/ArtsAlumniAssets/Glass-Menagerie-segment4.jpg";
import posterImg5 from "/src/assets/ArtsAlumniAssets/bharatanatyam-workshop-segment5.jpg";
import posterImg6 from "/src/assets/ArtsAlumniAssets/double-Bill-segment6.jpg";
import posterImg14 from "/src/assets/ArtsAlumniAssets/idea-to-release-segment14.jpg";
import posterImg15 from "/src/assets/ArtsAlumniAssets/alumni-stars-segment15.jpg";
import posterImg16 from "/src/assets/ArtsAlumniAssets/qawwali-fusion-segment16.jpg";
import posterImg7 from "/src/assets/ArtsAlumniAssets/Voice-Workshop-Khalid-Ahmed-segment7.jpg";
import posterImg8 from "/src/assets/ArtsAlumniAssets/daastangoi-segment8.png";
import posterImg9 from "/src/assets/ArtsAlumniAssets/block-Printing-Workshop-segment9.jpg";
import posterImg10 from "/src/assets/ArtsAlumniAssets/alumni-Art-Exhibition-segment10.jpg";

// Schedule Posters
import day1Poster from "/src/assets/ArtsAlumniAssets/schedule-day1.jpg";
import day2Poster from "/src/assets/ArtsAlumniAssets/schedule-day2.jpg";
import day3Poster from "/src/assets/ArtsAlumniAssets/schedule-day3.jpg";

const AlumniPage = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState("Day 1");
  const [activeSegment, setActiveSegment] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const segments = [
    {
      title: "An Innocent Little Murder",
      image: posterImg1,
      description: "A dark comedy exploring the unexpected consequences of a seemingly harmless act.",
    },
    {
      image: posterImg11,
    },
    {
      title: "Kathak Workshop by Nighat Chaudhry",
      image: posterImg2,
      description: "Learn the intricate footwork and expressive gestures of Kathak from a master.",
    },
    {
      title: "Salgirah",
      image: posterImg3,
      description: "A heartwarming family drama celebrating cultural traditions and relationships.",
    },
    {
      image: posterImg13,
    },
    {
      image: posterImg14,
    },
    {
      title: "Glass Menagerie",
      image: posterImg4,
      description: "Tennessee Williams' classic play about family, fragility, and the pursuit of dreams.",
    },
    {
      title: "Bharatanatyam Workshop",
      image: posterImg5,
      description: "A heartwarming family drama celebrating cultural traditions and relationships.",
    },
    {
      image: posterImg12,
    },
    {
      title: "Double Bill",
      image: posterImg6,
      description: "Two compelling short plays showcasing diverse theatrical styles in one evening.",
    },
    {
      title: "Voice Workshop by Khalid Ahmed",
      image: posterImg7,
      description: "Develop your vocal presence and projection with techniques from a seasoned performer.",
    },
    {
      title: "Daastangoi",
      image: posterImg8,
      description: "Experience the ancient art of Urdu storytelling with contemporary narratives.",
    },
    {
      image: posterImg15,
    },
    {
      image: posterImg16,
    },
    {
      title: "Block Printing Workshop",
      image: posterImg9,
      description: "Create beautiful patterns using traditional block printing techniques.",
    },
    {
      title: "Alumni Art Exhibition",
      image: posterImg10,
      description: "A curated collection of visual artworks by talented alumni artists.",
    },
  ];

  // const handleRegisterClick = () => {
  //   navigate("/alumni/register");
  // };

  const schedules = {
    "Day 1": [
      {
        title: "Opening Ceremony | Art Exhibition",
        time: "4:00 PM",
        location: "Art Gallery",
        directedBy: "Art by Alumni",
        details: "Keynote By Muhammad Ahmed Shah - President",
        highlight: true,
      },
      {
        title: "Theatre Play (Dark Comedy): An Innocent Murder",
        time: "5:00 PM",
        location: "Auditorium 1",
        directedBy: "Director: Hassan Alam",
        details: "Cast: Ghulam Mohi Uddin, Sara Taqi, Sheryl John",
      },
      {
        title: "Kathak Dance Workshop",
        time: "6:00 PM",
        location: "Studio 2",
        details: "Expert: Nighat Choudhary",
      },
      {
        title: "Music Performance",
        time: "7:00 PM",
        location: "Studio 1",
        // directedBy: "Director: Alumni Group",
        details: "Rock & Pop Concert (It might get loud)",
      },
      {
        title: "Theatre Play | Family Drama | Saalgirah",
        time: "9:00 PM",
        location: "Auditorium 1",
        directedBy: "Director: Farhan Rahim",
        details: "Cast: Kemal Hayat, Emraan Farman",
      },
      {
        title: "Exhibitions",
        time: "4:00 PM",
        location: "Art Gallery & Lobby Area",
        directedBy: "Art by Alumni",
        details: "Digital Art Screening - Resistance in every Pixel Art Exhibition",
      },
      {
        title: "Activities",
        time: "5:00 PM",
        location: "Lobby Area",
        details: "Block & Screen Printing - Instructor: Amir Ejaz & Students Live Painting by Zarnab Baloch, Kiran Aslam, Zeenat Khan",
      },
    ],
    "Day 2": [
      {
        title: "Musical Panel Discussion",
        time: "4:00 PM",
        location: "Studio 2",
        details: "AI, Authorship & Authenticity: Who's Really Making the Music?",
      },
      {
        title: "Theatre Play | Family Drama (Tragedy) | Glass Menagerie",
        time: "5:00 PM",
        location: "Auditorium 1",
        directedBy: "Director: Adil Shakir",
        details: "Cast: Sufi Ghous, Sheryl John, Fatima Adil, Usman Hikmat",
        highlight: true,
      },
      {
        title: "Fine Arts Panel Discussion",
        time: "6:00 PM",
        location: "Studio 2",
        details: "Alumni Stars – History & Future: Our Success Stories Panelists: Zarnab Baloch, Habiba Mujeeb, Jawad Hassan, Ramsha Khan, Jawad Jan Moderator: Shahid Rassam",
      },
      {
        title: "Bharatanatyam Dance Workshop",
        time: "7:00 PM",
        location: "Studio 2",
        directedBy: "Expert: Mani Chao",
        // details: "Alumni Stars – History & Future: Our Success Stories Panelists: Zarnab Baloch, Habiba Mujeeb, Jawad Hassan, Ramsha Khan, Jawad Jan Moderator: Shahid Rassam",
      },
      {
        title: "Music Performance by FOLKLORES",
        time: "8:00 PM",
        location: "Studio 1",
        details: "Folk Woke – Tribute to Pakistani Music",
      },
      {
        title: "Theatre Play | Dark Comedy | Monica & A Tale of Two Betrayed",
        time: "9:00 PM",
        location: "Auditorium 1",
        directedBy: "Director: Zobi Fatima",
        details: "Cast: Abu Bakar, Hassan Malik, Muneeb Khan, Sara Taqi & Hasson Rafi",
      },
      {
        title: "Exhibitions",
        time: "4:00 PM",
        location: "Art Gallery & Lobby Area",
        directedBy: "Art by Alumni",
        details: "Digital Art Screening - Resistance in every Pixel Art Exhibition",
      },
      {
        title: "Activities",
        time: "5:00 PM",
        location: "Lobby Area",
        details: "Block & Screen Printing - Instructor: Amir Ejaz & Students Live Painting by Zarnab Baloch, Kiran Aslam, Zeenat Khan",
      },
    ],
    "Day 3": [
      {
        title: "Theatre Workshop",
        time: "4:00 PM",
        location: "Studio 2",
        details: "Master The Power of Your Voice with Khalid Ahmed",
      },
      {
        title: "Music Panel Discussion",
        time: "4:00 PM",
        location: "Studio 1",
        details: "From Idea to Release: The Independent Artist's Journey",
      },
      {
        title: "Textile & Communication Design Panel Discussion",
        time: "5:00 PM",
        location: "Studio 2",
        details: "Alumni Stars – History & Future: Our Success Stories Panelists: Noor Hussain, Rida Ali Shah, Tasneem Shabbir, Mubasshir, Nazeef, Saira Iqbal Moderator: Owais Rajput",
        highlight: true,
      },
      {
        title: "Theatre Panel Discussion",
        time: "6:00 PM",
        location: "Studio 2",
        details: "Alumni Stars – History & Future: Post Diploma Career (Theatre) Panelists: Hassam Irfan, Sheryl John & M. Owais Rehan Moderator: Meesam Naqvi",
        // highlight: true,
      },
      {
        title: "Theatre Performance | Dastaan Goi",
        time: "7:00 PM",
        location: "Auditorium 2",
        details: "Tilism e Hoshruba: Muqarnis Jadu, Sikandar Jadu Adha by Gulzar Cast: Owais Rehan, Hassam Irfan, Emraan Farman",
      },
      {
        title: "Journey of Dance",
        time: "8:00 PM",
        location: "Auditorium 2",
        details: "Dance Performance by Teachers & Their Students",
      },
      {
        title: "Music Performance | Qawwali Fusion by Jambros & Friends",
        time: "9:00 PM",
        location: "Studio 1",
        detail: "Echoes of Tradition, Amplified by Today",
      },
      {
        title: "Exhibitions",
        time: "4:00 PM",
        location: "Art Gallery & Lobby Area",
        directedBy: "Art by Alumni",
        details: "Digital Art Screening - Resistance in every Pixel Art Exhibition - Art by Alumni",
      },
      {
        title: "Activities",
        time: "5:00 PM",
        location: "Lobby Area",
        details: "Block & Screen Printing - Instructor: Amir Ejaz & Students Live Painting by Zarnab Baloch, Kiran Aslam, Zeenat Khan",
      },
    ],
  };

  return (
    <div className="bg-white px-4">
      {/* Hero Section */}
      <motion.section
        className="py-8 sm:py-6 lg:py-8 flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Poster Image */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={posterImgMain}
            alt="Arts Alumni Festival 2025"
            className="py-6 px-4 object-contain"
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-black mb-6">
            Arts Alumni Festival
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-8"></div> */}
          <p className="text-black text-lg sm:text-xl leading-relaxed">
            The Arts Council of Pakistan, Karachi, proudly presents the Alumni Festival 2025, a spectacular three-day celebration hosted by the School of Visual & Performing Arts. From 9th to 11th May 2025, the festival will transform the Arts Council Karachi into a vibrant hub of creativity, bringing together past students and art enthusiasts for an unforgettable experience.
          </p>
          {/* <motion.button
            className="mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-gold-400 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-gold-500 transition duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Register Now
          </motion.button> */}
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="mt-12 text-gray-600 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div> */}
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="text-center mb-12 px-4">
          <motion.h2
            className="text-2xl sm:text-4xl lg:text-4xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Celebrating Creative Excellence
          </motion.h2>
          <motion.div
            className="mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-black text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            The Arts Council of Pakistan proudly presents the{" "}
            <span className="font-semibold text-red-700">
              Arts Alumni Festival 2025
            </span>
            . This spectacular three-day celebration hosted by the School of Visual &
            Performing Arts brings together generations of talented artists for a
            vibrant reunion of creativity, learning, and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              ),
              title: "Performances",
              description:
                "Experience captivating theatre, dance, and storytelling performances by talented alumni.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              ),
              title: "Workshops",
              description:
                "Learn from masters in voice, dance, and visual arts through interactive sessions.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              ),
              title: "Exhibitions",
              description:
                "Explore stunning visual art displays showcasing alumni creativity across mediums.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Segments */}
      <motion.section
        className="py-8 lg:py-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Segments
            </motion.h2>
            <motion.div
              className="mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="text-black text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Discover the diverse range of performances, workshops, and
              exhibitions that make this festival unforgettable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                onClick={() =>
                  setActiveSegment(activeSegment === index ? null : index)
                }
              >
                <div className="relative overflow-hidden h-100%">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0"></div>
                  {/* <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
                    {segment.title}
                  </h3> */}
                </div>
                <motion.div
                  className={`p-6 ${activeSegment === index ? "block" : "hidden"}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <p className="text-gray-600 mb-4">{segment.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                    Learn more →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <motion.section
        className="py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Day 1 Schedule
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Plan your festival experience with our detailed schedule of events
            across three exciting days.
          </motion.p>
        </div> */}

        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-12 bg-white p-2 rounded-full">
          {["Day 1", "Day 2", "Day 3"].map((day) => (
            <motion.button
              key={day}
              className={`px-12 py-3 rounded-xl font-semibold capitalize text-base sm:text-lg transition-all duration-300 ${activeDay === day
                ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                : "bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer"
                }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveDay(day)}
            >
              {day} - May {8 + parseInt(day.split(" ")[1])}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {schedules[activeDay].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${item.highlight ? "border-red-700" : "border-gray-200"
                } hover:shadow-md transition-shadow`}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {item.time && (
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-red-700 font-medium">
                        {item.time}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-700 mx-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-red-700 font-medium">{item.location}</span>
                    </div>
                  )}

                  <h3
                    className={`text-xl font-semibold ${item.highlight ? "text-black" : "text-black"
                      }`}
                  >
                    {item.title}

                  </h3>
                  <br />
                  <span className="text-red-700 font-medium">{item.directedBy}</span>
                  {Array.isArray(item.details) ? (
                    <ul className="mt-2 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-black mr-2 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 mt-2">{item.details}</p>
                  )}
                </div>
                {/* {item.highlight && (
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition whitespace-nowrap">
                    Get Tickets
                  </button>
                )} */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Schedule poster */}

        <div className="mt-16">
          <h3 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-black mb-6 text-center">
            Schedule Posters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              { day: "Day 1", image: day1Poster },
              { day: "Day 2", image: day2Poster },
              { day: "Day 3", image: day3Poster },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={`${item.day} Schedule`}
                  className=" object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-medium text-black">
                    {item.day} Schedule
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tickets Section */}
      <motion.section
        className="py-6 lg:py-8 bg-white text-black text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Secure Your Festival Pass
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-lg sm:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Don't miss this extraordinary celebration of artistic excellence.
            Register now to guarantee your access to all performances,
            workshops, and exhibitions across three inspiring days.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <motion.div
              className="bg-black p-6 rounded-xl backdrop-blur-sm text-white"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2">Single Day Pass</h3>
              <p className="text-3xl font-bold mb-2">Rs. 1,000</p>
              <p className="text-white">
                Access to all events on your chosen day
              </p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border-2 border-gray-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2">Full Festival Pass</h3>
              <p className="text-3xl font-bold mb-2">Rs. 2,500</p>
              <p className="text-black">
                Access to all three days of the festival
              </p>
              {/* <div className="mt-3 text-yellow-300 font-medium">
                Save Rs. 500
              </div> */}
            </motion.div>
          </div>

          <Link to="https://ticketwala.pk/event/arts-alumni-festival-2827" target="_blank">
            <motion.button
              className="px-10 py-4 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300 inline-flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}

            // onClick={handleRegisterClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Buy Tickets Now
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AlumniPage;