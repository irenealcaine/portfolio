import React, { useContext } from 'react'
import './BlogCard.scss'
import { useTranslation } from 'react-i18next';
import { NeonOnContext } from '../../Context/neonOnContext';
import { FaExternalLinkAlt } from 'react-icons/fa';

const BlogCard = () => {

  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <div className="blog-card">
      <h2>{t("blog.title")}</h2>
      <p>{t("blog.description")}</p>
      <p className={`button`}>
        <FaExternalLinkAlt className={`arow ${neonOn && "on"}`} />
      </p>
    </div>
  )
}

export default BlogCard
