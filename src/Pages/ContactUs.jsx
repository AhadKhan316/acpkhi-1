import { motion } from "framer-motion";
import img1 from "../assets/about/img1.jpg";

const ContactUs = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const contactMethods = [
    {
      title: "General Queries",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      details: [
        { label: "Phone", value: "+92-300-0802391", href: "tel:+923000802391" },
        { label: "Email", value: "info@acpkhi.com", href: "mailto:info@acpkhi.com" }
      ],
      bgColor: "bg-red-50",
      borderColor: "border-red-100"
    },
    {
      title: "Venue Bookings",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      details: [
        { label: "Phone", value: "+92-300-0802392", href: "tel:+923000802392" },
        { label: "Email", value: "booking@acpkhi.com", href: "mailto:booking@acpkhi.com" }
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Visit Us",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      details: [
        { label: "Address", value: "M.R Kiyani Road, Saddar Karachi" },
        { label: "Hours", value: "Mon-Sun: 9AM - 10PM" }
      ],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <motion.img
          src={img1}
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-12">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with the heart of Pakistan's cultural scene
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you have questions about our programs, want to book a venue, or just want to say hello, we're here to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className={`p-8 rounded-2xl shadow-md border ${method.borderColor} ${method.bgColor} transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${method.bgColor}`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
              </div>
              <div className="space-y-4">
                {method.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{detail.label}</p>
                      {detail.href ? (
                        <a 
                          href={detail.href} 
                          className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Location</h2>
            <p className="text-xl text-gray-600">Visit us at our cultural hub in Karachi</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="h-96 md:h-[500px] w-full">
              <iframe
                title="Arts Council of Pakistan Karachi Location"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Arts+Council+of+Pakistan+Karachi,+M.R.+Kiyani+Road,+Saddar,+Karachi,+Pakistan&hl=en&z=14&t=m&output=embed&style=feature:all|element:geometry.fill|saturation:-100|lightness:10"
                className="rounded-b-xl"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-lg text-gray-700">
                <strong>Arts Council of Pakistan Karachi</strong><br />
                M.R Kiyani Road, Saddar Karachi, Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Send Us a Message</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">We'll get back to you within 24 hours</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;