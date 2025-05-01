import { motion } from "framer-motion";

const PtfNewsletter = () => {
  // Framer Motion Variants for animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-navy-800 text-ivory-100 relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="#b91c1c" // red-700
            fillOpacity="0.9"
            d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,213.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,213.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,181.3C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,213.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-red-700 mb-4 sm:mb-6 tracking-tight"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-sans mb-6 sm:mb-8 text-ivory-200"
        >
          Stay updated with the latest news and events from PTF.
        </motion.p>
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-xs sm:max-w-sm p-2 sm:p-3 rounded-lg bg-navy-800/50 backdrop-blur-md text-ivory-100 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-red-700 transition duration-300 text-sm sm:text-base"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="sm:w-auto bg-red-700 text-white font-sans font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default PtfNewsletter;