import React, { useContext, useState } from "react";
import "./Home.scss";
import Neon from "../../Layout/Neon/Neon";
import {
  AiOutlineMail,
  AiOutlinePoweroff,
  AiOutlineCodepen,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import AboutCard from "../../Components/AboutCard/AboutCard";
import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";
import LanguageSelector from "../../Components/LanguageSelector/LanguageSelector";
import { NeonOnContext } from "../../Context/neonOnContext";
// import { global } from "../../languages/global"

const Home = () => {
  // const [isOn, setIsOn] = useState(false);
  const { i18n } = useTranslation("global");
  const { dispatch, neonOn } = useContext(NeonOnContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <div id="grid">
      <Neon to="/about" color={`pink ${neonOn && "on"}`} id="about">
        <AboutCard />
      </Neon>

      <div
        className={`toggle ${!neonOn && "toggleOn"}`}
        // onClick={() => setIsOn((prevIsOn) => !prevIsOn)}
        onClick={() => dispatch({ type: "TOGGLE" })}
      >
        <div className="switch">
          <AiOutlinePoweroff />
        </div>
      </div>

      <Neon onClick={toggleLanguage} color={`orange ${neonOn && "on"}`}>
        <LanguageSelector />
      </Neon>

      <Neon color={`yellow ${neonOn && "on"}`}>
        <FiGithub className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon to="/portfolio" color={`blue ${neonOn && "on"}`} id="projects">
        <ProjectsCard />
      </Neon>

      <Neon color={`red ${neonOn && "on"}`}>
        <AiOutlineMail className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon color={`lightBlue ${neonOn && "on"}`}>
        <SlSocialLinkedin className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon color={`purple ${neonOn && "on"}`}>
        <AiOutlineCodepen className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon color={`green ${neonOn && "on"}`}>
        <AiOutlineWhatsApp className={`icon ${neonOn && "on"}`} />
      </Neon>
    </div>
  );
};

export default Home;
