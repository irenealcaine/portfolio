import React from 'react'
import "./Neon.scss"
import { Link } from 'react-router-dom'

const Neon = ({ color, children, id, to, target, rel, onClick }) => {
  return (
    <Link
      to={to}
      id={id}
      className={`neon ${color}`}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Neon
