import MainNav from "../MainNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../Hero/Hero.module.css";

// import { getServerSideProps } from "../../pagzes/communities";

export default function LandingHero(props) {
  let isDesktop = useMediaQuery("(min-width: 900px)");
  let portraitImage = props.imagePortrait;
  return (
    <>
      {/* <MainNav /> */}

      <div
        className={`${styles.hHero} ${props.height} overflow-hidden  bg-blue-ggDark flex flex-col justify-center   ${styles.heroImg}`}
      >
        {/* IMAGE÷\ */}
        <div className={`${styles.bgWrap} `}>
          {isDesktop && (
            <picture className=" ">
              {/* <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066" media="    (min-width: 1920px) and (min-height: 600px)" />
            <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066 2x, /assets/images/landing/intro/intro-xxl.jpg?v=1628669066 1x" media="    (min-width: 1440px) and (min-height: 600px)">
            <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066 2x, /assets/images/landing/intro/intro-xl.jpg?v=1628669066 1x" media="    (min-width: 1200px) and (min-height: 600px)">
            <source srcset="/assets/images/landing/intro/intro-xl.jpg?v=1628669066" media="    (min-width: 980px)">
            <source srcset="/assets/images/landing/intro/intro-md.jpg?v=1628669066" media="    (min-width: 568px) and (max-aspect-ratio: 13 / 9), only screen and (min-width: 668px) and (min-height: 416px), only screen and (min-width: 980px)">
            <source srcset="/assets/images/landing/intro/intro-sm.jpg?v=1628669066" media="    (min-width: 568px), (min-aspect-ratio: 13 / 9)"> */}
              <img
                alt={props.alt}
                src={props.image}
                priority="true"
                className="object-cover object-right-bottom w-full h-full"
              />
            </picture>
          )}

          {!isDesktop && (
            <picture className=" ">
              {/* <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066" media="    (min-width: 1920px) and (min-height: 600px)" />
                <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066 2x, /assets/images/landing/intro/intro-xxl.jpg?v=1628669066 1x" media="    (min-width: 1440px) and (min-height: 600px)">
                <source srcset="/assets/images/landing/intro/intro-xxxl.jpg?v=1628669066 2x, /assets/images/landing/intro/intro-xl.jpg?v=1628669066 1x" media="    (min-width: 1200px) and (min-height: 600px)">
                <source srcset="/assets/images/landing/intro/intro-xl.jpg?v=1628669066" media="    (min-width: 980px)">
                <source srcset="/assets/images/landing/intro/intro-md.jpg?v=1628669066" media="    (min-width: 568px) and (max-aspect-ratio: 13 / 9), only screen and (min-width: 668px) and (min-height: 416px), only screen and (min-width: 980px)">
                <source srcset="/assets/images/landing/intro/intro-sm.jpg?v=1628669066" media="    (min-width: 568px), (min-aspect-ratio: 13 / 9)"> */}
              <img
                alt={props.alt}
                src={
                  portraitImage == "undefined"
                    ? props.image
                    : props.imagePortrait
                }
                className="object-cover  object-center w-full h-full"
              />
            </picture>
          )}
        </div>
        {/* IMAGE÷\ */}

        <div className={`"flex container  "`}>
          <div className={`w-12/12  mx-auto mb-6  `}>{props.children}</div>
        </div>
      </div>
    </>
  );
}
