import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <>
        <nav>
            <Link to="/"><button>🍺</button></Link>
        </nav>
    </>
  )
}

export default Nav