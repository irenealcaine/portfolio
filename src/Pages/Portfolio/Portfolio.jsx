import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { projects } from "../../data/PortfolioData";
import { useTranslation } from "react-i18next";
import "./Portfolio.scss";
import Modal from "../../Components/Modal/Modal";
import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
// import { TbWorldWww } from "react-icons/tb";
// import { FiGithub } from "react-icons/fi";

const Portfolio = () => {
  const { i18n, t } = useTranslation("global");
  const [selectedProject, setSelectedProject] = useState(null);

  // const selectProject = () => {
  //   i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  // };

  const filterOptions = [
    { text: "Todos", value: "all" },

    { icon: <BiLogoJavascript />, value: "JavaScript" },
    { icon: <FaReact />, value: "ReactJS" },
    { icon: <FaVuejs />, value: "VueJS" },

    { icon: <BiLogoTailwindCss />, value: "TailwindCSS" },
    { icon: <SiMui />, value: "MaterialUI" },
    { icon: <FaSass />, value: "Sass" },
    { icon: <RiBootstrapLine />, value: "Bootstrap" },

    { icon: <BiLogoFirebase />, value: "Firebase" },
  ];

  const renderProject = (project) => (
    <div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="project"
    >
      <h3>{i18n.language === "es" ? project.es.title : project.en.title}</h3>
      <img src={project.images.icon} alt={`${project.en.title} icon`} />

      <div className="techs">
        {project.tech.map((tech, index) => {
          const matchingOption = filterOptions.find(
            (option) => option.value === tech
          );
          if (matchingOption) {
            return <div key={index}>{matchingOption.icon}</div>;
          } else {
            return <p key={index}>{tech}</p>;
          }
        })}
      </div>

      {/* <div className="links">
        <a href={project.web}>
          <TbWorldWww />
        </a>
        <a href={project.github}>
          <FiGithub />
        </a>
      </div> */}
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
  // projects
  //   .filter(project => project.category === category && (filter === "all" ? project.tech : project.tech.includes(filter)))
  //   .map(renderProject);

  return (
    <div>
      <MainLayout>
        <h1>{t("portfolioPage.title")}</h1>
        <div className="selector">
          {filterOptions.map((option) => {
            return option.icon ? (
              <p
                onClick={() => handleFilterChange(option.value)}
                className={option.value === filter.value ? "selected" : ""}
              >
                {option.icon}
                {console.log(option.value, filter.value)}
              </p>
            ) : (
              <p onClick={() => handleFilterChange(option.value)}>
                {option.text}
              </p>
            );
          })}
        </div>
        <h2>{t("portfolioPage.webs")}</h2>
        <div className="projects">{renderProjectsByCategory("web")}</div>
        <h2>{t("portfolioPage.projects")}</h2>
        <div className="projects">{renderProjectsByCategory("project")}</div>
        {selectedProject && (
          <Modal
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </MainLayout>
    </div>
  );
};

export default Portfolio;
