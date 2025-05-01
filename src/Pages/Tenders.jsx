import React, { useState } from "react";
import { motion } from "framer-motion";


const Tenders = () => {
  const [filterDate, setFilterDate] = useState("");

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-white text-black flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold text-black">
          Tenders
        </h1>
      </div>

      {/* Filter Section */}
      <div className="w-full max-w-8xl mb-12 ">
        <div className="flex justify-center mb-6">
          <label
            htmlFor="filterDate"
            className="text-lg font-medium text-black mr-4"
          >
            FILTER BY DATE:
          </label>
          <input
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={handleFilterChange}
            className="px-2 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 text-black"
            aria-label="Filter tenders by date"
          />
        </div>
      </div>

      {/* Tender Card */}
      <div className="w-full max-w-md bg-white p-6 sm:p-6 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          Pre-Qualification Notice
        </h1>
        <p className="text-black text-base sm:text-lg mb-4">
          for PLF Sukkur Chapter 2
        </p>
        <p className="text-black text-sm sm:text-base mb-4">
          Start Date: 12th February 2025
        </p>
        <p className="text-black text-sm sm:text-base mb-4">
          End Date: 17th February 2025
        </p>
        <p className="text-black text-sm sm:text-base mb-4">
          Tender ID: TD-ACPKHI-0002
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#B90602] hover:bg-red-600 transition duration-150 ease-in-out"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download tender document"
          >
            Download Tender
          </motion.button>

          <motion.button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#B90602] hover:bg-red-600 transition duration-150 ease-in-out"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Apply now for tender"
          >
            Apply Now
          </motion.button>

        </div>
      </div>

    </div>
  );
};

export default Tenders;