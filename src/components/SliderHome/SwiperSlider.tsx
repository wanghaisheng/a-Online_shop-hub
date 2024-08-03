import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import SwiperElement from "./SwiperElement";


function SwiperSlider() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={25}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="17" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="18" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="4" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="2" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="3" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="6" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="7" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="8" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="1" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="20" />
        </SwiperSlide>
        <SwiperSlide className="flex h-auto w-auto flex-shrink-0 bg-white-smoke">
          <SwiperElement productId="16" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSlider;
