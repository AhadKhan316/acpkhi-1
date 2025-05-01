// import { motion } from "framer-motion";
// import { useState } from "react";

// const PlfEntertainment = () => {
//   const entertainers = [
//     { name: "Yousuf Kerai", image: "https://via.placeholder.com/300" },
//     { name: "Munawar Saeed", image: "https://via.placeholder.com/300" },
//     { name: "Sohrab Soomro", image: "https://via.placeholder.com/300" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-16 px-4 md:px-8 bg-navy-800 text-ivory-100">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
//           Entertainment
//         </h2>
//         <div className="relative">
//           <div className="flex justify-center space-x-4">
//             {entertainers.map((entertainer, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative w-64 h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${activeIndex === index ? "scale-110 z-10" : "scale-90 opacity-70"
//                   }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <img
//                   src={entertainer.image}
//                   alt={entertainer.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
//                   <h3 className="text-xl font-serif font-bold text-ivory-100">
//                     {entertainer.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlfEntertainment;