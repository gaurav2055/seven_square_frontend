import React from 'react'
import Footer from '../Footer/Footer'
import CommonHeader from '../Header/CommonHeader'

import './index.css'
import PropertiesListing from './PropertiesListing'

const PropertyListingPage = () => {
  return (
    <div>
      <CommonHeader />
      <div className="subHeader container mt-3 d-sm-flex justify-content-between align-items-center flex-wrap">
        <div className="property-typ-btn">
          <button type="button" className="btn btn1 btn-outline-dark">All</button>
          <button type="button" className="btn btn1 btn-outline-dark ms-3">Buy</button>
          <button type="button" className="btn btn1 btn-outline-dark ms-3">Rent Out</button>
          <button type="button" className="btn btn1 btn-outline-dark ms-sm-3 my-3 my-sm-0">Ongoing Project</button>
        </div>
        <div className="switch-btn">
          <div className="dropdown">
            <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Commercial</a></li>
              <li><a className="dropdown-item" href="/">Residential</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="headings container mt-4">
        <p className='h1'>
          <span>Buy</span> Your Dream <span> Commercial </span> Property
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio.</p>
        <hr />
      </div>
      <PropertiesListing />
      <Footer />
    </div>
  )
}

export default PropertyListingPage
