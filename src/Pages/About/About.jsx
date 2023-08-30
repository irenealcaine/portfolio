import React, { useContext } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./About.scss";
import { education, experience, contact } from "../../data/AboutData";
import { NeonOnContext } from "../../Context/neonOnContext";
import TimelineItem from "../../Components/TimelineItem/TimelineItem";
import ContactItem from "../../Components/ContactItem/ContactItem";

const About = () => {
  const { i18n, t } = useTranslation("global");
  console.log(i18n.language);

  const isSpanish = i18n.language === "es";

  const colors = [
    "blue",
    "green",
    "yellow",
    "lightBlue",
    "orange",
    "red",
    "purple",
  ];

  const { neonOn } = useContext(NeonOnContext);

  return (
    <MainLayout>
      <div className="about">
        <h1>{t("aboutPage.title")}</h1>
        <p>{t("aboutPage.description")}</p>

        <h2>{t("aboutPage.experience")}</h2>
        <ul className="timeline">
          {experience.toReversed().map((exp, index) => (
            <TimelineItem
              key={index}
              item={exp}
              index={index}
              isSpanish={isSpanish}
              colors={colors}
              neonOn={neonOn}
            />
          ))}
        </ul>

        <h2>{t("aboutPage.education")}</h2>
        <ul className="timeline">
          {education.toReversed().map((edu, index) => (
            <TimelineItem
              key={index}
              item={edu}
              index={index}
              isSpanish={isSpanish}
              colors={colors}
              neonOn={neonOn}
            />
          ))}
        </ul>

        <h2>{t("aboutPage.contact")}</h2>
        <div className="contact">
          {contact.map((cont, index) => (
            <ContactItem
              key={index}
              index={index}
              item={cont}
              isSpanish={isSpanish}
              colors={colors}
              neonOn={neonOn}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
