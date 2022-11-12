import React from 'react'
import { useNavigate } from 'react-router-dom'

import './PropertyListing.css'

const PropertiesListing = () => {

  const navigate = useNavigate()
  const OnClickPropertyHandler = ()=>{
    navigate('/property-details')
  }

  return (
    <>
    <div className='container mt-4'>
        <div className="masonry">

            <div className="img-card">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="propertyImg" />
              <p className='h6 px-5 pt-3'> 1200 sqft. </p>
              <p className='property px-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis! </p>
              <div className="btn btn-dark mx-5 mb-3" onClick={OnClickPropertyHandler}>View Property</div>
            </div>

            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="propertyImg" />

            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80" alt="propertyImg" />

            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="propertyImg" />

            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZSUyMGl0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="propertyImg" />

            <img src="https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="propertyImg" />

            <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZSUyMGl0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="propertyImg" />

        </div>
    </div>
    </>
  )
}

export default PropertiesListing
