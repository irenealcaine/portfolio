import React, { useContext } from "react";
import { NeonOnContext } from "../../Context/neonOnContext";
import { useTranslation } from "react-i18next";
import "./ProjectsCard.scss";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { projects } from "../../data/PortfolioData";

const ProjectsCard = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  const shuffledProjects = [...projects];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(shuffledProjects);

  return (
    <div className="projects-card">
      <h2>{t("projects.title")}</h2>
      <p>{t("projects.description")}</p>
      {/* <div className="examples">
        {shuffledProjects.slice(1, 9).map((project) => (
          <img
            src={project.images.icon}
            className={`project-image ${neonOn && "on"}`}
            alt={project.es.title}
          />
        ))}
      </div> */}
      <p className={`button ${neonOn && "on"}`}>
        <span>{t("about.button")}</span>{" "}
        <MdKeyboardDoubleArrowRight className={`arow ${neonOn && "on"}`} />
      </p>
    </div>
  );
};

export default ProjectsCard;
