// import { motion } from "framer-motion";

// const PlfArtists = () => {
//   const artists = [
//     { name: "Arslan Shykh", image: "https://via.placeholder.com/300" },
//     { name: "Bahadur Ali Abro", image: "https://via.placeholder.com/300" },
//     { name: "Sanam Mary", image: "https://via.placeholder.com/300" },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-8 bg-ivory-100 text-navy-900">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
//           Artists
//         </h2>
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
//           {artists.map((artist, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group mb-8 break-inside-avoid rounded-lg overflow-hidden shadow-lg"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/300x400?text=Watercolor')", // Replace with a watercolor texture
//                 backgroundSize: "cover",
//               }}
//             >
//               <img
//                 src={artist.image}
//                 alt={artist.name}
//                 className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-serif font-bold text-navy-900">
//                   {artist.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlfArtists;