import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageHeader from '../Header/LandingPageHeader'

import './Hero.css'

import hero_square from '../../assets/hero_square.png' 

const Hero = () => {

  const navigate = useNavigate()

  const HandelExploreBtn = () =>{
      navigate('/properties');
  }

  return (
    <>
    <div className="hero-div">

    <div id='hero-main'>
      <div className="nav-bar-comp">
        <LandingPageHeader />
      </div>
    <div className="hero-sections d-md-flex justify-content-around w-100 px-auto px-sm-0 align-items-start mt-sm-5 w-100 pb-5">

      <div className="hero-section-1">
        <div className="hero-left">
              <div className="sq-img container">
                <img src={hero_square} alt="SquareImg" />
              </div>

              <div className="hero-heading container">
                <p className='heading-1 text-white m-0'>Lorem ipsum dolor sit amet <br className='responsive'/> ipsum dolor sit amet</p>
              </div>
        </div>

        <div className="hero-content container">
          <div className="py-3 ms-sm-5">
            <p className='text-white body-2 my-1'>Suspendisse condimentum massa nec lacus congue rutrum.<br className='responsive'/> Praesent eros magna, fermentum ac feugiat at, molestie quis <br className='responsive'/> ipsum. Mauris facilisis gravida diam vestibulum dignissim.</p>
          </div>
          <div className="heroCta ms-sm-5">
            <button type="button" className="heroCtaBtn btn btn-outline-light">Explore</button>
          </div>
        </div>
      </div>

      <div className="hero-section-2 py-5 px-3 mt-5 mt-sm-0 mx-3 mx-sm-0">

        <div className="feature-1 d-flex justify-content-center align-items-start me-5">
          <div className="circle-with-line d-flex justify-content-end align-items-start w-50">
            <div className="circle-with-line d-flex justify-content-center align-items-center w-50">
              <div className="outer-circle"> <div className="inner-circle mx-auto"></div> </div>
              <hr className='w-50'/>
            </div>
          </div>
          <div className="feature1-content w-75 text-white">
            <div className="feature1-heading heading-3">Buy Property</div>
            <div className="feature1-content body-2">
              Suspendisse condimentum massa nec lacus congue rutrum. 
            </div>
          </div>
        </div>
        <div className="feature-2 d-flex justify-content-center align-items-start mt-3 ms-5">
        <div className="feature2-content w-75 text-white text-end">
            <div className="feature2-heading heading-3">Buy Property</div>
            <div className="feature2-content body-2 text-start">
              Suspendisse condimentum massa nec lacus congue rutrum. 
            </div>
          </div>
          <div className="circle-with-line d-flex justify-content-start align-items-start w-50">
            <div className="circle-with-line d-flex justify-content-center align-items-center w-50">
              <hr className='w-50'/>
              <div className="outer-circle"> <div className="inner-circle mx-auto"></div> </div>
            </div>
          </div>
        </div>
        <div className="feature-3 d-flex justify-content-center align-items-start mt-3 me-5">
          <div className="circle-with-line d-flex justify-content-end align-items-start w-50">
            <div className="circle-with-line d-flex justify-content-center align-items-center w-50">
              <div className="outer-circle"> <div className="inner-circle mx-auto"></div> </div>
              <hr className='w-50'/>
            </div>
          </div>
          <div className="feature3-content w-75 text-white">
            <div className="feature3-heading heading-3">Sell Property</div>
            <div className="feature3-content body-2">
              Suspendisse condimentum massa nec lacus congue rutrum. 
            </div>
          </div>
        </div>
        <div className="feature-4 d-flex justify-content-center align-items-start mt-3 ms-5">
        <div className="feature4-content w-75 text-white text-end">
            <div className="feature4-heading heading-3">Buy Property</div>
            <div className="feature4-content body-2 text-start">
              Suspendisse condimentum massa nec lacus congue rutrum. 
            </div>
          </div>
          <div className="circle-with-line d-flex justify-content-start align-items-start w-50">
            <div className="circle-with-line d-flex justify-content-center align-items-center w-50">
              <hr className='w-50'/>
              <div className="outer-circle"> <div className="inner-circle mx-auto"></div> </div>
            </div>
          </div>
        </div>

      </div>

      </div>
</div>

    </div>
    </>
  )
}

export default Hero
