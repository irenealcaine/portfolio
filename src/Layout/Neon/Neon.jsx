import React from 'react'
import "./Neon.scss"
import { Link } from 'react-router-dom'

const Neon = ({ color, onClick, children, id, to }) => {
  return (
    <Link to={to} id={id} onClick={onClick} className={`neon ${color}`}>{children}</Link>
  )
}

export default Neon
