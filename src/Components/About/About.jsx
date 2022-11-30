import React from 'react'

import about_img from '../../assets/about_img.png'

const About = () => {
  return (
    <>
    <div className="about-main container d-sm-flex justify-content-between align-items-center text-center text-sm-start mt-5">

        <div className="about-content px-5 w-100 w-md-50">
            
            <div className="name-plate mb-3">
                <div className="h2">Naven Khara</div>
                <div className="sm" style={{fontSize:'14px'}}>Occupation | Contact No. | Email</div>
            </div>

            <div className="about">
                Naven Khara massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. Nullam ac magna neque. Sed consectetur nibh at ex mattis imperdiet et et arcu. Suspendisse potenti. Suspendisse condimentum massa nec lacus congue rutrum. Praesent eros magna, fermentum ac feugiat at, molestie quis ipsum. Mauris facilisis gravida diam vestibulum dignissim.
            </div>

            <div className="about-numbers d-md-flex justify-content-between align-items-center mt-4">
                <div className="cst-block">
                    <div className="h1">2,127</div>
                    <p>Sastified <br/> Customer</p>
                </div>
                <div className="trust-block">
                    <div className="h1">7+</div>
                    <p>Years of Building <br/> Trust</p>
                </div>
            </div>

        </div>

        <div className="aboutImg w-100 w-md-50 text-end">
            <img className='img-fluid' src={about_img} alt="" />
        </div>

    </div>
    </>
  )
}

export default About
