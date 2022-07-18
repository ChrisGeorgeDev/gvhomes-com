import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";
import { motion } from "framer-motion";

// import { getServerSideProps } from "../../pagzes/communities";
const imageAnim = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const childrenAnim = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function PageHero(props) {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  let portraitImage = props.imagePortrait;
  return (
    <>
      <motion.div
        className="h-[450px] mt-10 relative bg-white overflow-hidden border-b bg-blue-ggDark flex flex-col justify-center "
        initial="hidden"
        animate={"enter"}
        transition={{ staggerChildren: 0.5 }}
      >
        <div className={`"flex container "`}>
          <motion.div
            className={`w-12/12 relative z-[2] mx-auto   `}
            variants={childrenAnim}
            transition={{ type: "easeIn", duration: 1.5 }}
          >
            {props.children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
