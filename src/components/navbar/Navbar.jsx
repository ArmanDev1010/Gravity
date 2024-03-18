import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-0 left-0 w-[75%] z-[99] h-[120px] flex items-center justify-center">
      <div className="absolute top-0 left-[5%] bg-white cursor-pointer">
        <img src={logo} alt="logo" className="w-[120px]" />
      </div>
      <ul className="flex justify-center items-center gap-7">
        {["about", "services", "portfolio", "contact"].map((text, key) => (
          <li
            key={key}
            onClick={() => linkClick(text)}
            className={`text-white big:text-lg text-[1.05rem] transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold`}
          >
            {t(`navbar.links.${text}`)}
          </li>
        ))}
        <li className="text-white big:text-lg text-[1.05rem] transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold">
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
