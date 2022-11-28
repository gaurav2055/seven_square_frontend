import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './PropertyListing.css'

import Images from '../../Data/Images'
// import { getAllProperties } from '../../ApiServices'
import { useState } from 'react'
// import { getAllProperties } from '../../ApiEndpoints'

const PropertiesListing = () => {

  const localBaseUrl = 'http://localhost:8080/'
  const devBaseUrl = 'https://sevensquarerealtors.up.railway.app/'

  const [propertiesData, setPropertiesData] = useState([])

  useEffect( () => {
    axios.get(`${localBaseUrl}api/property/getProperties`).then((response)=>{
      setPropertiesData(response.data.message)
  })
  }, [])

  const navigate = useNavigate()

  const OnClickPropertyHandler = (propertyId)=>{
    navigate(`/property-details`, {state:{id: propertyId}})
  }

  // var result = Object.keys(propertiesData).map((key) => [Number(key), propertiesData[key]]);

  return (
    <>
    <div className='container mt-4'>
        <div className="masonry">
          {propertiesData.map((val, index)=>{
            console.log(val)
            return(
                <div className="img-card mb-3" onClick={()=> OnClickPropertyHandler(val.id)} key={index}>
                  <img src={val.mainImg} alt="propertyImg" />
                  <div className="overlay">
                    <p className='heading-3 px-4 pt-3 mb-0'> {val.carpetArea} sqft.</p>
                    <p className='property body-2  px-4' style={{maxWidth: '10'}}> {
                      String(val.About).substring(0,100)
                      } </p>
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
