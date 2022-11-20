import React from 'react'

import About from '../About/About'
import Hero from '../Hero/Hero'
import Services from '../ServicesComponent/Services'
import Footer from '../Footer/Footer'
import Associates from '../Associates/Associates'
import TestimonialCard from '../Testimonials/TestimonialCard'


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

    {/* <section className='partners'>
      <Associates />
    </section> */}

    {/* <div className="testimonials-section">
      <TestimonialCard />
    </div> */}

    <section className='footer'>
      <Footer />
    </section>
    </>
  )
}

export default LandingPage