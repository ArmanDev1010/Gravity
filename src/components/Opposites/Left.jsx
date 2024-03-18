import React from "react";
import ThumbsGallery from "../ThumbGallery/ThumbsGallery";
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const Left = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gray-500 h-full w-full overflow-hidden">
      <Navbar />
      <div className="relative z-[4] text-white h-[90%] flex flex-col justify-center pl-[3.6%] pointer-events-none w-[75%]">
        <h2
          className={`${
            localStorage.getItem("language") !== "en"
              ? "text-[65px] !leading-[0.7] max-big:mb-10"
              : "text-[85px] !leading-[0.55] max-big:mb-9"
          } big:text-8xl tracking-[-0.2rem] font-[400] mb-12`}
          dangerouslySetInnerHTML={{
            __html: t("hero.title"),
          }}
        ></h2>
        <p className="text-2xl">{t("hero.paragraph")}</p>
      </div>
      <ThumbsGallery />
    </div>
  );
};

export default Left;
