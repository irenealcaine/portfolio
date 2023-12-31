import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsDownload } from "react-icons/bs";

import MainLayout from "../../Layout/MainLayout/MainLayout";
import { NeonOnContext } from "../../Context/neonOnContext";
import { education, experience, contact } from "../../data/AboutData";
import TimelineItem from "../../Components/TimelineItem/TimelineItem";
import ContactItem from "../../Components/ContactItem/ContactItem";
import SpotifyCard from "../../Components/SpotifyCard/SpotifyCard";
import DiscordCard from "../../Components/DiscordCard/DiscordCard";
import MapsCard from "../../Components/MapsCard/MapsCard";
import BirthdayCard from "../../Components/BirthdayCard/BirthdayCard";

import { colors } from "../../Utils/Constants";

import "./About.scss";
import CV from "../../Assets/CV/CV_Irene_Alcaine.pdf";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { i18n, t } = useTranslation("global");

  const isSpanish = i18n.language === "es";

  const { neonOn } = useContext(NeonOnContext);

  const renderTimelineItems = (items) => {
    return items.toReversed().map((i, index) => (
      <TimelineItem
        key={index}
        item={i}
        index={index}
        isSpanish={isSpanish}
        colors={colors}
        neonOn={neonOn}
      />
    ));
  };

  return (
    <MainLayout>
      <div className="about">
        <h1>{t("aboutPage.title")}</h1>
        <p>{t("aboutPage.description")}</p>
        <div className="container">
          <div className="work">

            <h2>{t("aboutPage.education")}</h2>
            <p>{t("aboutPage.educationSubtitle")}</p>
            <ul className="timeline">{renderTimelineItems(education)}</ul>

            <h2>{t("aboutPage.experience")}</h2>
            <p>{t("aboutPage.experienceSubtitle")}</p>
            <ul className="timeline">{renderTimelineItems(experience)}</ul>

            <a
              className={`cv ${neonOn && "on"}`}
              href={CV}
              download="CV_Irene_Alcaine.pdf"
            >
              <p>
                {t("aboutPage.CV")}
                {"  "} <BsDownload />
              </p>
            </a>
          </div>
          <div className="personal">

            <h2>{t("aboutPage.contact")}</h2>
            <div className="contact">
              {contact.map((cont, index) => (
                <ContactItem
                  key={index}
                  index={index}
                  item={cont}
                  isSpanish={isSpanish}
                  color={cont.color}
                  neonOn={neonOn}
                />
              ))}
            </div>

            <div className="others">
              <div className={`maps ${neonOn && "on"}`}>
                <MapsCard />
              </div>
              <div className={`discord ${neonOn && "on"}`}>
                <DiscordCard />
              </div>
              <div className={`spotify ${neonOn && "on"}`}>
                <SpotifyCard />
              </div>
              <div className={`birthday ${neonOn && "on"}`}>
                <BirthdayCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
