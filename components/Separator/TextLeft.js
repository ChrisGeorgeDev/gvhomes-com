import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const imageAnim = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const svgAnim = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

// const svgAnim = {
//   hidden: { opacity: 0, x: 100, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

export default function SeparatorLeft(props) {
  return (
    <>
      {/* <div className="flex max-h-[95vh] 2xl:max-h-[80vh] gap-10 flex-col lg:flex-row ">
        <div className=" flex flex-col justify-end w-full lg:w-4/12 ">
          <img
            className="2xl:h-full hidden lg:block self-end  "
            src={props.svgtext}
          />
          <div className="ml-20 lg:hidden  lg:mr-0 text-left leading-none lg:leading-tight">
            <span
              className="text-4xl lg:text-8xl leading-[1.2em] text-black block font-bold"
              dangerouslySetInnerHTML={{ __html: props.bold }}
            />
            <span
              className="text-4xl lg:text-8xl leading-[1.2em] text-black uppercase  block font-thin"
              dangerouslySetInnerHTML={{ __html: props.thin }}
            />
          </div>
        </div>

        <div className="flex justify-items-end  ">
          <img className="object-cover" src={props.image} />
        </div>
      </div> */}

      <motion.div
        className="flex  gap-10 flex-col lg:flex-row"
        initial="hidden"
        whileInView={"enter"}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.2, staggerDirection: -1 }}
      >
        <div className=" flex flex-col justify-end w-full lg:w-4/12 ">
          <motion.img
            className="2xl:h-full hidden lg:block self-end "
            src={props.svgtext}
            variants={svgAnim}
            transition={{ type: "ease", duration: 2 }}
          />
          <div className="ml-20 lg:hidden  lg:mr-0 text-left leading-none lg:leading-tight">
            <span
              className="text-4xl lg:text-8xl leading-[1.2em] text-black block font-bold"
              dangerouslySetInnerHTML={{ __html: props.bold }}
            />
            <span
              className="text-4xl lg:text-8xl leading-[1.2em] text-black uppercase  block font-thin"
              dangerouslySetInnerHTML={{ __html: props.thin }}
            />
          </div>
        </div>

        <div className="flex justify-items-end">
          <motion.img
            variants={imageAnim}
            transition={{ type: "ease", duration: 2 }}
            className="object-cover"
            src={props.image}
          />
        </div>
      </motion.div>
    </>
  );
}
