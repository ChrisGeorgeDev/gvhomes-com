import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";

// import { getServerSideProps } from "../../pagzes/communities";

export default function ResourcesHero(props) {
  return (
    <>
      <div className="pt-[150px] lg:pt-0 lg:h-[400px]  relative bg-white overflow-hidden  bg-blue-ggDark flex flex-col justify-end ">
        <div className={`"flex container mb-10 "`}>
          <div className={`w-12/12  relative z-[2] mx-auto  `}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
