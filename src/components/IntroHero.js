import React from 'react'
import "./IntroHeroStyles.css"
import ImgIntro from "../assets/intro.jpg"
import { Link } from "react-router-dom"
const IntroHero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='hero-img'
            src={ImgIntro} alt='hero'/>
        </div>
        <div className='content'>
          <p>HI, I`M A FREELANCER</p>
          <h1>React & Angular Developer</h1>
          <div>
            <Link to="/project" 
             className='btn'>Project</Link>
            <Link to="/contact"
             className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default IntroHero