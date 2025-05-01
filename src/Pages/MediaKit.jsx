// // src/pages/MediaKit.jsx
// import { useState } from 'react';
// import { saveAs } from 'file-saver';

// const MediaKit = () => {
//   const [activeTab, setActiveTab] = useState('logos');

//   // Sample media data - replace with your actual assets
//   const mediaAssets = {
//     logos: [
//       {
//         id: 1,
//         title: 'Primary Logo',
//         description: 'Main brand logo in PNG format',
//         preview: '/assets/media-kit/logo-preview.png',
//         downloads: [
//           { type: 'PNG', url: '/assets/media-kit/logo-primary.png' },
//           { type: 'SVG', url: '/assets/media-kit/logo-primary.svg' }
//         ]
//       },
//       {
//         id: 2,
//         title: 'Secondary Logo',
//         description: 'Alternative logo for dark backgrounds',
//         preview: '/assets/media-kit/logo-secondary-preview.png',
//         downloads: [
//           { type: 'PNG', url: '/assets/media-kit/logo-secondary.png' },
//           { type: 'SVG', url: '/assets/media-kit/logo-secondary.svg' }
//         ]
//       }
//     ],
//     images: [
//       {
//         id: 1,
//         title: 'Brand Hero Image',
//         description: 'Primary marketing image for presentations',
//         preview: '/assets/media-kit/hero-preview.jpg',
//         downloads: [
//           { type: 'JPG HD', url: '/assets/media-kit/hero-image.jpg' },
//           { type: 'JPG 4K', url: '/assets/media-kit/hero-image-4k.jpg' }
//         ]
//       }
//     ],
//     documents: [
//       {
//         id: 1,
//         title: 'Brand Guidelines',
//         description: 'Complete brand usage and style guide',
//         preview: '/assets/media-kit/guidelines-preview.jpg',
//         downloads: [
//           { type: 'PDF', url: '/assets/media-kit/brand-guidelines.pdf' }
//         ]
//       }
//     ]
//   };

//   const handleDownload = (url) => {
//     saveAs(url, url.split('/').pop());
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media Kit</h1>
//         <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//           Download official brand assets, logos, and media resources
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Tabs */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="-mb-px flex space-x-8">
//             {['logos', 'images', 'documents'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab
//                   ? 'border-indigo-500 text-indigo-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Media Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mediaAssets[activeTab].map((asset) => (
//             <div key={asset.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-center">
//                 <img
//                   src={asset.preview}
//                   alt={asset.title}
//                   className="h-40 object-contain"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.title}</h3>
//                 <p className="text-gray-600 mb-4">{asset.description}</p>
//                 <div className="space-y-2">
//                   {asset.downloads.map((download, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => handleDownload(download.url)}
//                       className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                       <span>Download {download.type}</span>
//                       <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                       </svg>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Brand Usage Guidelines</h2>
//           <div className="prose prose-indigo text-gray-600">
//             <p>
//               Please follow these guidelines when using our brand assets:
//             </p>
//             <ul>
//               <li>Do not alter, distort, or recolor the logos</li>
//               <li>Maintain minimum clear space around logos</li>
//               <li>Use approved color variations only</li>
//               <li>Do not use logos as part of your own product/brand</li>
//             </ul>
//             <p>
//               For any questions about proper usage, please contact <a href="mailto:press@example.com" className="text-indigo-600 hover:text-indigo-500">press@example.com</a>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaKit;