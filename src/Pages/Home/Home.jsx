import React, { useContext, useEffect } from "react";
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
import BlogCard from "../../Components/BlogCard/BlogCard";
// import about from "../../Assets/Images/me.png";
// import { global } from "../../languages/global"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [isOn, setIsOn] = useState(false);
  const { i18n } = useTranslation("global");
  const { dispatch, neonOn } = useContext(NeonOnContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <div id="grid">
      <Neon
        to="/about"
        color={`pink ${neonOn && "on"}`}
        id="about"
      // bgImage={about}
      >
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

      <Neon
        color={`yellow ${neonOn && "on"}`}
        to={"https://github.com/irenealcaine"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <FiGithub className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon to="/portfolio" color={`blue ${neonOn && "on"}`} id="projects">
        <ProjectsCard />
      </Neon>



      <Neon
        color={`red ${neonOn && "on"}`}
        to={"mailto:irenealcainealvarez@gmail.com?Subject=Charlemos"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <AiOutlineMail className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon
        color={`lightBlue ${neonOn && "on"}`}
        to={"https://www.linkedin.com/in/irenealcaine/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <SlSocialLinkedin className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon
        color={`purple ${neonOn && "on"}`}
        to={"https://codepen.io/ialcaine"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <AiOutlineCodepen className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon
        color={`green ${neonOn && "on"}`}
        to={"https://api.whatsapp.com/send?phone=+346298821291&text=Hola"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <AiOutlineWhatsApp className={`icon ${neonOn && "on"}`} />
      </Neon>

      <Neon
        to={"https://poetic-twilight-7de85d.netlify.app/"}
        color={`orange ${neonOn && "on"}`}
        target={"_blank"}
        rel={"noopener noreferrer"}
        id='blog'
      >
        <BlogCard />
      </Neon>
    </div>
  );
};

export default Home;
