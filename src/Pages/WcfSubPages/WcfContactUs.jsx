import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations

const WcfContactUs = () => {
  // State for form fields and progress
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [progress, setProgress] = useState(0);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Calculate progress based on filled fields
    const filledFields = Object.values({ ...formData, [name]: value }).filter(Boolean).length;
    setProgress((filledFields / 3) * 100); // 3 fields total
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setProgress(0);
  };

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Background with Cultural Art */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://via.placeholder.com/2048x1366?text=Cultural+Art+Pattern')",
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="py-8 md:py-8 px-4 md:px-6 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-black max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with the World Culture Festival-Karachi team.
          </motion.p>
        </section>

        {/* Main Content */}
        <main className="flex-1 py-6 md:py-10 px-4 md:px-6">

          {/* Contact Details */}
          <section className="mb-10 max-w-5xl mx-auto">
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
              Contact Information
            </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Email",
                  detail: "info@wcfkarachi.com",
                  extra: "Support: support@wcfkarachi.com",
                  icon: "✉️",
                },
                {
                  title: "Phone",
                  detail: "+92-21-1234567",
                  extra: "Hotline: +92-300-1234567",
                  icon: "📞",
                },
                {
                  title: "Address",
                  detail: "Karachi Expo Center, Pakistan",
                  extra: "Open 9 AM - 5 PM",
                  icon: "📍",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="text-2xl mb-2">{contact.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2">{contact.detail}</p>
                  <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {contact.extra}
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-10 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black">
              Send Us a Message
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
                    required
                  />
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-700"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-700 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WcfContactUs;