import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import HeroImg2 from '../components/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "ABOUT." 
                text = "I`m a Front-END Developer"/>
      <Footer/>
    </div>
  )
}

export default About