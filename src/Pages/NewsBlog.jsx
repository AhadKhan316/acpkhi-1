// src/pages/NewsBlog.jsx
import { useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const NewsBlog = () => {
  useEffect(() => {
    // Load Curator.io script
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'UTF-8';
    script.src = 'https://cdn.curator.io/published/1cb854e2-912c-4d70-9b0d-7af93b7799ef.js';


    const container = document.getElementById('curator-feed-container');
    container.appendChild(script);

    return () => {
      // Cleanup
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay connected with our latest social media posts and news updates
        </p>
      </div>

      {/* Curator.io Feed Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div 
          id="curator-feed-container"
          className="curator-feed"
        >
          <div 
            id="curator-feed-default-feed-layout"
            className="w-full"
          >
            <a 
              href="https://curator.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="crt-logo crt-tag hidden"
            >
              Powered by Curator.io
            </a>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default NewsBlog;