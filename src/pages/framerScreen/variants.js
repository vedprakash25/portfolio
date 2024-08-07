import React from "react";
import { motion } from "framer-motion";

export default function Variants() {
  return (
    <div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="text-3xl"
      >
        <h4>
          variants="containerVariant", initial="hidden", animate="visible"
        </h4>

        <motion.h4 variants={childVariant}>
          variants="childVariant" <b />
          <span className="line-through">
            initial="hidden", animate="visible"
          </span>
        </motion.h4>
      </motion.div>
    </div>
  );
}

const containerVariant = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    originX: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 10, color: "blue" },
  visible: {
    opacity: 1,
    y: 0,
    color: "black",
    transition: {
      type: "spring",
    },
  },
};
