import React from 'react'
import { useTranslation } from 'react-i18next';

const ProjectsCard = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h2>{t("projects.title")}</h2>
      <p>{t("projects.description")}</p>
    </div>
  )
}

export default ProjectsCard
