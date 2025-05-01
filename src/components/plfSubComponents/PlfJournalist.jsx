// import { motion } from "framer-motion";

// const PlfJournalists = () => {
//   const journalists = [
//     { name: "Mazhar Abbas", image: "https://via.placeholder.com/300" },
//     { name: "Sohail Sangi", image: "https://via.placeholder.com/300" },
//     { name: "Abdullah Sultan", image: "https://via.placeholder.com/300" },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-8 bg-navy-800 text-ivory-100">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
//           Journalists
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
//           {journalists.map((journalist, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, rotateY: 90 }}
//               whileInView={{ opacity: 1, rotateY: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ rotateY: 10, scale: 1.05 }}
//               className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg"
//             >
//               <img
//                 src={journalist.image}
//                 alt={journalist.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
//                 <h3 className="text-xl font-serif font-bold text-ivory-100">
//                   {journalist.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlfJournalists;