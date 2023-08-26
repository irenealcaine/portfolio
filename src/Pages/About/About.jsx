import React from 'react'
import MainLayout from '../../Layout/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { i18n, t } = useTranslation("global");
  console.log(i18n.language)

  return (
    <div>
      <MainLayout>
        {t('aboutPage.title')}
      </MainLayout>
    </div>
  )
}

export default About
