import React from 'react'

import './Card.css'

import carpet_area_ic from '../../assets/carpet_area_ic.png'
import bedrooms_ic from '../../assets/bedrooms_ic.png'
import furniture_ic from '../../assets/furniture_ic.png'

const Card = (props) => {

  // const {
  //   About,
  //   address,
  //   title,
  //   propertyActionType
  // } = props?.data

  return (
    <>
    <div className="card-container p-5 ms-sm-5" style={{maxWidth: '600px', maxHeight: '800px'}}>
        <span className="badge bg-primary mb-2 heading-3">{ props?.data?.propertyActionType || 'Buy'}</span>
        <p className="heading-2">{ props?.data?.title || 'Hill Crest,16th Road, Bandra West'}</p>
        <p className='body-2'>{ props?.data?.address || '16th Road (Bandra, Maharashtra, IN - 400050)'}</p>

        <p className="heading-3 mb-0">About</p>
        <p className='body-2'>{ String(props?.data?.About).substring(0, 180) || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nulla ipsam provident!'}</p>

        <hr />

        <div className=" container name-price-tag d-flex justify-content-between align-items-start mt-4">
          <div className="price-tag">
            <p className='mb-0'>Starting at</p>
            <p className="heading-3">₹ 72.2 L</p>
          </div>
          <div className="name-tag">
            <p className='mb-0 body-2'>Naven Khara</p>
            <p className="heading-3">+91 9876543210</p>
          </div>
        </div>

    </div>
    </>
  )
}

export default Card