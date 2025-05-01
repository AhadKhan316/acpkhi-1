import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations

const WcfMediaCoverage = () => {
  // Sample data for featured news articles
  const featuredNews = [
    {
      id: 1,
      source: "The News",
      title: "63rd Annual Cultural Festival Brings Artists Together",
      date: "02 November 2024",
      image: "https://via.placeholder.com/600x400?text=Featured+News+1",
      snippet: "The festival showcased a diverse range of performances...",
      link: "#",
    },
    {
      id: 2,
      source: "The City News",
      title: "Artists Celebrate Creativity at Karachi Festival",
      date: "02 November 2024",
      image: "https://via.placeholder.com/600x400?text=Featured+News+2",
      snippet: "A vibrant display of art and culture at the festival...",
      link: "#",
    },
  ];

  // Sample data for news sources list
  const newsSources = [
    { source: "Africo News", date: "02 Nov 2024", link: "#" },
    { source: "Dawn", date: "02 Nov 2024", link: "#" },
    { source: "Express News", date: "02 Nov 2024", link: "#" },
    { source: "Geo News", date: "02 Nov 2024", link: "#" },
    { source: "ARY News", date: "02 Nov 2024", link: "#" },
    { source: "The Nation", date: "02 Nov 2024", link: "#" },
    { source: "Daily Times", date: "02 Nov 2024", link: "#" },
    // Add more sources as needed
  ];

  // Sample data for additional news snippets
  const newsSnippets = [
    {
      id: 1,
      source: "Tribune",
      title: "The News Tribune: Vibrant Arts Festival",
      date: "02 Nov 2024",
      link: "#",
    },
    {
      id: 2,
      source: "Express News",
      title: "Express News: Cultural Highlights",
      date: "02 Nov 2024",
      link: "#",
    },
    {
      id: 3,
      source: "Pakistan Observer",
      title: "Pakistan Observer: Festival Recap",
      date: "02 Nov 2024",
      link: "#",
    },
    {
      id: 4,
      source: "Daily News",
      title: "Daily News: Artistic Showcase",
      date: "02 Nov 2024",
      link: "#",
    },
    // Add more snippets as needed
  ];

  // State for filtering news sources
  const [searchQuery, setSearchQuery] = useState("");
  const filteredNewsSources = newsSources.filter(
    (source) =>
      source.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // State for loading more news snippets
  const [visibleSnippets, setVisibleSnippets] = useState(2); // Initially show 2 snippets
  const snippetsPerLoad = 2; // Load 2 more snippets each time

  const handleLoadMore = () => {
    setVisibleSnippets((prev) => prev + snippetsPerLoad);
  };

  const hasMoreSnippets = visibleSnippets < newsSnippets.length;

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const snippetVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://via.placeholder.com/2048x1366?text=Media+Coverage+Hero')",
            transform: "translateY(0)", // Parallax effect placeholder
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MEDIA COVERAGE
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how the World Culture Festival-Karachi is making headlines.
          </motion.p>
        </div>
        {/* Decorative Dots */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-red-500 rounded-full opacity-50"></div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-6 md:py-10 px-4 md:px-6">
        {/* Featured News Section */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
            Featured News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredNews.map((article) => (
              <motion.div
                key={article.id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="relative w-full h-48 md:h-64">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.source} • {article.date}</p>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {article.snippet}
                  </p>
                  <a
                    href={article.link}
                    className="inline-block px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-red-800 to-red-500 rounded-full z-20 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* News Sources List */}
        <section className="mb-10 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
            News Sources
          </h2>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search news sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-red-700 text-white p-4 font-semibold text-sm md:text-base">
              <div>News Source</div>
              <div>Date</div>
              <div>Link</div>
            </div>
            {filteredNewsSources.length > 0 ? (
              filteredNewsSources.map((source, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="text-gray-800">{source.source}</div>
                  <div className="text-gray-600">{source.date}</div>
                  <div>
                    <a
                      href={source.link}
                      className="text-red-700 hover:underline"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No news sources found.
              </div>
            )}
          </div>
        </section>

        {/* Additional News Snippets */}
        <section className="mb-10 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">
            More News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsSnippets.slice(0, visibleSnippets).map((snippet) => (
              <motion.div
                key={snippet.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                variants={snippetVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-sm text-gray-500 mb-2">{snippet.source} • {snippet.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {snippet.title}
                </h3>
                <a
                  href={snippet.link}
                  className="text-red-700 hover:underline"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
          {hasMoreSnippets && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-red-700 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>

     
    </div>
  );
};

export default WcfMediaCoverage;