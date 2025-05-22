import React, { useState } from "react";
import { motion } from "framer-motion";

import StayUpdatedImage from "/src/assets/acp-logo-and-hero-img/stayUpdatebgimg.jpg";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch("http://localhost/organization-website/backend/save_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setMessage({ type: "success", content: data.message });
        setEmail("");
      } else {
        setMessage({ type: "error", content: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", content: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

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
    <section
      className="relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[95vh] text-white overflow-hidden"
      style={{
        backgroundImage: `url(${StayUpdatedImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight drop-shadow-lg"
          variants={textVariants}
        >
          Hear From Us

        </motion.h2>
        {/* <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-3xl mb-6 opacity-90 drop-shadow"
          variants={textVariants}
        >
          Get the latest scoop from us
        </motion.p> */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full max-w-xs sm:max-w-sm p-2 sm:p-3 rounded-lg bg-black/50 backdrop-blur-md text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition duration-300 text-sm sm:text-base placeholder-gray-300"
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className={`sm:w-auto bg-[#B90602] text-white font-sans font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={isLoading ? {} : { scale: 1.05 }}
            whileTap={isLoading ? {} : { scale: 0.95 }}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>
        {message.content && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`mt-6 text-sm px-4 py-2 rounded-lg ${message.type === 'success' ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}
          >
            {message.content}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default StayUpdated;