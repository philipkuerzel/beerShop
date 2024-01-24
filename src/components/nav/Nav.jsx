import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
import homeBtn from "../../assets/img/homeBtn.png"

const Nav = () => {
  return (
    <>
        <nav>
            <Link className='homeBtn' to="/"><img src={homeBtn}/></Link>
        </nav>
    </>
  )
}

export default Nav