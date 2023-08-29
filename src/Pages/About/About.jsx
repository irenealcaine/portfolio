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
        <div className="container">
          <ul className="timeline">
            {experience.toReversed().map((exp, index) => {
              return i18n.language === "es" ? (
                <li
                  key={index}
                  className={`${
                    index % 2 !== 0
                      ? "timeline-block-right"
                      : "timeline-block-left"
                  }`}
                >
                  <div class="marker"></div>
                  <div className="timeline-panel">
                    <div className="timeline-header">
                      <h3>{exp.es.title}</h3>
                      <h4>{exp.en.ubication}</h4>
                    </div>

                    <div className="timeline-body">
                      <ul>
                        {exp.es.description.map((m, index) => (
                          <li key={index}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p>{exp.es.date}</p>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={index}>
                  <p>{exp.en.title}</p>
                  <p>{exp.en.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <h2>{t("aboutPage.education")}</h2>
        <h2>{t("aboutPage.contact")}</h2>
      </div>
    </MainLayout>
  );
};

export default About;
