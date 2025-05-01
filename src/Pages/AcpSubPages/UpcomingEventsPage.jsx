import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import posterImg1 from "/src/assets/Upcoming-events-img/alumni-2025.jpeg";
import posterImg3 from "/src/assets/Upcoming-events-img/admission-suvapa-2025.jpeg";

const UpcomingEventsPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Arts Alumni Festival",
      date: "2025-05-09",
      description: "Join us for the second chapter of our cultural event in Sukkur.",
      image: posterImg1,
      infoLink: "",
      ticketsLink: "https://ticketwala.pk/event/arts-alumni-festival-2827",
    },
    {
      id: 3,
      title: "Sovapa Admission Open",
      date: "2025-04-13",
      description: "Learn from experts in our series of art workshops.",
      image: posterImg3,
      infoLink: "",
      ticketsLink: "", // No ticket link for this event
    },
  ]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 0.98,
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
            .slice(0, 2)
        )
      )
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <motion.section
      className="py-6 sm:py-8 bg-white text-black"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12">
          Upcoming Events
        </h2>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex flex-col"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >

                <div className="w-full mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full max-h-[400px] object-contain rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
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

                  <div className="flex space-x-4">
                    <a
                      href={event.infoLink}
                      className="px-8 py-2 bg-red-700 border border-white text-white font-semibold text-sm rounded-full hover:bg-red-700 hover:text-white transition duration-300"
                    >
                      INFO
                    </a>
                    {event.ticketsLink && (
                      <a
                        href={event.ticketsLink}
                        className="px-8 py-2 bg-red-700 border border-white text-white font-semibold text-sm sm:text-base rounded-full hover:bg-gold-500 transition duration-300"
                      >
                        TICKETS
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">
            No upcoming events at this time.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default UpcomingEventsPage;