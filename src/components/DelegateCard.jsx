import { useState } from 'react';
import { FiX, FiInstagram, FiTwitter, FiGlobe, FiLinkedin, FiAward } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const DelegateCard = ({ delegate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Social icon mapping with better visual treatment
  const socialIcons = {
    instagram: <FiInstagram className="w-5 h-5" />,
    twitter: <FiTwitter className="w-5 h-5" />,
    website: <FiGlobe className="w-5 h-5" />,
    linkedin: <FiLinkedin className="w-5 h-5" />,
    awards: <FiAward className="w-5 h-5" />
  };

  return (
    <>
      {/* Card in Grid View - Enhanced Design */}
      <motion.div 
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800">
          {/* Artistic image container */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={delegate.image}
              alt={delegate.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-gray-700 pattern-opacity-20 pattern-size-4" />
          </div>

          {/* Floating info panel */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 transform group-hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white font-serif mb-1">{delegate.name}</h3>
            <p className="text-accent-300 font-medium text-white">{delegate.role}</p>
            
            {/* Hover indicator with animation */}
            <motion.div 
              className="mt-4 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium bg-accent-500/90 text-white rounded-full shadow-lg">
                View Profile
              </span>
              <div className="ml-3 h-px bg-white/30 flex-1" />
            </motion.div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-accent-400 transform rotate-45 scale-0 group-hover:scale-100 origin-center transition-transform duration-500" />
        </div>
      </motion.div>

      {/* Expanded Modal View - Premium Design */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop with parallax effect */}
            <motion.div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsExpanded(false)}
            />
            
            {/* Main modal container */}
            <motion.div 
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Artistic background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 pattern-wavy pattern-gray-200 pattern-opacity-20 pattern-size-16" />
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 z-10 text-gray-500 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100 shadow-md bg-white"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Modal content grid */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image section - Artistic framing */}
                <div className="lg:col-span-5 relative h-96 lg:h-full">
                  <div className="absolute inset-0 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                    <img
                      src={delegate.image}
                      alt={delegate.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative frame elements */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30 rounded-xl pointer-events-none" />
                  <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/20 rounded-lg pointer-events-none" />
                  
                  {/* Name overlay for mobile */}
                  <div className="lg:hidden absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h2 className="text-3xl font-bold font-serif">{delegate.name}</h2>
                    <p className="text-accent-300 font-medium mt-1">{delegate.role}</p>
                  </div>
                </div>

                {/* Content section */}
                <div className="lg:col-span-7 p-8 lg:p-12 bg-white/90 backdrop-blur-sm rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
                  <div className="mb-8 hidden lg:block">
                    <h2 className="text-5xl font-bold font-serif text-gray-900 mb-2">{delegate.name}</h2>
                    <div className="flex items-center">
                      <p className="text-primary-500 font-medium">{delegate.role}</p>
                      <div className="ml-4 h-px bg-gray-200 flex-1" />
                    </div>
                  </div>

                  {/* Bio with elegant typography */}
                  <div className="prose prose-xl max-w-none text-gray-700 mb-8">
                    {delegate.bio.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>

                  {/* Social links with hover effects */}
                  {delegate.socialLinks && (
                    <div className="flex gap-3 mb-8">
                      {delegate.socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-primary-500 transition-all text-gray-600 hover:text-white shadow-sm hover:shadow-md"
                          title={link.type}
                          whileHover={{ y: -3 }}
                        >
                          {socialIcons[link.type]}
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {/* Additional details in elegant cards */}
                  {delegate.additionalDetails && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <FiAward className="mr-2 text-primary-500" />
                        Professional Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {delegate.additionalDetails.map((detail, i) => (
                          <div key={i} className="bg-gray-50/70 hover:bg-gray-100/50 transition-colors p-4 rounded-lg border border-gray-200/50">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{detail.label}</h4>
                            <p className="text-lg font-serif text-gray-800 mt-1">{detail.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DelegateCard;