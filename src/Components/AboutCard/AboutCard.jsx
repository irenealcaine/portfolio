import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import me from "../../Assets/Images/me.png";
import { NeonOnContext } from "../../Context/neonOnContext";
import "./AboutCard.scss";
import ReactMarkdown from 'react-markdown';

const AboutCard = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <div className="about-card">
      <h1>Irene Alcaine</h1>
      <h2>Frontend developer</h2>
      {/* <p>{global[lang].about}</p> */}
      <ReactMarkdown className="presentation">
        {t("about.presentation")}
      </ReactMarkdown>
      <p>{t("about.button")}</p>
      <img
        src={me}
        // src="https://agcnwo.com/wp-content/uploads/2020/09/avatar-placeholder.png"
        alt="me"
        className={neonOn && "on"}
      />
    </div>
  );
};

export default AboutCard;
