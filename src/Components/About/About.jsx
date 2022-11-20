import React from 'react'

import about_sec_img from '../../assets/about_sec_img.png'

import './About.css'

const About = () => {
  return (
    <>
    <div className="about-main d-md-flex align-items-center justify-content-center mt-5">

            <div className="about_image_div mx-sm-0 mx-5">
                <img className='img-fluid' src={about_sec_img} alt="" />
            </div>

            <div className="about-data mx-sm-5 mx-3">
                <div className="about-heading heading-2">About</div>
                <div className="about-content body-2">
                    Naven Khara massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. 
                </div>
                <div className="statastics mt-4 d-flex justify-content-start align-items-center">
                    <div className="stat-1 d-flex">
                        <div className="verticle-line"></div>
                        <div className="content ms-3">
                            <div className="heading heading-2">12+</div>
                            <div className="years">Years of <br/> experience</div>
                        </div>
                    </div>
                    <div className="stat-2 d-flex ms-5">
                        <div className="verticle-line"></div>
                        <div className="content ms-3">
                            <div className="heading heading-2">127+</div>
                            <div className="years body-2">Customers <br/> Served till Date</div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    </>
  )
}

export default About
