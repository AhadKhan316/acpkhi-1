import { motion } from "framer-motion";
import SectionWithSlider from "../reusableComponents/ReusableCarouselOfAboutUs";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";
import img4 from "../assets/about/img4.jpg";
import img5 from "../assets/about/img5.jpg";
import img6 from "../assets/about/img6.jpg";

const AboutUs = () => {
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

  const itemVariants = {
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

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            About
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind Pakistan's premier cultural institution
          </p>
        </motion.div>

        {/* History Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="my-12"
        >
          <SectionWithSlider
            title="Our Cultural Journey"
            description="Founded in 1954, the Arts Council of Pakistan has been a beacon for cultural preservation, talent development, and a place of collaboration for artists from all corners of Pakistan. We take pride in fostering artistic growth and supporting a creative ecosystem that spans from traditional to contemporary forms."
            images={[
              { src: img1, alt: "Historical 1" },
              { src: img2, alt: "Historical 2" },
              { src: img3, alt: "Historical 3" },
              { src: img4, alt: "Historical 4" },
              { src: img5, alt: "Historical 5" },
              { src: img6, alt: "Historical 6" },
            ]}
            className="sm:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl"
            imageClassName="object-cover w-full h-64 sm:h-80 lg:h-96 rounded-lg shadow-md"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 text-center mb-6"
            descriptionClassName="text-lg sm:text-xl md:text-2xl lg:max-w-4xl leading-relaxed mx-auto text-center text-gray-700"
          />
        </motion.div>

        {/* Vision Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
              variants={itemVariants}
            >
              Our Vision
            </motion.h2>
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
                "
              </div>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 italic">
                To create a world where art unites people, transcending borders and creating a global dialogue through artistic expression.
              </p>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-6xl text-red-400 opacity-20">
                "
              </div>
            </motion.div>
            <motion.p
              className="mt-8 text-lg text-gray-600"
              variants={itemVariants}
            >
              We aim to support artists and bring attention to the diverse, rich culture of Pakistan while influencing global trends through innovation and cultural engagement.
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="my-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8"
              variants={itemVariants}
            >
              Our Mission
            </motion.h2>
            <motion.ul
              className="space-y-6 text-left max-w-2xl mx-auto"
              variants={containerVariants}
            >
              {[
                "Serve as the premier institution supporting artistic talents",
                "Foster rich cultural dialogue across communities",
                "Promote Pakistan's cultural heritage globally",
                "Provide platforms for emerging and established artists",
                "Enrich society through artistic expression"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-lg text-gray-700"
                  variants={itemVariants}
                >
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;