import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";
import { motion } from "framer-motion";

// import { getServerSideProps } from "../../pagzes/communities";
const imageAnim = {
  hidden: { opacity: 0},
  enter: { opacity: 1 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const childrenAnim = {
  hidden: { opacity: 0, x: 0, y: 25 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
// import { getServerSideProps } from "../../pagzes/communities";

export default function InteriorHero(props) {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  let portraitImage = props.imagePortrait;
  return (
    <>
      <motion.div
        className="h-[80vh] relative bg-white overflow-hidden  bg-blue-ggDark flex flex-col justify-center "
        transition={{ staggerChildren: 0.5, staggerDirection:1 }}
        whileInView={"enter"}
        initial="hidden"

        viewport={{ once: true, amount: 0.6 }}
        >
        {isDesktop && (
          // <picture className=" ">

          <motion.img
            alt={props.alt}
            src={props.image}
            className="object-cover absolute z-[1] object-center  w-full h-full"
            variants={imageAnim}
            transition={{ type: "easeInOut", duration: .8 }}
          />
        )}

        {!isDesktop && (
          <motion.img
            alt={props.alt}
            // src={
            //   portraitImage == "undefined"
            //     ? props.image
            //     : props.imagePortrait
            // }
            src={props.image}
            className="object-cover absolute z-[1]  w-full h-full"
            variants={imageAnim}
            transition={{ type: "ease", duration: 1 }}
          />
        )}

        <div className={`"flex container "`}>
          <motion.div
            className={`w-12/12 relative z-[2]  mx-auto mb-6  `}
            variants={childrenAnim}
            transition={{ type: "easeIn", duration: 1 }}
          >
            {props.children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// <div className="h-[80vh] relative bg-black overflow-hidden  bg-blue-ggDark flex flex-col justify-center "
//       >

// <img
//                 src="/img/hero/welcome_couch.jpg"
//                 priority="true"
//                 className="object-cover absolute z-[1]  object-right-bottom w-full h-full"
//               />

// <div className={`"flex container "`}>
//           <div className={`w-12/12 relative z-[2] mx-auto mb-6  `}>GOO</div>
//         </div>

// </div>
