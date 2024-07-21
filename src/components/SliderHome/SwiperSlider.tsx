import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import SwiperElement from "./SwiperElement";

// type SwiperProps = {
//   children: Element[];
//   slidesPerView: number;
//   spaceBetween: number;
//   freeMode: boolean;
//   modules: SwiperModule[];
//   className: string;
// };


function SwiperSlider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke ">
          <SwiperElement productId="17" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="18" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="16" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="2" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="3" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="6" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="7" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="8" />
        </SwiperSlide>
        <SwiperSlide className=" flex h-auto max-w-[300px] flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSlider;