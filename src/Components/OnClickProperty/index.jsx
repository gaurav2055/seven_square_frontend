import React from 'react'
import CommonHeader from '../Header/CommonHeader'

import './index.css'

const OnClickProperty = () => {
  return (
    <>
    <CommonHeader />
    <div className='container container-main mt-4 d-sm-flex justify-content-between align-items-start'>

      <div className="crousal-container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className="card-container p-5 w-100">
        <span className="badge badge-pill badge-primary">Buy</span>
        <p className="h3">Hill Crest,16th Road, Bandra West</p>
        <p>16th Road (Bandra, Maharashtra, IN - 400050)</p>

        <p className="h6 mt-3">About</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio.</p>

        <div className="inner-card">
          <div className="left">
            <img src="" alt="" />
            <p>Carpet Area</p>
          </div>
          <div className="left-value">
            <h5>550 sq ft.</h5>
          </div>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default OnClickProperty