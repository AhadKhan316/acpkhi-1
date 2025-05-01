import React from "react";
import { motion } from "framer-motion";

// Import your sponsor logos - replace these with your actual imports
import MainSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import MainSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import MainSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import MainSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import NormalSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import NormalSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor5 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import BasicSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import BasicSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import BasicSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import BasicSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import BasicSponsor5 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import BasicSponsor6 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";

const SponsorsSection = () => {
  const mainSponsors = [
    [
      { id: 1, name: "Premium Partner", logo: MainSponsor1 },
      { id: 2, name: "Gold Sponsor", logo: MainSponsor2 },
      { id: 3, name: "Silver Sponsor", logo: MainSponsor3 },
      { id: 4, name: "Technology Partner", logo: MainSponsor4 }
    ],
    [
      { id: 5, name: "Partner A", logo: NormalSponsor1 },
      { id: 6, name: "Partner B", logo: NormalSponsor2 },
      { id: 7, name: "Partner C", logo: NormalSponsor3 }
    ],
    [
      { id: 8, name: "Partner X", logo: NormalSponsor4 },
      { id: 9, name: "Partner Y", logo: NormalSponsor5 }
    ],
    [
      { id: 10, name: "Primary", logo: BasicSponsor1 }
    ]
  ];

  const normalSponsors = [
    [
      { id: 11, name: "Supporter 1", logo: BasicSponsor1 },
      { id: 12, name: "Supporter 2", logo: BasicSponsor2 },
      { id: 13, name: "Supporter 3", logo: BasicSponsor3 },
      { id: 14, name: "Supporter 4", logo: BasicSponsor4 }
    ],
    [
      { id: 15, name: "Supporter A", logo: BasicSponsor5 },
      { id: 16, name: "Supporter B", logo: BasicSponsor6 },
      { id: 17, name: "Supporter C", logo: BasicSponsor1 }
    ],
    [
      { id: 18, name: "Supporter X", logo: BasicSponsor2 },
      { id: 19, name: "Supporter Y", logo: BasicSponsor3 }
    ],
    [
      { id: 20, name: "Basic", logo: BasicSponsor4 }
    ]
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const getGridCols = (length) => {
    if (length === 4) return "md:grid-cols-4";
    if (length === 3) return "md:grid-cols-3";
    if (length === 2) return "md:grid-cols-2";
    return "md:grid-cols-1";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Sponsors
        </motion.h2>

        {/* Top Sponsors */}
        <motion.div
          className="mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Main Sponsors</h3> */}
          <div className="space-y-8">
            {mainSponsors.map((row, rowIndex) => (
              <div
                key={`main-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-6 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className=" flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-auto max-h-35 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>



        {/* Mid Sponsors*/}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Partners</h3> */}
          <div className="space-y-8">
            {normalSponsors.map((row, rowIndex) => (
              <div
                key={`normal-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-6 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className="p-4 flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-auto max-h-25 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>


        {/* Last Sponsors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Supporters</h3> */}
          <div className="space-y-8">
            {normalSponsors.map((row, rowIndex) => (
              <div
                key={`basic-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-4 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className="p-3 flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-auto max-h-15 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;