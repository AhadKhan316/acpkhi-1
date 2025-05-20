import { motion } from 'framer-motion';

function WcfVideoSection() {
  // Modern animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden max-w-7xl mx-auto">
      <motion.div
        className="space-y-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center"
          variants={slideUp}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Where Cultures{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Collide & Create
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={slideUp}
        >
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
            Experience an unprecedented gathering of global talent at the World Culture Festival, where art transcends boundaries. Join us from May 23rd to 25th, 2025, starting in just 3 days!
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { value: "40+", label: "Countries" },
              { value: "450+", label: "Artists" },
              { value: "100+", label: "Performances" },
              { value: "5", label: "Art Forms" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors duration-200 mx-auto w-full"
              >
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-600 text-center">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* <button className="mt-4 px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mx-auto block w-auto">
            Get Your Tickets Now
          </button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WcfVideoSection;