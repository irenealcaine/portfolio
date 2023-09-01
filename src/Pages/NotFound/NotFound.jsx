import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const {t } = useTranslation("global");

    return (
        <MainLayout>
            <h1>{t("notFoundPage.title")}</h1>
            <h2>{t("notFoundPage.subtitle")}</h2>
            <p>{t("notFoundPage.list.header")}</p>
            <ul>
                {/* {for(i=1, i<3, i++){
                    <li><p>{t(`notFoundPage.list.option${i}`)}</p></li>
                }} */}

{[1, 2].map((i) => (
    <li key={i}>
      <p>{t(`notFoundPage.list.option${i}`)}</p>
    </li>
  ))}
                
                <li><p>{t("notFoundPage.list.option2")}</p></li>
            </ul>
        </MainLayout>
    
    )
}

export default NotFound