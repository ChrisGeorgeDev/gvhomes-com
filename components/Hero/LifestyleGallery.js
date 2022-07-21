import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// import { getServerSideProps } from "../../pagzes/communities";
const imageAnim = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const childrenAnim = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// Add more modules here if you need them
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function LifestyleGallery(props) {
  return (
    <>
      <motion.div
        className="h-screen relative"
        initial="hidden"
        whileInView={"enter"}
        transition={{ staggerChildren: 0.5 }}
      >
        <img
          className="absolute hidden pointer-events-all z-[50] right-0 bottom-0 h-screen"
          src="/img/svg/gv-watermark.svg"
        ></img>
        <motion.div
          className={`w-12/12 relative z-[2]  font-bold   `}
          variants={imageAnim}
          // initial="hidden"
          // whileInView={"enter"}
          transition={{ type: "easeIn", duration: 0.5 }}
        >
          <Swiper
            // direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1500}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // mousewheel={{releaseOnEdges:true}}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            // Some sample events you can experiment with
            // onSlideChange={() => console.log("Slide changed!")}
            // onSwiper={(swiper) => console.log("my swiper details", swiper)}
          >
            <SwiperSlide>
              <div className="!bg-[url('/img/hero/lf-1.jpg')] h-screen w-screen bg-[top_right_-350px] md:bg-center bg-cover"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!bg-[url('/img/hero/lf-2.jpg')] h-screen w-screen bg-[top_right_-350px] md:bg-center bg-cover"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!bg-[url('/img/hero/lf-3.jpg')] h-screen w-screen bg-[top_left_-600px] md:bg-center bg-cover"></div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        <div
          className={`"  bottom-0  flex flex-col justify-end top-0 right-0 left-0  absolute  z-[2]  "`}
        >
          <motion.div
            className={`w-12/12 relative z-[2]  font-bold ml-[20px] mb-[50px] lg:ml-[100px] lg:mb-[100px]  `}
            variants={childrenAnim}
            // initial="hidden"
            // whileInView={"enter"}
            transition={{ type: "easeIn", duration: 1.2 }}
          >
            {props.children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
