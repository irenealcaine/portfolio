import React from 'react'
import "./Neon.scss"
import { Link } from 'react-router-dom'

const Neon = ({ color, children, id, to, target, rel, onClick, bgImage }) => {
  return (
    <Link
      to={to}
      id={id}
      className={`neon ${color}`}
      target={target}
      rel={rel}
      onClick={onClick}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}
    >
      {children}
    </Link>
  )
}

export default Neon
