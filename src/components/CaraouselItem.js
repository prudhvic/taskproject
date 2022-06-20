import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const CaraouselItem = ({ currentPic }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="caraousel-item"
        style={{
          backgroundImage: `url(${currentPic.src})`,
        }}
      >
        <div className="content">
          <motion.p
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentPic.label}
          </motion.p>
          <motion.h1
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {currentPic.title}
          </motion.h1>
          <motion.button
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            className="btn btn-explore"
            transition={{ delay: 1 }}
          >
            Explore Work
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaraouselItem;
