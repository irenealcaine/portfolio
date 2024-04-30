import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import "./languageSelector.scss"
import Neon from '../../Layout/Neon/Neon';
import { NeonOnContext } from "../../Context/neonOnContext";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation("global");
  const { dispatch, neonOn } = useContext(NeonOnContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <Neon onClick={toggleLanguage} color={`orange ${neonOn && "on"}`}>
      <div className='languageSelector'>
        <h1>{t('languageSelector')}</h1>
        <p> <span style={{ fontWeight: i18n.language === 'en' && 'bold' }}>EN</span>/<span style={{ fontWeight: i18n.language === 'es' && 'bold' }}>ES</span></p>
      </div>
    </Neon>
  )
}

export default LanguageSelector
