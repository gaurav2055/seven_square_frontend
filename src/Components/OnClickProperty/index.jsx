import React, { useEffect } from 'react'
import CommonHeader from '../Header/CommonHeader'
import Card from './Card'

import './index.css'
import Footer from '../Footer/Footer'
import amenities from '../../Data/Amenities'
import LandingPageHeader from '../Header/LandingPageHeader'
import axios from 'axios'
import { useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

//Icons
import carpet_area_ic from '../../assets/carpet_area_ic.png'
import bedrooms_ic from '../../assets/bedrooms_ic.png'
import furniture_ic from '../../assets/furniture_ic.png'
import parking from '../../assets/parking.png'
import plug from '../../assets/plug.png'
import washroom from '../../assets/washroom.png'
import two_storey from '../../assets/two_storey.png'
import water_drop from '../../assets/water_drop.png'

// import carpet_area_ic from '../../assets/carpet_area_ic.png'

const OnClickProperty = () => {

  const [singlePropertyData, setSinglePropertyData] = useState()

  const img1 = "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  const img2 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
  const img3 = "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  const img4 = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

  const localBaseUrl = 'http://localhost:8080/'
  const devBaseUrl = 'https://sevensquarerealtors.up.railway.app/'

  const location = useLocation()
  const propertyId = location?.state?.id

  //API Calls
  useEffect(()=>{
    axios.get(`${localBaseUrl}api/property/getProperty?id=${propertyId}`).then((reponse)=>{
      setSinglePropertyData(reponse?.data?.message)
    })
  }, [propertyId])

  // console.log(singlePropertyData)

  return (
    <>
    <LandingPageHeader isdark={true}/>
    <div className='container container-main mt-4 d-md-flex justify-content-between align-items-start'>

      <div className="carousel-section w-100 w-sm-75 mx-auto mx-sm-0">

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" style={{maxHeight: '500px'}}>
            <div className="carousel-item active">
              <img src={singlePropertyData?.imgArra[0] || img3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={singlePropertyData?.imgArra[1] || img2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={singlePropertyData?.imgArra[2] || img1} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className="card-section mt-3 mt-sm-0">
        <Card  data={singlePropertyData}/>
      </div>
    </div>

    <div className="amenities-section container mt-5">  
        <div className="heading-2 mb-3">Features / Amenities</div>
        <div className="card-container p-5" style={{borderRadius:'0px', backgroundColor:'#e5e5e5', boxShadow: 'none'}}>
          <div className="container">
            <div className="row">
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={carpet_area_ic} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Carpet Area</p>
                      <p className="body-2"> <b> {singlePropertyData?.carpetArea} sqft.</b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={parking} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Parking Area </p>
                      <p className="body-2"> <b> {singlePropertyData?.parkingArea} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={furniture_ic} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Furnished Status </p>
                      <p className="body-2"> <b> {singlePropertyData?.Furnished} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={two_storey} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Storeys </p>
                      <p className="body-2"> <b> {singlePropertyData?.Story} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={washroom} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Washrooms </p>
                      <p className="body-2"> <b> {singlePropertyData?.washroom} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={water_drop} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Water Availabity </p>
                      <p className="body-2"> <b> {singlePropertyData?.water} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={plug} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Electricity Availablity </p>
                      <p className="body-2"> <b> {singlePropertyData?.electricity} </b> </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 gy-3">
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={bedrooms_ic} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0"> Bedrooms </p>
                      <p className="body-2"> <b> {singlePropertyData?.bedrooms} BHK </b> </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    {/* <div className="amenities-section container mt-5">  
        <div className="heading-2 mb-3">Features / Amenities</div>
        <div className="card-container p-5" style={{borderRadius:'0px', backgroundColor:'#e5e5e5', boxShadow: 'none'}}>
          <div className="container">
            <div className="row">
              {amenities.map( (val, index)=> {
                return(
                  <div className="col-sm-3 gy-3" key={index}>
                  <div className="amenities d-flex justify-content-start align-items-start">
                    <div className="ic"> <img className='me-4' src={val.ic} alt="amenities_ic" style={{width:'24px', height:'24px'}}/> </div>
                    <div className="text">
                      <p className="body-2 mb-0">{val.title}</p>
                      <p className="body-2"> <b> {val.Value} </b> </p>
                    </div>
                  </div>
                </div>
                )
              } )}
            </div>
          </div>
        </div>

      </div> */}


      <Footer />
    </>
  )
}

export default OnClickProperty