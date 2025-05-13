import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WcNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-4">
        <motion.div
          className="bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-black">
              <span className="text-pink-800">
                WC Empowers Women Leaders
              </span>{' '}
              <br className="hidden sm:block" />
              Worldwide
            </h2>

            <p className="text-lg text-black max-w-2xl mx-auto">
              Stay connected with the Women Conference. Join our mailing list for exclusive updates!
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
                      onChange={(e) => setEmail(e.target.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-700 transition-all duration-200"
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
                    className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WcNewsletter;