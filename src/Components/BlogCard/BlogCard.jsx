import React, { useContext } from 'react'
import './BlogCard.scss'
import { useTranslation } from 'react-i18next';
import { NeonOnContext } from '../../Context/neonOnContext';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Neon from "../../Layout/Neon/Neon";

const BlogCard = () => {

  const { t } = useTranslation("global");
  const { neonOn } = useContext(NeonOnContext);

  return (
    <Neon
      to={"https://poetic-twilight-7de85d.netlify.app/"}
      color={`orange ${neonOn && "on"}`}
      target={"_blank"}
      rel={"noopener noreferrer"}
      id='blog'
    >
      <div className="blog-card">
        <h2>{t("blog.title")}</h2>
        <p>{t("blog.description")}</p>
        <p className={`button`}>
          <FaExternalLinkAlt className={`arow ${neonOn && "on"}`} />
        </p>
      </div>
    </Neon>
  )
}

export default BlogCard
