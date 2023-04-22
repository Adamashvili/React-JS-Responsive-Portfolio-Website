import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer= () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              
              <p><FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/> Tbilisi, Georgia</p>
              
            </div>
            <div className="phone">
              <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            +995 591 41 28 37</h4>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            adamashvili.irakli8@gmail.com</h4>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>My name is Irakli Adamashvili. Front-END Web Developer, I`m working with React JS and Angular 15. I enjoy disguising new projects and design challenges</p>
            <div className="social">
            <a href="https://www.facebook.com/irakli.adamashvili" target="_blank"  rel="noreferrer" ><FaFacebook size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
            <a href="https://www.instagram.com/adamashvili.irakli/" target="_blank"  rel="noreferrer" ><FaInstagram size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
            <a href="https://github.com/Adamashvili" target="_blank" rel="noreferrer" ><FaGithub size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
            <a href="https://www.linkedin.com/in/irakli-adamashvili-54272923a/" target="_blank" rel="noreferrer" ><FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer

