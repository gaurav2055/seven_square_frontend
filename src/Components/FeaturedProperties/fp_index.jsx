import React from 'react'

import fp_img_1 from '../../assets/fp_img_1.png'
import fp_img_2 from '../../assets/fp_img_2.png'
import fp_img_3 from '../../assets/fp_img_3.png'

import './fp_index.css'

const FeaturedProperties = () => {
  return (
    <>
        <div className="feature-properties container d-sm-flex justify-content-between align-items-center">

            <div className="left">

                <div className="left-one-main d-flex justify-content-start align-items-start">
                    <div className="left-one">
                        <div> <img className='img-fluid' src={fp_img_1} alt="" /> </div>
                    </div>
                    <div className='left-one-content mx-3'>
                        <p className="heading-2"> Feature Properties </p>
                        <p className='body-2'>massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. nisi.</p>
                    </div>
                </div>

                <div className="left-two d-flex justify-content-start align-items-start">

                    <div className='left-two-main mx-3'>
                        <div className="left-two-content">
                            <p className='body-2'>massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. nisi.</p>
                            <div className="stat-1 d-flex">
                                <div className="verticle-line"></div>
                                <div className="content ms-3">
                                    <div className="years w-75">Reach out to us to get your dream space</div>
                                    <div className="heading heading-3">+91 9876543210</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="left-two me-3">
                        <div> <img className='img-fluid' src={fp_img_2} alt="" /> </div>
                    </div>

                </div>

            </div>

            <div className="right">
                <div className="right-img">
                    <img src={fp_img_3} alt="" />
                </div>
            </div>

        </div>
    </>
  )
}

export default FeaturedProperties