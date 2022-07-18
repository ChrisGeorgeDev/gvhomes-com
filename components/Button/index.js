import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const button = {
  hidden: { opacity: 0, x: 25, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function Button(props) {
  return (
    <motion.div
      className="bar mt-10 my-2"
      initial="hidden"
      whileInView={"enter"}
      viewport={{ once: true, amount: 0.6 }}
      variants={button}
      transition={{ type: "ease", duration: 2 }}
    >
      <img
        className=" arrow"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      <div className="text">{props.children}</div>
    </motion.div>
  );
}
