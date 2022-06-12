import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";

// import { getServerSideProps } from "../../pagzes/communities";

export default function PageHero(props) {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  let portraitImage = props.imagePortrait;
  return (
    <>
   <div className="h-[450px] mt-10 relative bg-white overflow-hidden border-b bg-blue-ggDark flex flex-col justify-center "
      >




<div className={`"flex container "`}>
          <div className={`w-12/12 relative z-[2] mx-auto   `}>{props.children}</div>
        </div>

</div>


    </>
  );
}

