import React from 'react'
import CommonHeader from '../Header/CommonHeader'
import Card from './Card'

import { Carousel } from 'react-responsive-carousel'

import './index.css'
import Footer from '../Footer/Footer'

const OnClickProperty = () => {

  const img1 = "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  const img2 = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
  const img3 = "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  const img4 = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

  // const imgObj = [
  //   {
  //     imgUrl : "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  //   },
  //   {
  //     imgUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
  //   },
  //   {
  //     imgUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   }
  // ]

  return (
    <>
    <CommonHeader />
    <div className='container container-main mt-4 d-sm-flex justify-content-between align-items-start'>

      <div className="carousel-section w-100 w-sm-75 mx-auto mx-sm-0">

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner" style={{maxHeight: '500px'}}>
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img4} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className=" container name-price-tag d-flex justify-content-between align-items-center mt-4">
          <div className="price-tag">
            <p className='mb-0'>Starting at</p>
            <p className="h4">₹ 72.2 L</p>
          </div>
          <div className="name-tag">
            <p className='mb-0'>Reach out to Us</p>
            <p className='mb-0'>Naven Khara</p>
            <p className="h4">+91 9876543210</p>
          </div>
        </div>

      </div>

      <div className="card-section mt-3 mt-sm-0">
        <Card />
      </div>
    </div>
      <Footer />
    </>
  )
}

export default OnClickProperty