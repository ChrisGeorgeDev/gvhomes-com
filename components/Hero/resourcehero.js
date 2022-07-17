import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";

// import { getServerSideProps } from "../../pagzes/communities";

export default function ResourcesHero(props) {
  return (
    <>
      <div className="h-[400px] lg:h-[600px] relative bg-white overflow-hidden  bg-blue-ggDark flex flex-col justify-end ">
        <div className={`"flex container mb-10 "`}>
          <div className={`w-12/12  relative z-[2] mx-auto  `}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
