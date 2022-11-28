import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

import fp_img_1 from '../../assets/fp_img_1.png'
import fp_img_2 from '../../assets/fp_img_2.png'
import fp_img_3 from '../../assets/fp_img_3.png'

import './fp_index.css'

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

const FeaturedProperties = () => {

    const [featuredPropertyData, setFeaturedPropertyData] = useState()

    const localBaseUrl = "http://localhost:8080/"
    const devBaseUrl = "https://sevensquarerealtors.up.railway.app/"

    // useEffect(()=>{
    //     axios.get(`${devBaseUrl}api/property/getProperty?feature=true`).then((reponse)=>{
    //       setFeaturedPropertyData(reponse?.data?.message)
    //     })
    //   }, [])
    //   console.log(featuredPropertyData);

  return (
    <>

        <div className="inner-div container-fluid my-5"  style={{
            backgroundColor: '#e5e5e5'
        }}>
        <div className="feature_properties_main container d-md-flex justify-content-between align-items-center py-5">

            <div className="fp_header_left container">
                <div className="card-body">
                    <p className="card-title heading-2">Feature Properties</p>
                    <p className="card-text">massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. nisi.</p>
                </div>
                <hr />
                <div className="card-body">
                    <p className="card-text">Naven Khara massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin.</p>
                    <div className="stat-1 d-flex">
                        <div className="verticle-line"></div>
                        <div className="content ms-3">
                            <div className="years">Reach out to us to get your <br/> dream space</div>
                            <div className="heading heading-3">+91 9876543210</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured_properties_right container mt-5 mt-sm-0" style={{maxWidth: '500px'}}>
            <Slider {...settings}>

                    <div className="d-flex" style={{ border: 'none'}}>
                        <img className="card-img-top" src={fp_img_1} alt="property image cap"/>
                    </div>
                    <div className="d-flex" style={{ border: 'none'}}>
                        <img className="card-img-top" src={fp_img_2} alt="property image cap"/>
                    </div>
                    <div className="d-flex" style={{ border: 'none'}}>
                        <img className="card-img-top" src={fp_img_1} alt="property image cap"/>
                    </div>
            </Slider>
            </div>
        </div>
        </div>
    </>
  )
}

export default FeaturedProperties