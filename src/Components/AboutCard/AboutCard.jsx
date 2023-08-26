import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutCard = () => {

  const { t } = useTranslation("global");

  return (
    <div>

      <h1>Irene Alcaine</h1>
      <h2>Frontend developer</h2>
      {/* <p>{global[lang].about}</p> */}
      <p>{t('about.presentation')}</p>
      <p>{t('about.button')}</p>

    </div>
  )
}

export default AboutCard
