import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
// import me from "../../Assets/Images/me.png";
import { NeonOnContext } from "../../Context/neonOnContext";
import "./AboutCard.scss";
import ReactMarkdown from "react-markdown";
import { FaExternalLinkAlt } from "react-icons/fa";

const AboutCard = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <div className="about-card">
      <h1>Irene Alcaine</h1>
      <h2>Frontend developer</h2>
      <ReactMarkdown className="presentation">
        {t("about.presentation")}
      </ReactMarkdown>
      <p className={`button`}>
        <FaExternalLinkAlt className={`arow ${neonOn && "on"}`} />
      </p>
    </div>
  );
};

export default AboutCard;
