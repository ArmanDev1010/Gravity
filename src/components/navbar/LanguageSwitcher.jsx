import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="cursor-pointer bg-transparent text-white"
    >
      <option value="en" className="text-black">ENG</option>
      <option value="am" className="text-black">ՀԱՅ</option>
      <option value="ru" className="text-black">РУС</option>
    </select>
  );
};

export default LanguageSwitcher;
