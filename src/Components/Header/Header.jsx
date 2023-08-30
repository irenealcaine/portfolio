import React, { useContext } from "react";
import "./Header.scss";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NeonOnContext } from "../../Context/neonOnContext";

const Header = () => {
  const { i18n, t } = useTranslation("global");
  const { dispatch, neonOn } = useContext(NeonOnContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <header>
      <Link to={"/"} className="backButton">
        <IoChevronBackOutline />
      </Link>
      <nav>
        <div
          className={`icon orange ${neonOn && "on"}`}
          onClick={toggleLanguage}
        >
          {t("languageSelector")}
        </div>
        <div
          className={`icon red ${neonOn && "on"}`}
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          <AiOutlinePoweroff />
        </div>
      </nav>
    </header>
  );
};

export default Header;
