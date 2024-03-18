import React from "react";
import Services from "../services_section/Services";

import arrow from "../../assets/arrow.png";
import arrowhite from "../../assets/arrow_white.png";
import { useTranslation } from "react-i18next";

const Right = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full w-[25%] absolute top-0 right-0 z-[99]">
      <div className="relative glass bg-black w-full h-[83%]">
        <Services />
      </div>
      <div className="bg-white w-full h-[17%]">
        <a
          href=""
          target="_blank"
          className="relative bg-white text-black inline-flex items-center w-full h-full
              justify-center overflow-hidden transition duration-300 ease-out 
              group"
        >
          <span
            className="absolute inset-0 flex items-center justify-center w-full h-full 
              text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease"
          >
            <img
              src={arrowhite}
              alt="arrow"
              className="ml-4 w-[96px] rotate-[180deg]"
            />
          </span>
          <span
            className="absolute text-3xl font-[400] flex items-center justify-center w-full h-full transition-all 
              duration-300 transform group-hover:translate-x-full ease max-big:text-[1.6rem]"
          >
            {t("right.see_projects")}
            <img
              src={arrow}
              alt="arrow"
              className="ml-4 w-[76px] rotate-[180deg]"
            />
          </span>
          <span className="relative invisible">{t("right.see_projects")}</span>
        </a>
      </div>
    </div>
  );
};

export default Right;
