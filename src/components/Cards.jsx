import React from "react";
import { motion } from "framer-motion";
import ReusableCard from "../reusableComponents/ReusableCard";

const Cards = ({ title, items, showButton = false }) => {
  return (
    <div className="bg-white sm:py-6 lg:py-8 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-8">
      <div className="mx-2">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-6 lg:mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <ReusableCard
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              buttonText={item.buttonText}
              showButton={showButton}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;