import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Thumb from "./Thumb";

import SwiperMain from "./SwiperMain";

const ThumbsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="h-[83%]"></div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="mySwiper2 absolute top-0 left-0 !h-full"
      >
        <SwiperSlide>
          <SwiperMain company="conversebank" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="ardshinbank" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="hsbc" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="sketchers" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="pull&bear" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="centralbank" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="jysk" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="cocacolalab" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="fastbank" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="bershka" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="technamin" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMain company="sportmaster" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper !bg-black w-[75%]"
      >
        <SwiperSlide>
          <Thumb company="conversebank" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="ardshinbank" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="hsbc" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="sketchers" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="pull&bear" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="centralbank" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="jysk" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="cocacolalab" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="fastbank" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="bershka" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="technamin" />
        </SwiperSlide>
        <SwiperSlide>
          <Thumb company="sportmaster" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
