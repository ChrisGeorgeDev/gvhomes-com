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



      <div className="h-[100vh] relative bg-black overflow-hidden  bg-blue-ggDark flex flex-col justify-end  "
      >
        {/* IMAGE÷\ */}
        {/* <div className={`${styles.bgWrp} flex justify-center `}> */}
        
         {isDesktop && (
            // <picture className=" ">
       

            <img
            alt={props.alt}
            src={props.image}
            priority="true"
            className="object-cover absolute z-[1] object-center  w-full h-full"
            />
          )}

          {!isDesktop && (
                     <img
                alt={props.alt}
                // src={
                //   portraitImage == "undefined"
                //     ? props.image
                //     : props.imagePortrait
                // }
                src={props.image}

                className="object-cover absolute z-[1]  w-full h-full"
              />
          )}

        <div className={`"flex container relative z-[4] ${styles.light} "`}>
          <div className={`w-12/12 relative z-[2]  mx-auto mb-20  `}>{props.children}</div>
        </div>

      </div>
      {/* </div> */}
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
