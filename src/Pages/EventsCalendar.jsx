import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiArrowRight } from "react-icons/fi";

// Sample event images
import event1 from "../assets/events/event1.jpg";
import event2 from "../assets/events/event2.jpg";
import event3 from "../assets/events/event3.jpg";
import event4 from "../assets/events/event4.jpg";

const EventsCalendar = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample events data matching your design aesthetic
  const events = [
    {
      id: 1,
      title: "FREE, FREE, NEW JOURNEY",
      date: "15 NOV 2023",
      time: "7:00 PM",
      location: "Main Hall",
      description: "An exploration of new artistic directions and creative freedom.",
      category: "Exhibition",
      image: event1,
      tag: "FREE ENTRY",
      featured: true
    },
    {
      id: 2,
      title: "4th CENTURY & BUSINESS REVIEW",
      date: "18 NOV 2023",
      time: "10:00 AM",
      location: "Conference Room",
      description: "Historical perspectives meeting modern business practices.",
      category: "Lecture",
      image: event2,
      tag: "PREMIUM"
    },
    {
      id: 3,
      title: "POWER & COMPANION",
      date: "20 NOV 2023",
      time: "6:30 PM",
      location: "Outdoor Theater",
      description: "An evening of collaborative performances exploring relationships.",
      category: "Performance",
      image: event3,
      tag: "MEMBERS ONLY"
    },
    {
      id: 4,
      title: "GREEN LIFE",
      date: "22 NOV 2023",
      time: "3:00 PM",
      location: "Garden Area",
      description: "Sustainable living through art and design exhibition.",
      category: "Exhibition",
      image: event4,
      tag: "FREE ENTRY"
    },
    {
      id: 5,
      title: "WATER & TEA",
      date: "25 NOV 2023",
      time: "5:00 PM",
      location: "Cultural Lounge",
      description: "Traditional tea ceremonies and water-themed art.",
      category: "Workshop",
      image: event1,
      tag: "LIMITED SEATS"
    },
    {
      id: 6,
      title: "LIFETIME TOTAL",
      date: "28 NOV 2023",
      time: "8:00 PM",
      location: "Main Auditorium",
      description: "Retrospective of a lifetime in artistic achievement.",
      category: "Film",
      image: event2,
      tag: "PREMIUM"
    }
  ];

  const categories = ["All", "Exhibition", "Lecture", "Performance", "Workshop", "Film"];

  const filteredEvents = activeFilter === "All" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-tight"
          style={{ letterSpacing: '2px' }}
        >
          UPCOMING EVENTS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto italic"
        >
          Dreaming for the best of our customers
        </motion.p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Category Filters - Minimalist style */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
                activeFilter === category
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Events Grid - Matching your design aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 relative overflow-hidden group"
            >
              {/* Event Tag */}
              <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider z-10 ${
                event.tag === "FREE ENTRY" ? "bg-green-500 text-white" :
                event.tag === "PREMIUM" ? "bg-yellow-500 text-black" :
                event.tag === "MEMBERS ONLY" ? "bg-blue-500 text-white" :
                "bg-red-500 text-white"
              }`}>
                {event.tag}
              </div>

              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FiCalendar className="mr-2" />
                  {event.date}
                  <span className="mx-2">•</span>
                  <FiClock className="mr-2" />
                  {event.time}
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2" style={{ letterSpacing: '1px' }}>
                  {event.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <FiMapPin className="mr-2" />
                  {event.location}
                </div>
                
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-red-600 font-medium flex items-center gap-1 text-sm uppercase tracking-wider"
                  >
                    DETAILS <FiArrowRight className="text-xs" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${
                      event.tag === "FREE ENTRY" ? "bg-green-500 text-white" :
                      event.tag === "PREMIUM" ? "bg-yellow-500 text-black" :
                      event.tag === "MEMBERS ONLY" ? "bg-blue-500 text-white" :
                      "bg-red-500 text-white"
                    }`}
                  >
                    {event.tag === "FREE ENTRY" ? "REGISTER" : "BOOK NOW"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA - Minimalist style */}
      <div className="max-w-7xl mx-auto mt-20 text-center border-t border-gray-200 pt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight">RECOMMENDED EVENTS</h3>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover our curated selection of must-attend cultural experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 uppercase tracking-wider text-sm font-bold"
          >
            VIEW ALL EVENTS
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-800 text-gray-800 px-8 py-3 uppercase tracking-wider text-sm font-bold"
          >
            CONTACT US
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;