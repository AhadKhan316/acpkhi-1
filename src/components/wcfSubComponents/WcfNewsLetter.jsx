import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WcfNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-4">
        <motion.div
          className="bg-white p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                WCFK Unites 450+ Artists
              </span>{' '}
              <br className="hidden sm:block" />
              From 40+ Countries
            </h2>

            <p className="text-lg text-black max-w-2xl mx-auto">
              Stay connected with the global celebration. Join our mailing list for exclusive updates!
            </p>

            {isSubscribed ? (
              <motion.div
                className="bg-green-50 text-black p-4 rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <p className="font-medium">Thank you for subscribing!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-5 py-3 rounded-lg focus:border-black focus:ring-2 focus:ring-black transition-all duration-200"
                    />
                    <svg
                      className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
              </form>
            )}
            {/* 
            <div className="pt-6 flex justify-center space-x-6">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      Social media icons would go here
                    </svg>
                  </div>
                </a>
              ))}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WcfNewsletterSignup;