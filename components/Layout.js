import React from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function Layout(props, router) {
  return (
    <div>
      <NextSeo
        title={props.title}
        description={props.description}
        // openGraph={{ props.title, props.description }}
      />
      <motion.main
        // key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "ease", duration: .2 }}
        className="mb-auto"
      >
        {props.children}
      </motion.main>
    </div>
  );
}
