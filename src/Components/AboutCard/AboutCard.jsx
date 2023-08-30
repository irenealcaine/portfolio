import React from "react";
import { useTranslation } from "react-i18next";
import me from "../../Assets/Images/me.png";
import "./AboutCard.scss";

const AboutCard = () => {
  const { t } = useTranslation("global");

  return (
    <div className="about-card">
      <h1>Irene Alcaine</h1>
      <h2>Frontend developer</h2>
      {/* <p>{global[lang].about}</p> */}
      <p>{t("about.presentation")}</p>
      <p>{t("about.button")}</p>
      <img
        src={me}
        // src="https://agcnwo.com/wp-content/uploads/2020/09/avatar-placeholder.png"
        alt="me"
      />
    </div>
  );
};

export default AboutCard;
