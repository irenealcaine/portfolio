import React, { useContext } from "react";
import { NeonOnContext } from "../../Context/neonOnContext";
import { useTranslation } from "react-i18next";
import "./ProjectsCard.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { projects } from "../../data/PortfolioData";

const ProjectsCard = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <div className="projects-card">
      <h2>{t("projects.title")}</h2>
      <p>{t("projects.description")}</p>
      <div className="examples">
        {projects.slice(1, 5).map((project) => (
          <img
            src={project.images.icon}
            className={`project-image ${neonOn && "on"}`}
            alt={project.es.title}
          />
        ))}
      </div>
      <p className="button">
        <span>{t("about.button")}</span>{" "}
        <MdKeyboardDoubleArrowRight className={`arow ${neonOn && "on"}`} />
      </p>
    </div>
  );
};

export default ProjectsCard;
