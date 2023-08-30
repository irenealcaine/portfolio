import React, { useContext } from "react";
import "./Footer.scss";
import { NeonOnContext } from "../../Context/neonOnContext";
import { contact } from "../../data/AboutData";

const Footer = () => {
  const { neonOn } = useContext(NeonOnContext);

  return (
    <footer>
      <nav>

        {contact.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`icon ${item.color} ${neonOn && "on"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
