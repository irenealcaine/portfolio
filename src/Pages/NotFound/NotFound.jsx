import React, { useContext} from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import "./NotFound.scss"
import { NeonOnContext } from "../../Context/neonOnContext";


const NotFound = () => {
  const {t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);


    return (
        <MainLayout>
<div className="notFound">
            <h1>{t("notFoundPage.title")}</h1>
            <h2 className={neonOn && "on"}>{t("notFoundPage.subtitle")}</h2>
            <p>{t("notFoundPage.list.header")}</p>
            <ul>

                {[1, 2].map((i) => (
                  <li key={i}>
                    <p>{t(`notFoundPage.list.option${i}`)}</p>
                  </li>
                ))}
                
            </ul>
</div>
        </MainLayout>
    
    )
}

export default NotFound