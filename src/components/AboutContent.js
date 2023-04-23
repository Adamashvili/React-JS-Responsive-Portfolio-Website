import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import reactlogo from "../assets/reactlogo.jpg"
import angularlogo from "../assets/angularlogo.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I`m a React and Angular Front-END Developer. i create responsive 
                secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactlogo} alt="."/>
                </div>
                <div className="img-stack bottom">
                    <img src={angularlogo} alt="."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent