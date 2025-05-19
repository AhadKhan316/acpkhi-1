import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Tab content data
  const tabs = [
    {
      id: "about",
      title: "About",
      subtitle: "Our Mission and Vision",
      content: (
        <div className="px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* About */}
          </motion.h2>
          <motion.p
            className="text-gray-400 italic text-sm sm:text-base mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Our Mission and Vision */}
          </motion.p>
          <motion.div
            // className="h-1 w-20 bg-black mx-auto mb-6 sm:mb-8 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
          <motion.p
            className="text-black mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            The Arts Council of Pakistan, Karachi is where artists, thinkers, and changemakers converge. Hosting over 200 annual events and collaborating with 40+ countries, ACPKHI stands as Pakistan’s most dynamic force in arts and culture. From preserving traditions to pushing creative boundaries, we don’t just host the arts — we connect with millions and shape the future through creativity.
          </motion.p>
        </div>
      ),
    },
    {
      id: "president",
      title: "President's Message",
      subtitle: "A Word from Our Leader",
      content: (
        <div className="px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* President's Message */}
          </motion.h2>
          <motion.p
            className="text-black italic text-2xl sm:text-5xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* A Word from Our Leader */}
          </motion.p>
          <motion.div
            // className="h-1 w-20 bg-black mx-auto mb-6 sm:mb-8 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
          {/* President's Image */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl group">
              <img
                src={presidentImg}
                alt="President Mohammad Ahmed Shah"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-gray-200 rounded-full transition-all duration-300"></div>
            </div>
          </motion.div>
          <motion.h4
            className="text-xl sm:text-3xl lg:text-4xl text-black font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Mohammad Ahmed Shah <span className="text-lg sm:text-2xl lg:text-3xl">(HI, SI)</span>
          </motion.h4>
          <motion.p
            className="text-black mx-auto leading-relaxed text-base sm:text-lg md:text-xl lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            At the Arts Council of Pakistan, our mission is to spotlight the depth and diversity of Pakistani arts, literature and culture on a global stage. We're committed to creating a vibrant, inclusive space that inspires creativity, supports emerging talent, and builds meaningful connections—both across Pakistan and around the world.
          </motion.p>
        </div>
      ),
    },
  ];

  // Framer Motion variants for section animation

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.2, 1]
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const stats = [
    { value: "70+", label: "Years of Legacy" },
    { value: "500+", label: "Annual Events" },
    { value: "1M+", label: "Visitors Yearly" },
    { value: "50+", label: "Countries Hosted" }
  ];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-blue-50"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            variants={textVariants}
          >
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600"> We Are</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-500 mx-auto mb-8 rounded-full"
            variants={dividerVariants}
          />

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={textVariants}
          >
            The Arts Council of Pakistan, Karachi is where artists, thinkers, and changemakers converge. Hosting over 200 annual events and collaborating with 40+ countries, ACPKHI stands as Pakistan's most dynamic force in arts and culture. From preserving traditions to pushing creative boundaries, we don't just host the arts — we connect with millions and shape the future through creativity.
          </motion.p>
        </div>

        <div className="mb-6">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
            variants={textVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;