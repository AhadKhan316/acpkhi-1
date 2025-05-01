import React, { useState } from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

// Importing images
import presidentImg from "../assets/governing-body-new/ahmed-shah.png";
import img1 from "../assets/governing-body-new/munawar-saeed.png";
import img2 from "../assets/governing-body-new/ejaz-farooqi.png";
import img3 from "../assets/governing-body-new/noorul-huda-shah.png";

// Governing Body
import img5 from "../assets/governing-body-new/huma-mir.png";
import img6 from "../assets/governing-body-new/s-m-qaiser-sajjad.png";
import img7 from "../assets/governing-body-new/syed-asjad-hussain-bukhari.png";
import img8 from "../assets/governing-body-new/farrukh-tanveer-shahab.png";
import img9 from "../assets/governing-body-new/syed-shahzad-raza-naqvi.png";
import img10 from "../assets/governing-body-new/ambreen-haseeb-amber.png";
import img11 from "../assets/governing-body-new/akhlaq-ahmed-khan.png";
import img12 from "../assets/governing-body-new/ghazi-salah-uddin.png";
import img13 from "../assets/governing-body-new/muhammad-ayoub-shaikh.png";
import img14 from "../assets/governing-body-new/Abdullah-Sultan.webp";
import img15 from "../assets/governing-body-new/amjad-hussain-shah.png";
import img16 from "../assets/governing-body-new/syed-sajid-hassan.png";

// Co-Opted Members
import img17 from "../assets/governing-body-new/co-opted-member1.png";
import img18 from "../assets/governing-body-new/co-opted-member2.png";
import img19 from "../assets/governing-body-new/co-opted-member3.png";
import img20 from "../assets/governing-body-new/co-opted-member4.png";
import img21 from "../assets/governing-body-new/co-opted-member5.png";

const GoverningBody = () => {
  const [activeTab, setActiveTab] = useState("Office Bearers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({
      top: 500,
      behavior: "smooth"
    });
  };

  const members = {
    "Office Bearers": [
      { id: 1, name: "Munawar Saeed", description: "Vice President", image: img1, buttonText: "View Profile" },
      { id: 2, name: "Ejaz Farooqi", description: "Secretary", image: img2, buttonText: "View Profile" },
      { id: 3, name: "Noor Ul Huda Shah", description: "Joint Secretary", image: img3, buttonText: "View Profile" },
    ],
    "Governing Body": [
      { id: 1, name: "Huma Mir", description: "Member", image: img5, buttonText: "View Profile" },
      { id: 2, name: "S.M Qaiser Sajjad", description: "Member", image: img6, buttonText: "View Profile" },
      { id: 3, name: "Syed Asjad Hussain Bukhari", description: "Member", image: img7, buttonText: "View Profile" },
      { id: 4, name: "Farrukh Tanveer Shahab", description: "Member", image: img8, buttonText: "View Profile" },
      { id: 5, name: "Syed Shahzad Raza Naqvi", description: "Member", image: img9, buttonText: "View Profile" },
      { id: 6, name: "Ambreen Haseeb Amber", description: "Member", image: img10, buttonText: "View Profile" },
      { id: 7, name: "Akhlaq Ahmed Khan", description: "Member", image: img11, buttonText: "View Profile" },
      { id: 8, name: "Ghazi Salah Uddin", description: "Member", image: img12, buttonText: "View Profile" },
      { id: 9, name: "Muhammad Ayoub Shaikh", description: "Member", image: img13, buttonText: "View Profile" },
      { id: 10, name: "Abdullah Sultan", description: "Member", image: img14, buttonText: "View Profile" },
      { id: 11, name: "Amjad Hussain Shah", description: "Member", image: img15, buttonText: "View Profile" },
      { id: 12, name: "Syed Sajid Hassan", description: "Member", image: img16, buttonText: "View Profile" },
    ],
    "Co-opted Members": [
      { id: 1, name: "Mr. Waseem Badami", description: "Co-Opted Member", image: img17, buttonText: "View Profile" },
      { id: 2, name: "Dr. Jaffer Ahmed", description: "Co-Opted Member", image: img18, buttonText: "View Profile" },
      { id: 3, name: "Mr. Ghous Akbar", description: "Co-Opted Member", image: img19, buttonText: "View Profile" },
      { id: 4, name: "Miss Chand Gul Shah", description: "Co-Opted Member", image: img21, buttonText: "View Profile" },
      { id: 5, name: "Miss Aliya Iqbal Naqvi", description: "Co-Opted Member", image: img20, buttonText: "View Profile" },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
        >
          Governing Body
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Meet the dedicated team leading the Arts Council of Pakistan, committed to promoting arts and culture.
        </motion.p>
      </div>

      {/* President's Message Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20 max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 relative">
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <img
                  src={presidentImg}
                  alt="President Mohammad Ahmed Shah"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 lg:w-3/5">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
                  President's Message
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mohammad Ahmed Shah
              </h2>

              <div className="text-gray-600 space-y-4 text-lg">
                <p>
                  The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage.
                </p>
                <p>
                  Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8 w-full"
          >
            {["Office Bearers", "Governing Body", "Co-opted Members"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 relative overflow-hidden group ${activeTab === tab
                  ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-red-300 hover:shadow-md"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab === tab && (
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 z-0"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Tab Indicator */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Members Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            {activeTab} <span className="text-red-600">of Arts Council</span>
          </h3>
          <Cards 
            title={activeTab} 
            items={members[activeTab]} 
            cardClassName="hover:scale-105 transition-transform duration-300"
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          />
        </motion.div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto mt-20 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Cultural Movement</h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          The Arts Council thrives on community participation. Discover how you can contribute to preserving and promoting Pakistan's rich cultural heritage.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-red-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Get Involved
        </motion.button>
      </div>
    </div>
  );
};

export default GoverningBody;