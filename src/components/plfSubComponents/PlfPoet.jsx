// import { motion } from "framer-motion";

// const PlfPoets = () => {
//   const poets = [
//     { name: "Amar Sindhu", image: "https://via.placeholder.com/300" },
//     { name: "Adal Soomro", image: "https://via.placeholder.com/300" },
//     { name: "Imran Aami", image: "https://via.placeholder.com/300" },
//     { name: "Sohrab Sehar", image: "https://via.placeholder.com/300" },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-8 bg-ivory-100 text-navy-900">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
//           Poets
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {poets.map((poet, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group bg-ivory-100 shadow-lg rounded-lg overflow-hidden border border-amber-500/30"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/300x400?text=Parchment')", // Replace with a parchment texture
//                 backgroundSize: "cover",
//               }}
//             >
//               <img
//                 src={poet.image}
//                 alt={poet.name}
//                 className="w-full h-64 object-cover transform group-hover:brightness-110 transition duration-500"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-serif font-bold text-navy-900">
//                   {poet.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlfPoets;