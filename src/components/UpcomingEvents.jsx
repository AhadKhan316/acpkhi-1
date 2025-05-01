import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import posterImg1 from "../assets/Upcoming-events-img/alumni-2025.jpeg";
// import posterImg2 from "../assets/Upcoming-events-img/Clement-Visage-event.jpg";
import posterImg3 from "../assets/Upcoming-events-img/admission-suvapa-2025.jpeg";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Arts Alumni Festival",
      date: "2025-05-09",
      description: "Join us for the second chapter of our cultural event in Sukkur.",
      image: posterImg1,
      registerLink: "/alumni",
    },
    // {
    //   id: 2,
    //   title: "Sukkur Chapter 2",
    //   date: "2025-05-15",
    //   description: "Join us for the second chapter of our cultural event in Sukkur.",
    //   image: posterImg2,
    //   registerLink: "/register/sukkur-chapter-2",
    // },
    {
      id: 3,
      title: "Sovapa Admission Open",
      date: "2025-04-13",
      description: "Learn from experts in our series of art workshops.",
      image: posterImg3,
      registerLink: "https://acpkhi.com/admissions",
    },
  ]);

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 0.95,
      boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  // Fetch events from backend (replace with your API endpoint)
  useEffect(() => {
    fetch("/api/events/upcoming")
      .then((res) => res.json())
      .then((data) =>
        setEvents(
          data
            .filter((event) => new Date(event.date) >= new Date())
            .slice(0, 3)
        )
      )
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <motion.section
      className="py-6 sm:py-8 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="mx-2 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Upcoming Events
          </motion.h2>
        </div>
        {/* Header Section with Calendar Button */}
        <div className="relative mb-16 sm:mb-18">
          {/* Calendar Button (Top Left) */}
          <motion.button
            className="absolute right-5 top-0 flex items-center px-6 py-3 bg-[#B90602] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:bg-black/80 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Calendar"
          >
            <Link to="/upcomingEvents" className="flex items-center">
              Calendar
              <IoIosArrowForward className="ml-2 text-lg" />
            </Link>
          </motion.button>

        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="mb-12">
            <div
              className={`grid ${events.length === 1
                ? "grid-cols-1"
                : events.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                } gap-4`}
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="px-3"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="flex flex-col">
                    {/* Event Image */}
                    <div className="w-full mb-4">
                      <Link to={event.registerLink}>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </Link>
                    </div>
                    {/* Event Details */}
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                        {event.title.toUpperCase()}
                      </h3>
                      <p className="text-black text-sm sm:text-base mb-4">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <motion.button
                        className="px-4 py-3 bg-[#B90602] text-white font-semibold text-sm rounded-xl shadow-md hover:bg-black/80 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link to={event.registerLink}>Register Now</Link>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-black text-lg">
            No upcoming events at this time.
          </p>
        )}

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-4 bg-[#B90602] text-white font-semibold text-sm sm:text-base rounded-xl shadow-md hover:bg-black/80 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View All Events"
          >
            View All Events
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;





// Fetch events on component mount and periodically check for updates
// useEffect(() => {
//   const fetchEvents = () => {
//     fetch("http://10.10.10.231:5000/get_events")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setEvents(data);
//       })
//       .catch((error) => console.error("Error fetching events:", error));
//   };

//   // Initial fetch and polling for real-time updates every 10 seconds
//   const intervalId = setInterval(fetchEvents, 10000);
//   fetchEvents();

//   // Cleanup interval on component unmount
//   return () => clearInterval(intervalId);
// }, []);



// <section className="py-10 bg-[#111827] text-center">
//   <div className="mx-4 px-4 bg-[#1F2937] rounded-lg sm:px-6 lg:px-8">
//     <div className="grid grid-cols-3 gap-8 py-4 px-2">
//       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>
//       <div className="col-span-4 md:col-span-2 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>
//       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>

//       {/* {events.length > 0 ? (
//         events.slice(0, 2).map((event, index) => (
//           <div
//             key={event.id}
//             className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg"
//           >
//             <h3 className="text-[#F5F1E1] text-xl font-semibold mb-4">
//               {index === 0 ? "Nearest Event" : "Next Event"}
//             </h3>
//             <div className="bg-black w-full h-40 mb-4 flex items-center justify-center text-[#F5F1E1]">
//               <img
//                 src={event.poster}
//                 alt={event.eventName}
//                 className="w-full h-full object-cover rounded"
//               />
//             </div>
//             <h4 className="text-lg font-bold text-[#F5F1E1] mb-2">
//               {event.eventName}
//             </h4>
//             <p className="text-gray-400 mb-1">
//               <strong>Date:</strong>{" "}
//               {new Date(event.startDate).toDateString()}
//             </p>
//             <p className="text-gray-400 mb-4">
//               <strong>Venue:</strong> {event.venue}
//             </p>
//             <button
//               className={`w-full py-2 rounded-lg ${
//                 event.eventType === "Free"
//                   ? "bg-green-600 text-[#F5F1E1] hover:bg-green-700"
//                   : "bg-red-600 text-[#F5F1E1] hover:bg-red-700"
//               } transition`}
//             >
//               {event.eventType === "Free" ? "Register Now" : "Buy Ticket"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <div className="col-span-4 text-[#F5F1E1]">
//           <p>No upcoming events available.</p>
//         </div>
//       )} */}

//       <div className="hidden md:block md:col-span-1"></div>
//     </div>
//   </div>
// </section>