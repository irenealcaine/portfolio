import React, { useContext } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./About.scss";
import { education, experience } from "../../data/AboutData";
import { NeonOnContext } from "../../Context/neonOnContext";
import TimelineItem from "../../Components/TimelineItem/TimelineItem";

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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          deserunt autem nemo quasi commodi odio obcaecati. Labore ut tenetur,
          commodi expedita assumenda cupiditate minus beatae ad unde vero cumque
          sed! Tempore aspernatur eligendi consequatur illo voluptates iusto
          facere repudiandae reprehenderit expedita minus cupiditate, debitis
          delectus vel pariatur error numquam nostrum voluptatem quos quidem
          quod sunt sed? Possimus aut itaque aspernatur?
        </p>

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
      </div>
    </MainLayout>
  );
};

export default About;
