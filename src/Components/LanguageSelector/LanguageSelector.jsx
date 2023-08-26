import React from 'react'
import { useTranslation } from 'react-i18next';
import "./languageSelector.scss"

const LanguageSelector = () => {
  const { i18n, t } = useTranslation("global");

  return (
    <div className='languageSelector'>
      <h1>{t('languageSelector')}</h1>
      <p> <span style={{ fontWeight: i18n.language === 'en' && 'bold' }}>EN</span>/<span style={{ fontWeight: i18n.language === 'es' && 'bold' }}>ES</span></p>
    </div>
  )
}

export default LanguageSelector
