import React from 'react'

import fp_img_1 from '../../assets/fp_img_1.png'
import fp_img_2 from '../../assets/fp_img_2.png'
import fp_img_3 from '../../assets/fp_img_3.png'

import './fp_index.css'

const FeaturedProperties = () => {
  return (
    <>
        <div className="feature-properties container d-md-flex justify-content-between align-items-end my-5">

            <div className="left-section">
                
                <div className="left-section-row-1 d-flex justify-content-start align-items-center w-100">
                    <div className="row-1-img"> <img className='img-fluid' src={fp_img_1} alt="property Img" /> </div>
                    <div className="row-1-content ms-2">
                        <div className="heading-3">Feature Properties</div>
                        <div className="body-2">massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. nisi.</div>
                    </div>
                </div>

                <div className="left-section-row-2 d-flex justify-content-between align-items-start mt-3">
                    <div className="row-2-content me-5">
                        <p>Naven Khara massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin.  </p>
                        <div className="stat-1 d-flex">
                            <div className="verticle-line"></div>
                            <div className="content ms-3">
                                <div className="years">Reach out to us to get your dream space</div>
                                <div className="heading heading-3">+91 9876543210</div>
                            </div>
                        </div>
                    </div>
                    <div className="row-2-img">
                        <img clasnName='img-fluid' src={fp_img_2} alt="Feature Property" />
                    </div>
                </div>

            </div>

            <div className="right-section">
                <img src={fp_img_3} alt="" />
            </div>

        </div>
    </>
  )
}

export default FeaturedProperties