import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import HeroImg2 from '../components/HeroImg2'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "PROJECTS."text="Some of my recent works"/>
      <Footer/>
    </div>
  )
}

export default Project