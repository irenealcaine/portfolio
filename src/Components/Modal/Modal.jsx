import "./Modal.scss";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useTranslation } from 'react-i18next';


const Modal = ({ selectedProject, setSelectedProject }) => {
  const { i18n, t } = useTranslation("global");


  const handleCloseClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="backdrop">
      <p onClick={handleCloseClick} className="closeButton"> <IoIosCloseCircleOutline /> </p >
      <img src={selectedProject.images.main} alt="enlarged pic" />
      {i18n.language === "es" ?
        (
          <div>
            <h2>{selectedProject.es.title}</h2>
            <p>{selectedProject.es.description}</p>
          </div>
        )
        :
        (
          <div>
            <h2>{selectedProject.en.title}</h2>
            <p>{selectedProject.en.description}</p>
          </div>
        )}
      {/* <h2>{i18n.language === "es" ? selectedProject.es.title : selectedProject.en.title}</h2>
      <p>{i18n.language === "es" ? selectedProject.es.description : selectedProject.en.description}</p> */}
      {selectedProject.tech.map((tech, index) => (
        <p>{tech}</p>
      ))}
      <a href={selectedProject.web}>{t("portfolioPage.buttons.web")}</a>
      <a href={selectedProject.github}>{t("portfolioPage.buttons.github")}</a>
    </div >
  );
};

export default Modal;
