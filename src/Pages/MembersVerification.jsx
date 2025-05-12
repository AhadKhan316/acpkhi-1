import { useState } from "react";

import img1 from  "../assets/about/img1.jpg"

const VoterVerification = () => {
  const [membershipInput, setMembershipInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setMembershipInput(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Add your verification logic here
    console.log("Verifying membership:", membershipInput);
  };

  return (
    <div className="bg-white text-gray-900 max-w-7xl mx-auto rounded-lg py-6 sm:py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Hero Banner with Gradient Overlay */}
      <div className="relative w-full h-74 md:h-116 overflow-hidden">
        <img
          src={img1}
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end pb-8 md:pb-12 justify-center">
          <div className="text-center px-4">
            <h1 className="text-xl md:text-5xl font-bold text-white mb-2">
              Arts Council of Pakistan Karachi
            </h1>
            <h3 className="text-lg md:text-3xl font-bold text-white">
              Voter Verification for Election 2025–26
            </h3>
          </div>
        </div>
      </div>

      {/* Verification Card */}
      <div className="max-w-4xl mx-auto px-8 sm:px-6 lg:px-8 mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
              Verify Your Membership
            </h3>
            <p className="text-gray-600">
              Enter your details to check your voting eligibility
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label
                htmlFor="membershipInput"
                className="block text-base font-medium text-black mb-3"
              >
                Membership No., CNIC, or Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="membershipInput"
                  value={membershipInput}
                  onChange={handleInputChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="e.g. ACP12345, 42101-1234567-8, or John Doe"
                  className={`w-full px-5 py-4 text-lg border-2 ${isFocused ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200`}
                  aria-label="Membership, CNIC, or Name"
                />
                {isFocused && (
                  <div className="absolute -bottom-6 left-0 text-sm text-gray-500">
                    Press Enter or click Verify
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="text-lg">Verify Membership</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12 text-center text-gray-500 text-sm">
        <p>
          Having trouble verifying? Contact support at{" "}
          <a href="mailto:elections@acpkhi.com" className="text-red-600 hover:underline">
            elections@acpkhi.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default VoterVerification;