import { useEffect } from 'react';
import { motion } from 'framer-motion';

const QRCodeRedirect = () => {
  // Set your redirect URL here - this is the ONLY place you need to update
  const redirectUrl = "https://acpkhi.com/festival/aaf";

  useEffect(() => {
    // Immediate redirect when page loads
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-[#B90602]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Redirecting...</h1>
        <p className="text-gray-600 mb-4">
          You're being redirected to our festival page
        </p>
        <div className="bg-gray-100 p-3 rounded-lg inline-block">
          <p className="text-sm text-gray-800 font-mono break-all">
            {redirectUrl}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default QRCodeRedirect;