import "./Modal.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { TbExternalLink } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { projects } from "../../data/PortfolioData";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Modal = ({ selectedProject, setSelectedProject }) => {
  const { i18n, t } = useTranslation("global");

  const handleCloseClick = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id,
    );
    if (currentIndex >= 0 && currentIndex < projects.length - 1) {
      const nextProject = projects[currentIndex + 1];
      setSelectedProject(nextProject);
    }
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id,
    );
    if (currentIndex >= 1 && currentIndex < projects.length) {
      const prevProject = projects[currentIndex - 1];
      setSelectedProject(prevProject);
    }
  };

  return (
    <div className="backdrop">
      <p onClick={handleCloseClick} className="closeButton">
        <IoIosCloseCircleOutline />
      </p>

      <p onClick={handleNext} className="nextButton">
        <BiRightArrowCircle />
      </p>

      <p onClick={handlePrev} className="prevButton">
        <BiLeftArrowCircle />
      </p>

      <img
        className="smallPic"
        src={selectedProject.images.icon}
        alt="small pic"
      />
      <img
        className="enlargedPic"
        src={selectedProject.images.main}
        alt="enlarged pic"
      />

      <div className="links">
        <a
          className="link"
          href={selectedProject.web}
          target="_blank"
          rel="noreferrer"
        >
          <span>{t("portfolioPage.buttons.web")}</span> <TbExternalLink />
        </a>
        {selectedProject.github && (
          <a
            className="link"
            href={selectedProject.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t("portfolioPage.buttons.github")}</span> <FiGithub />
          </a>
        )}
      </div>

      {i18n.language === "es" ? (
        <div className="content">
          <h2>{selectedProject.es.title}</h2>
          {/* <p>{selectedProject.es.description}</p> */}
          <Markdown remarkPlugins={[remarkGfm]}>
            {selectedProject.es.description}
          </Markdown>
        </div>
      ) : (
        <div className="content">
          <h2>{selectedProject.en.title}</h2>
          <p>{selectedProject.en.description}</p>
        </div>
      )}

      <div className="techs">
        {selectedProject.tech.map((tech, index) => (
          <p key={index} className="tech">
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Modal;
