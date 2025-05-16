import React, { useState } from "react";
import { motion } from "framer-motion";

const Tenders = () => {
  const [filterDate, setFilterDate] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tenders = [
    {
      id: 1,
      title: "Pre-Qualification Notice for PLF Sukkur Chapter",
      description: "Construction of new cultural center in Sukkur",
      startDate: "2025-02-12",
      endDate: "2025-02-17",
      tenderId: "TD-ACPKHI-0002",
      status: "closed",
      category: "construction"
    },
    
  ];

  const filteredTenders = tenders.filter(tender => {
    const matchesDate = filterDate ? 
      tender.startDate <= filterDate && tender.endDate >= filterDate : 
      true;
    const matchesTab = activeTab === "all" ? true : tender.status === activeTab;
    return matchesDate && matchesTab;
  });

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.1, 0.8, 0.2, 1] 
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-4">
            Tenders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore opportunities to collaborate with Pakistan's premier cultural institution
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6 mb-12"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Filter Tenders</h3>
              <div className="flex flex-wrap gap-2">
                {["all", "active", "upcoming", "closed"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    variants={tabVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-auto">
              <label htmlFor="filterDate" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by date range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  id="filterDate"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                {filterDate && (
                  <button
                    onClick={() => setFilterDate("")}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    aria-label="Clear date filter"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tenders List */}
        <div className="grid gap-8">
          {filteredTenders.length > 0 ? (
            filteredTenders.map((tender, index) => (
              <motion.div
                key={tender.id}
                variants={itemVariants}
                custom={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {tender.title}
                      </h2>
                      <p className="text-gray-600">{tender.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium self-start sm:self-center ${
                      tender.status === 'active' ? 'bg-green-100 text-green-800' :
                      tender.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-medium">{formatDate(tender.startDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">End Date</p>
                      <p className="font-medium">{formatDate(tender.endDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tender ID</p>
                      <p className="font-medium">{tender.tenderId}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex-1 sm:flex-none"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Download Documents
                      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </motion.button>
                    <motion.button
                      className={`px-6 py-3 font-medium rounded-lg border transition-colors flex-1 sm:flex-none ${
                        tender.status === 'active'
                          ? 'border-red-600 text-red-600 hover:bg-red-50'
                          : 'border-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      whileHover={{ scale: tender.status === 'active' ? 1.03 : 1 }}
                      whileTap={{ scale: tender.status === 'active' ? 0.97 : 1 }}
                      disabled={tender.status !== 'active'}
                    >
                      {tender.status === 'active' ? 'Apply Now' : 'Applications Closed'}
                      {tender.status === 'active' && (
                        <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="bg-white rounded-xl shadow-md p-12 text-center"
              variants={itemVariants}
            >
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No tenders found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later for new opportunities.</p>
              <button
                onClick={() => {
                  setFilterDate("");
                  setActiveTab("all");
                }}
                className="mt-4 px-4 py-2 text-red-600 font-medium hover:text-red-800 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Subscription CTA */}
        {/* <motion.div 
          className="mt-16 bg-gradient-to-r from-red-50 to-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-200 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Never Miss a Tender Opportunity
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our tender alerts and get notified about new opportunities directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <motion.button
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div> */}


      </motion.div>
    </section>
  );
};

export default Tenders;