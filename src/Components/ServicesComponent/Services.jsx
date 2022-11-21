import React from 'react'
import propTypes from 'prop-types'
import  Slider from 'react-slick'

import ServicesData from '../../Data/Services'

const Services = (props) => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

  return (
    <>
  
    <div className="react-slicker w-75 mx-auto MobileResponsive my-5">
        <Slider {...settings}>
        {ServicesData.map((value, index)=>{
            return(
                <div className="main-div mx-1">
                    <div className="img-div">
                        <img src={value.s.icon} alt=""  style={{position:'relative'}}/>
                    </div>
                    <div className="content px-4" style={{position:'absolute', bottom:'30px'}}>
                        <div className={`${value.s.headingStyle} heading-2`}>{value.s.title}</div>
                        <div className={`${value.s.bodyStyle} w-50`}>{value.s.description}</div>
                    </div>
                </div>
            )
        })}
        </Slider>
    </div>

    <div className='container responsive'>
        <div className="row no-gutters">
            {ServicesData.map((value,index)=>{
                return(
                    <div className="col-md-3 mt-3" key={index}>
                        <div className="card text-left" style={{backgroundImage:`url(${value.s.icon})`, border: 'none'}}>
                            <div className="card-body" style={{paddingTop:`${value.s.cardBodyStyle}`}}>
                                <p className={`mb-0 ${value.s.headingStyle}`}>{value.s.title}</p>
                                <p className={`card-text body-2 ${value.s.bodyStyle}`}>{value.s.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )

}


export default Services
