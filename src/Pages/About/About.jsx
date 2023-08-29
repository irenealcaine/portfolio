import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./About.scss";
import { experience } from "../../data/AboutData";

const About = () => {
  const { i18n, t } = useTranslation("global");
  console.log(i18n.language);

  return (
    <MainLayout>
      <div className="about">
        <h1>{t("aboutPage.title")}</h1>
        {/* <h2>{t("aboutPage.skills")}</h2> */}
        <h2>{t("aboutPage.experience")}</h2>
        <ul>
          {experience.map((exp, index) => (
            <li>{exp.en.title}</li>
          ))}
        </ul>
        <h2>{t("aboutPage.education")}</h2>
        <h2>{t("aboutPage.contact")}</h2>
      </div>
    </MainLayout>
  );
};

export default About;
