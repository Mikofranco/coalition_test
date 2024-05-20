import React from 'react'
import NavBar from '../../components/NavBar'
import HeroSection from '../../components/landingpage/HeroSection'
import AboutSection from '../../components/landingpage/AboutSection'
import WhyJoinSection from '../../components/landingpage/WhyJoinSection'
import OwnerInfo from '../../components/landingpage/OwnerInfo'
import Fifthsection from '../../components/landingpage/Fifthsection'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection />
      <AboutSection/>
      <WhyJoinSection/>
      <OwnerInfo/>
      <Fifthsection/>
      <Footer/>
    </div>
  )
}

export default LandingPage