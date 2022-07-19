import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";
import { motion } from "framer-motion";

const imageAnim = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const p1 = {
  hidden: { opacity: 0, x: 0, y: -25 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const p2 = {
  hidden: { opacity: 0, x: 0, y: 25 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};


// import { getServerSideProps } from "../../pagzes/communities";

export default function ResourcesHero(props) {
  return (
    <>
          <motion.div
   className="pt-[150px] lg:pt-0 lg:h-[400px]  relative bg-white overflow-hidden  bg-blue-ggDark flex flex-col justify-end"
   initial="hidden"
        animate={"enter"}
        variants={p2}
        transition={{ type: "easeIn", duration: .8 }}
      >
        <div className={`"flex container mb-10 "`}>
          <div className={`w-12/12  relative z-[2] mx-auto  `}>
            {props.children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
