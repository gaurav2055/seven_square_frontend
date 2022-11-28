import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import LandingPageHeader from '../Header/LandingPageHeader'
import plp_header_ic from '../../assets/plp_header_ic.png'
import downArrow_ic from '../../assets/downArrow_ic.png'

import './index.css'
import PropertiesListing from './PropertiesListing'
import axios from 'axios'
import { useState } from 'react'

const PropertyListingPage = () => {

  const [filteredProperty, setFilteredProperty] = useState()
  const [propertyTypeAction, setPropertyTypeAction] = useState('')
  const [propertyType, setPropertyType] = useState('')

  const localBaseUrl = 'http:/localhost:8080/'
  const devBaseUrl = 'https://sevensquarerealtors.up.railway.app/'

  useEffect(()=>{
    axios.get(`${devBaseUrl}api/property/getPropertiesByType?propertyActionType=${propertyTypeAction}&type=${propertyType}`).then((response)=>{
      setFilteredProperty(response.data.message)
    })
  }, [propertyTypeAction, propertyType])

  const handleResidential = (e) => {
    setPropertyType('Residential')
    setPropertyTypeAction(e.target.value)
  }
  const handleCommercial = (e) => {
    setPropertyTypeAction(e.target.value)
    setPropertyType('Commercial')
  }

  return (
    <div>
      <LandingPageHeader isdark={true}/>
      <div className="headings container mt-4">
        <p className='heading-1'>{propertyTypeAction} Your Dream {propertyType} Property</p>
        <p className='body-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit <br/> congue sodales. Nulla eget ex odio.</p>
      </div>

<div className="plp_menu_main container" style={{minWidth:'fit-content'}}>

      <div className="plp_menus d-flex justify-content-between align-items-center ps-sm-3 py-3">
        <div className="plp_ic responsive"> <img src={plp_header_ic} alt="plp Header ic" style={{width: '24px', height: '18px'}}/> </div>
        
        <div className="plp_dropdowns d-flex justify-content-between align-items-center me-auto ms-2 px-3">

      <div className="d-flex flex-column justify-content-around align-items-start w-100 me-1">
        <div className="lable mb-2 ps-2">
          <label for="dog-names">Residential</label>
        </div>
        <div className="dropdown">
          <select className="form-select mx-1" defaultValue={'All'} onChange={handleResidential}>
            <label>Residential</label>
            <option className="dropdown-item" value="All">All</option>
            <option className="dropdown-item" value="Buy">Buy Property</option>
            <option className="dropdown-item" value="Rent">Rent Property</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-around align-items-start w-100 ms-1">
        <div className="lable mb-2 ps-2">
          <label for="dog-names">Commercial</label>
        </div>
        <div className="dropdown">
          <select className="form-select mx-1" defaultValue={'All'} onChange={handleCommercial}>
            <label>Residential</label>
            <option className="dropdown-item" value="All">All</option>
            <option className="dropdown-item" value="Buy">Buy Property</option>
            <option className="dropdown-item" value="Rent">Rent Property</option>
          </select>
        </div>
      </div>

        {/* <label for="dog-names" className='mx-2'>Commercial</label>
        <select className="form-select" aria-label="Default select example" onClick={handleCommercial}>
          <option className="dropdown-item" selected>Commercial</option>
          <option className="dropdown-item" value="All">All</option>
          <option className="dropdown-item" value="Buy">Buy Property</option>
          <option className="dropdown-item" value="Rent">Rent Property</option>
        </select> */}

          {/* <div className="commercial-dropdown ms-sm-5">
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle body-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Commercial <br className='MobileResponsive'/> Properties
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item">All</li>
                  <li className="dropdown-item">Buy Property</li>
                  <li className="dropdown-item">Rent Property</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
</div>

      <PropertiesListing data={filteredProperty}/>
      <Footer />
    </div>
  )
}

export default PropertyListingPage
