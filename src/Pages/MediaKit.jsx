import React from "react";

const MediaKitPage = () => {
  const mediaKits = [
    { name: "Brand Logo Pack", file: "logo-pack.zip", size: "2.5 MB" },
    // { name: "Product Images", file: "product-images.zip", size: "10 MB" },
    // { name: "Press Release PDF", file: "press-release.pdf", size: "1 MB" },
    // { name: "Social Media Assets", file: "social-assets.zip", size: "5 MB" },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Media Kit Downloads</h1>
        <p className="text-center text-gray-600 mb-10">Access and download professional media assets for your campaigns.</p>
        <div className="grid grid-cols-1 gap-6">
          {mediaKits.map((kit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{kit.name}</h2>
              <p className="text-gray-500 mb-4">Size: {kit.size}</p>
              <a
                href={`/assets/${kit.file}`}
                download
                className="inline-block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaKitPage;