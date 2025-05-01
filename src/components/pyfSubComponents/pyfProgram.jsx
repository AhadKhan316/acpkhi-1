// src/components/PYFProgramSection.jsx
import { motion } from "framer-motion";
import PYFProgramCard from "../pyfReusableComponents/pyfProgramCard";

import pyfProgram1 from "/src/assets/pyf-assets/pyf-program-img1.jpg"

const PYFProgramSection = () => {
  const programs = [
    {
      title: "Youth Art Exhibition",
      image: pyfProgram1,
    },
    {
      title: "Music Night",
      image: pyfProgram1,
    },
    {
      title: "Innovation Hackathon",
      image: pyfProgram1,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
      {/* Section Heading */}
      <motion.h2
        className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-green-800 text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        PYF Programs
      </motion.h2>

      {/* Grid of Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((program, index) => (
          <PYFProgramCard key={index} program={program} />
        ))}
      </div>
    </section>
  );
};

export default PYFProgramSection;