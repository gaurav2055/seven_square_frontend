import React from 'react'
import { useNavigate } from 'react-router-dom'

import './PropertyListing.css'

import imagesArray from '../../Data/Images'

const PropertiesListing = () => {

  const navigate = useNavigate()
  const OnClickPropertyHandler = ()=>{
    navigate('/property-details')
  }

  return (
    <>
    <div className='container mt-4'>
        <div className="masonry">
          

          {/* {imagesArray.map((val,index)=>{
            <div className="img-card" onClick={OnClickPropertyHandler}>
              <img src={imagesArray[val]} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3 pb-0'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
          })} */}

            <div className="img-card" onClick={OnClickPropertyHandler}>
              <img src={imagesArray[0].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3 pb-0'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[1].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[2].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[3].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[4].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[5].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>
            <div className="img-card mt-3">
              <img src={imagesArray[6].img} alt="propertyImg" />
              <div className="overlay">
                <p className='heading-3 px-4 pt-3'> 1200 sqft. </p>
                <p className='property body-2  px-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default PropertiesListing
