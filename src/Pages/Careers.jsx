import img1 from  "../assets/about/img1.jpg"

const Career = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-lg py-6 sm:py-8 px-4 sm:px-6 lg:px-8 min-h-screen bg-white text-gray-900">
      {/* Hero Banner with Gradient Overlay */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={img1}
          alt="Arts Council of Pakistan Karachi"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end pb-8 md:pb-12 justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Join Our Team
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              Arts Council of Pakistan Karachi
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            We are always on the lookout for talented individuals to join our dynamic team at ACPKHI, fostering growth, innovation, and diversity in the workplace. Check this page regularly for upcoming job opportunities and become part of a passionate and driven team.
          </p>
        </div>

        {/* Open Job Vacancies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10 relative">
            <span className="bg-white px-4 relative z-10">Current Opportunities</span>
            {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-0"></div> */}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Job Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trainer - Projects & Maintenance</h3>
                    <p className="text-gray-600 mb-4">We are seeking a skilled Trainer for Projects & Maintenance to support our operations.</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Open</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Deadline: 30 Sep 2024</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 - Add more cards as needed */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Administrative Coordinator</h3>
                    <p className="text-gray-600 mb-4">Looking for an organized individual to coordinate our administrative operations.</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Open</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Deadline: 15 Oct 2024</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Job Vacancies */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-10 relative">
            <span className="bg-white px-4 relative z-10">Previous Opportunities</span>
            {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-0"></div> */}
          </h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Previous Job 1 */}
            <div className="p-6 md:p-8 border-b border-gray-100 last:border-0">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <img
                  src="https://acpkhi.com/logo.png"
                  alt="ACP Logo"
                  className="w-20 h-20 rounded-lg object-contain"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Graphic Designer</h3>
                  <p className="text-gray-600 mb-4">We previously sought a creative Graphic Designer to join our marketing team.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Closed</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Deadline passed: 15 Aug 2024</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200" disabled>
                  Position Filled
                </button>
              </div>
            </div>

            {/* Previous Job 2 */}
            <div className="p-6 md:p-8 border-b border-gray-100 last:border-0">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <img
                  src="https://acpkhi.com/logo.png"
                  alt="ACP Logo"
                  className="w-20 h-20 rounded-lg object-contain"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Event Manager</h3>
                  <p className="text-gray-600 mb-4">Previously sought an experienced Event Manager for our cultural programs.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Closed</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Deadline passed: 30 Jul 2024</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200" disabled>
                  Position Filled
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Didn&apos;t find your perfect role?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">We&apos;re always interested in hearing from talented people. Send us your resume and we&apos;ll contact you when a suitable position opens up.</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
            Submit Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;