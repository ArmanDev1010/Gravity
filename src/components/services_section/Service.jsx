import React from "react";
import { useTranslation } from "react-i18next";

const Service = (props) => {
  const { t } = useTranslation();
  return (
    <li
      className="relative px-[5%] py-6 h-full cursor-pointer group
      transition-all duration-100 ease-out border-t-[1px] border-t-[rgba(255,255,255,.1)]"
    >
      <div className="relative z-[3]">
        <h3 className="text-lg mb-6">{t(`services.${props.service}.title`)}</h3>
        <p className="elip">{t(`services.${props.service}.paragraph`)}</p>
      </div>
      <div className="w-full h-full bg-black absolute top-0 left-0 z-[2] opacity-0 group-hover:opacity-50 transition-all duration-200 ease-out"></div>
      <div
        style={{
          backgroundImage: `url(/src/assets/services_imgs/${props.service}.jpg)`,
        }}
        className="absolute top-0 left-0 w-full h-full z-[1] opacity-0 bg-center bg-cover bg-no-repeat 
        group-hover:opacity-100 transition-all duration-200 ease-out"
      />
    </li>
  );
};

export default Service;
