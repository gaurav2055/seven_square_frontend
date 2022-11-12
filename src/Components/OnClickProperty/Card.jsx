import React from 'react'

import './Card.css'

import carpet_area_ic from '../../assets/carpet_area_ic.png'
import bedrooms_ic from '../../assets/bedrooms_ic.png'
import furniture_ic from '../../assets/furniture_ic.png'

const Card = () => {
  return (
    <>
    <div className="card-container p-5 ms-sm-5" style={{maxWidth: '600px', maxHeight: '800px'}}>
        <h5> <span class="badge bg-primary mb-2">Buy</span> </h5>
        <p className="h3">Hill Crest,16th Road, Bandra West</p>
        <p>16th Road (Bandra, Maharashtra, IN - 400050)</p>

        <p className="h6">About</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nulla ipsam provident!</p>

        <div className="inner-card d-flex align-items-center justify-content-between px-4">
        <div className="left d-flex align-items-center justify-content-between">
            <img src={carpet_area_ic} alt="ic" />
            <p className='ms-3 mt-3'>Carpet Area</p>
        </div>
        <div className="left-value">
            <h6>550 sq ft.</h6>
        </div>
        </div>
        <div className="inner-card d-flex align-items-center justify-content-between px-4 my-3">
        <div className="left d-flex align-items-center justify-content-between">
            <img src={furniture_ic} alt="ic" />
            <p className='ms-3 mt-3'>Furnished</p>
        </div>
        <div className="left-value">
            <h6>Furnished</h6>
        </div>
        </div>
        <div className="inner-card d-flex align-items-center justify-content-between px-4">
        <div className="left d-flex align-items-center justify-content-between">
            <img src={bedrooms_ic} alt="ic" />
            <p className='ms-3 mt-3'>Bedrooms</p>
        </div>
        <div className="left-value">
            <h6>3 BHK</h6>
        </div>
        </div>
    </div>
    </>
  )
}

export default Card