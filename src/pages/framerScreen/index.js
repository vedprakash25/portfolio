import { type } from "@testing-library/user-event/dist/type";
import { color, delay, motion } from "framer-motion";
import React from "react";
import Variants from "./variants";

export default function Framer() {
  return (
    <div>
      <motion.h4 animate={{ x: 0 }}>x=0, delay=0.0</motion.h4>
      <motion.h4 initial={{ x: 100 }} animate={{ x: 0 }}>
        x=100, delay=0.0
      </motion.h4>
      <motion.h4
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        x=100, delay=0.5
      </motion.h4>
      <motion.h4
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 10 }}
      >
        x=100, delay=0.5, type="spring"
      </motion.h4>

      <motion.button
        whileHover={{ scale: 1.2, originX: "left", type: "spring" }}
        className="text-3xl"
      >
        whileHover = scale: 1.2, originX: "left", type: "spring"
      </motion.button>

      <br />
      <br />
      <br />

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

      <br />
      <br />
      <br />

      <Variants />
    </div>
  );
}

const containerVariant = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
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
