import React, { useContext } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./NotFound.scss"
import { NeonOnContext } from "../../Context/neonOnContext";
import { Link } from "react-router-dom";


const NotFound = () => {
  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);


  return (
    <MainLayout>
      <div className="notFound">
        <h1>{t("notFoundPage.title")}</h1>
        <h2 className={neonOn && "on"}>{t("notFoundPage.subtitle")}</h2>
        <div className="message">
          <p>{t("notFoundPage.list.header")}</p>
          <ul>

            {[1, 2].map((i) => (
              <li key={i}>
                <p>{t(`notFoundPage.list.option${i}`)}</p>
              </li>
            ))}
            <Link to="/" className={neonOn && "on"} >irenealcainealvarez.es</Link>
          </ul>
        </div>
      </div>
    </MainLayout>

  )
}

export default NotFound
