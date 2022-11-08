import React from 'react'
import LandingPageHeader from '../Header/LandingPageHeader'

import img_hero_1 from '../../assets/img_hero_1.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div id='hero-main'>
      <div className="nav-bar-comp">
        <LandingPageHeader />
      </div>
      <div className="hero-content container d-flex flex-column justify-content-center h-100">
        <p className="h1 text-white">Lorem ipsum dolor sit amet </p>
        <p className="h1 text-white">Lorem ipsum </p>
        <p className="text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio.</p>
        <button type="button" className="btn btn-outline-light w-25">Explore</button>
      </div>
    </div>
    </>
  )
}

export default Hero
