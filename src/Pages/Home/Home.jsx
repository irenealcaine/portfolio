import React, { useState } from 'react'
import "./Home.scss"
import Neon from '../../Layout/Neon/Neon'
import { AiOutlineMail, AiOutlinePoweroff, AiOutlineCodepen, AiOutlineWhatsApp } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { SlSocialLinkedin } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import AboutCard from '../../Components/AboutCard/AboutCard'
import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard'
import LanguageSelector from '../../Components/LanguageSelector/LanguageSelector'
// import { global } from "../../languages/global"

const Home = () => {

  const [isOn, setIsOn] = useState(false)
  const { i18n } = useTranslation("global");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <div id='grid'>
      <Neon to="/about" color={`pink ${isOn && "on"}`} id="about">
        <AboutCard />
      </Neon>

      <div className={`toggle ${!isOn && "toggleOn"}`} onClick={() => setIsOn(prevIsOn => !prevIsOn)}>
        <div className="switch"><AiOutlinePoweroff /></div>
      </div>

      <Neon onClick={toggleLanguage} color={`orange ${isOn && "on"}`} >
        <LanguageSelector />
      </Neon>

      <Neon color={`yellow ${isOn && "on"}`} >
        <FiGithub className={`icon ${isOn && "on"}`} />
      </Neon>

      <Neon to="/portfolio" color={`blue ${isOn && "on"}`} id="projects">
        <ProjectsCard />
      </Neon>

      <Neon color={`red ${isOn && "on"}`} >
        <AiOutlineMail className={`icon ${isOn && "on"}`} />
      </Neon>

      <Neon color={`lightBlue ${isOn && "on"}`} >
        <SlSocialLinkedin className={`icon ${isOn && "on"}`} />
      </Neon>

      <Neon color={`purple ${isOn && "on"}`} >
        <AiOutlineCodepen className={`icon ${isOn && "on"}`} />
      </Neon>

      <Neon color={`green ${isOn && "on"}`} >
        <AiOutlineWhatsApp className={`icon ${isOn && "on"}`} />
      </Neon>

    </div>
  )
}

export default Home
