import React, { useContext, useState, useEffect } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { projects } from "../../data/PortfolioData";
import { useTranslation } from "react-i18next";
import "./Portfolio.scss";
import Modal from "../../Components/Modal/Modal";

import { NeonOnContext } from "../../Context/neonOnContext";
import { colors, filterOptions } from "../../Utils/Constants";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { i18n, t } = useTranslation("global");
  const [selectedProject, setSelectedProject] = useState(null);
  const { neonOn } = useContext(NeonOnContext);

  const renderProject = (project) => (
    <div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className={`project ${colors[Math.floor(Math.random() * colors.length)]
        } ${neonOn && "on"}`}
    >
      <div className="cover"></div>
      <h3 className="title">{i18n.language === "es" ? project.es.title : project.en.title}</h3>
      <img className="favicon" src={project.images.icon} alt={`${project.en.title} icon`} />

      <div className="techs">
        {project.tech.map((tech, index) => {
          const matchingOption = filterOptions.find(
            (option) => option.value === tech
          );
          if (matchingOption) {
            return (
              <div key={index} className="tech">
                {matchingOption.icon}
              </div>
            );
          } else {
            return <p key={index}>{tech}</p>;
          }
        })}
      </div>

    </div>
  );

  const [filter, setFilter] = useState("all");
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const renderProjectsByCategory = (category) => {
    const filteredProjects = projects.filter(
      (project) =>
        project.category === category &&
        (filter === "all" ? project.tech : project.tech.includes(filter))
    );

    if (filteredProjects.length === 0) {
      return "No se encontraron proyectos que coincidan con la búsqueda.";
    }

    return filteredProjects.map(renderProject);
  };

  return (
    <MainLayout>
      <div className="portfolio">
        <h1>{t("portfolioPage.title")}</h1>

        <div className="selector">
          {filterOptions.map((option) => {
            return option.icon ? (
              <p
                onClick={() => handleFilterChange(option.value)}
                className={option.value === filter ? "selected" : ""}
              >
                {option.icon}
              </p>
            ) : (
              <p
                onClick={() => handleFilterChange(option.value)}
                className={option.value === filter ? "selected" : ""}
              >
                {t("portfolioPage.selector")}
              </p>
            );
          })}
        </div>

        <h2>{t("portfolioPage.webs")}</h2>
        <div className="projects">{renderProjectsByCategory("web")}</div>

        <h2>{t("portfolioPage.projects")}</h2>
        <div className="projects">{renderProjectsByCategory("project")}</div>

        {selectedProject && (
          <div>
            <Modal
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />

            <div className="background"></div>
          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default Portfolio;
