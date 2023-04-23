import React from 'react'
import Navbar from '../components/Navbar'
import Work from "../components/Work"
import Footer from '../components/footer'
import IntroHero from '../components/IntroHero'





const Home = () => {
  return (
    <div>
    <Navbar/>
    <IntroHero/>
    <Work/>
    <Footer/>

    </div>
  )
}

export default Home