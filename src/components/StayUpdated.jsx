import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="py-12 sm:py-8 md:py-6 lg:py-16 px-4 sm:px-6 md:px-8 bg-white text-black relative overflow-hidden">
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
            fill="#B90602"
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
          className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-black mb-4 sm:mb-6 tracking-tight"
        >
          Stay Updated
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-black"
        >
          Get the Latest Updates and Offers
        </motion.p>
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
            className="w-full max-w-xs sm:max-w-sm p-2 sm:p-3 rounded-lg bg-black/50 backdrop-blur-md text-white border border-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300 text-sm sm:text-base placeholder-white"
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className={` sm:w-auto bg-[#000000] text-white font-sans font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#B90602] transition duration-300 text-sm sm:text-base ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
            className={`mt-6 text-sm px-4 py-2 rounded-lg ${message.type === 'success' ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-gray-400'}`}
          >
            {message.content}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default StayUpdated;