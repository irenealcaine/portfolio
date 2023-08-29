import React, { useContext } from "react";
import "./Header.scss";
import { IoChevronBackOutline } from "react-icons/io5";
import {
  AiOutlineMail,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NeonOnContext } from "../../Context/neonOnContext";

const Header = () => {
  const { i18n, t } = useTranslation("global");
  const { dispatch } = useContext(NeonOnContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <header>
      <Link to={"/"} className="backButton">
        <IoChevronBackOutline />
      </Link>
      <nav>
        <div onClick={toggleLanguage}>{t("languageSelector")}</div>
        <div className="icon" onClick={() => dispatch({ type: "TOGGLE" })}>
          <AiOutlinePoweroff />
        </div>
        {/* <div className="icon">
          <AiOutlineCodepen />
        </div>
        <div className="icon">
          <FiGithub />
        </div>
        <div className="icon">
          <SlSocialLinkedin />
        </div> */}
        <div className="icon">
          <AiOutlineMail />
        </div>
      </nav>
    </header>
  );
};

export default Header;
