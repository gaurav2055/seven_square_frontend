import React from 'react'
import LandingPageHeader from '../Header/LandingPageHeader'

import img_hero_1 from '../../assets/img_hero_1.png'
import right_arrow from '../../assets/right_arrow.png'
import About from '../About/About'
import Hero from '../Hero/Hero'
import Services from '../ServicesComponent/Services'
import Footer from '../Footer/Footer'
import Associates from '../Associates/Associates'
import TestimonialCard from '../Testimonials/TestimonialCard'

// import('./LandingPage.css')

const LandingPage = () => {
  return (
    <>
    <section className='HeroComponent'>
      <Hero />
    </section>  

    <section className='AboutComponent'>
      <About /> 
    </section>

    <section className="ServicesSection my-5">
      <Services />
    </section>

    <section className='partners'>
      <Associates />
    </section>

    <div className="testimonials-section">
      <TestimonialCard />
    </div>

    <section className='footer'>
      <Footer />
    </section>
    </>
  )
}

export default LandingPage