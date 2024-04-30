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
import AboutCard from "../../Components/AboutCard/AboutCard";
import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";
import LanguageSelector from "../../Components/LanguageSelector/LanguageSelector";
import { NeonOnContext } from "../../Context/neonOnContext";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { dispatch, neonOn } = useContext(NeonOnContext);

  return (
    <div id="grid">

      <AboutCard />

      <div
        className={`toggle ${!neonOn && "toggleOn"}`}
        onClick={() => dispatch({ type: "TOGGLE" })}
      >
        <div className="switch">
          <AiOutlinePoweroff />
        </div>
      </div>

      <LanguageSelector />

      <Neon
        color={`yellow ${neonOn && "on"}`}
        to={"https://github.com/irenealcaine"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <FiGithub className={`icon ${neonOn && "on"}`} />
      </Neon>

      <ProjectsCard />

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

      <BlogCard />

    </div>
  );
};

export default Home;
