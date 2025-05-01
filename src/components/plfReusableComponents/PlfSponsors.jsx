// import { motion } from "framer-motion";

// const PlfSponsors = ({ sponsors, title = "Our Sponsors" }) => {
//   return (
//     <section className="py-16 px-4 md:px-8 bg-ivory-100 text-navy-900">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
//           {title}
//         </h2>
//         <div className="relative overflow-hidden">
//           <motion.div
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             className="flex space-x-8"
//           >
//             {[...sponsors, ...sponsors].map((sponsor, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="w-40 h-40 flex-shrink-0"
//               >
//                 <img
//                   src={sponsor.image}
//                   alt={sponsor.name}
//                   className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlfSponsors;