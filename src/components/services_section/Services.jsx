import React from "react";
import Service from "./Service";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col text-white h-full overflow-hidden">
      <h2 className="text-[1.5rem] capitalize px-[5%] min-h-[120px] flex items-center">
        {t("services.service")}
      </h2>
      <ul className="h-full flex flex-col">
        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          autoplay={{
            delay: 3100,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiperr"
        >
          <SwiperSlide>
            <Service service="construction" />
          </SwiperSlide>
          <SwiperSlide>
            <Service service="projectm" />
          </SwiperSlide>
          <SwiperSlide>
            <Service service="architectuald" />
          </SwiperSlide>
          <SwiperSlide>
            <Service service="propertyd" />
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
};

export default Services;
