import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./About.scss";
import { education, experience } from "../../data/AboutData";

const About = () => {
  const { i18n, t } = useTranslation("global");
  console.log(i18n.language);

  const isSpanish = i18n.language === "es";

  return (
    <MainLayout>
      <div className="about">
        <h1>{t("aboutPage.title")}</h1>
        <p>Blablalba</p>
        <h2>{t("aboutPage.experience")}</h2>
        <div className="container">
          <ul className="timeline">
            {experience.toReversed().map((exp, index) => {
              const expInfo = isSpanish ? exp.es : exp.en;

              return (
                <li
                  key={index}
                  className={`timeline-block-${
                    index % 2 !== 0 ? "right" : "left"
                  }`}
                >
                  <div className="marker"></div>
                  <div className="timeline-panel">
                    <div className="timeline-header">
                      <h3>{expInfo.title}</h3>
                      <p>
                        <span>{expInfo.company}</span> | {expInfo.ubication}
                      </p>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        {expInfo.description.map((desc, descIndex) => (
                          <li key={descIndex}>
                            <p>{desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p>{expInfo.date}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <h2>{t("aboutPage.education")}</h2>
        <div className="container">
          <ul className="timeline">
            {education.toReversed().map((edu, index) => {
              const eduInfo = isSpanish ? edu.es : edu.en;

              return (
                <li
                  key={index}
                  className={`timeline-block-${
                    index % 2 !== 0 ? "right" : "left"
                  }`}
                >
                  <div className="marker"></div>
                  <div className="timeline-panel">
                    <div className="timeline-header">
                      <h3>{eduInfo.title}</h3>
                      <p>
                        <span>{eduInfo.company}</span> | {eduInfo.ubication}
                      </p>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        {eduInfo.description.map((desc, descIndex) => (
                          <li key={descIndex}>
                            <p>{desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-footer">
                      <p>{eduInfo.date}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <h2>{t("aboutPage.contact")}</h2>
      </div>
    </MainLayout>
  );
};

export default About;
