import React from 'react'
import { useNavigate } from 'react-router-dom'

import './PropertyListing.css'

import Images from '../../Data/Images'

const PropertiesListing = () => {

  const navigate = useNavigate()
  const OnClickPropertyHandler = ()=>{
    navigate('/property-details')
  }

  return (
    <>
    <div className='container mt-4'>
        <div className="masonry">

          {Images.map((val, index)=>{
            return(
                <div className="img-card mb-3" onClick={OnClickPropertyHandler}>
                  <img src={val.img} alt="propertyImg" />
                  <div className="overlay">
                    <p className='heading-3 px-4 pt-3 pb-0'> 1200 sqft. </p>
                    <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
                  </div>
                </div>
            )
          })}

        </div>
    </div>
    </>
  )
}

export default PropertiesListing
