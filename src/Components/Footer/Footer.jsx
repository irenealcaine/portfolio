import React, { useContext } from "react";
import { AiOutlineMail, AiOutlineCodepen } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "./Footer.scss";
import { NeonOnContext } from "../../Context/neonOnContext";

const Footer = () => {
  const { neonOn } = useContext(NeonOnContext);

  return (
    <footer>
      <nav>
        <div className={`icon purple ${neonOn && "on"}`}>
          <AiOutlineCodepen />
        </div>
        <div className={`icon yellow ${neonOn && "on"}`}>
          <FiGithub />
        </div>
        <div className={`icon lightBlue ${neonOn && "on"}`}>
          <SlSocialLinkedin />
        </div>
        <div className={`icon red ${neonOn && "on"}`}>
          <AiOutlineMail />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
