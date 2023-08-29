import React from 'react'
import { AiOutlineMail, AiOutlineCodepen } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { SlSocialLinkedin } from "react-icons/sl";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>

      <nav>
        <div className='icon'><AiOutlineCodepen /></div>
        <div className='icon'><FiGithub /></div>
        <div className='icon'><SlSocialLinkedin /></div>
        <div className='icon'><AiOutlineMail /></div>
      </nav>
    </footer>
  )
}

export default Footer
