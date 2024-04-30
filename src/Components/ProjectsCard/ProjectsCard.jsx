import React, { useContext } from "react";
import { NeonOnContext } from "../../Context/neonOnContext";
import { useTranslation } from "react-i18next";
import "./ProjectsCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import Neon from "../../Layout/Neon/Neon";

const ProjectsCard = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <Neon to="/portfolio" color={`blue ${neonOn && "on"}`} id="projects">
      <div className="projects-card">
        <h2>{t("projects.title")}</h2>
        <p>{t("projects.description")}</p>

        <p className={`button`}>
          <FaExternalLinkAlt className={`arow ${neonOn && "on"}`} />
        </p>
      </div>
    </Neon>
  );
};

export default ProjectsCard;
