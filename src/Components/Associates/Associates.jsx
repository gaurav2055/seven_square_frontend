import React from 'react'

import logo_hiranandani from '../../assets/logo_hiranandani.png' 
import logo_lodha from '../../assets/logo_lodha.png' 
import logo_godrej from '../../assets/logo_godrej.png' 
import logo_rustomjee from '../../assets/logo_rustomjee.png' 

import './Associates.css'

const Associates = () => {
  return (
    <>
        <div className="associate-main container mt-5 d-sm-flex justify-content-around align-items-center">

          <div className="associate-left w-50">
            <div style={{
              backgroundColor:'#c4c4c4', 
              height:'12.5rem', 
              width:'12.5rem',
              position:'relative'
              }}></div>
            <div className="heading-1 me-sm-5" style={{
              position:'relative',
              top:'-170px',
              left:'50px' 
              }}>To make your Dream come true we have associated with</div>
          </div>

          <div className="associate-right">

            <div className="grid-item border-right" style={{
              borderRight: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Rustomjee</p></div>
            <div className="grid-item border-right" style={{
              borderRight: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Hiranandani <br/> Communities</p></div>
            <div className="grid-item"><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem Ipsum</p></div>  
            <div className="grid-item" style={{
              borderRight: '1px solid #c4c4c4',
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem Ipsum</p></div>
            <div className="grid-item" style={{
              borderRight: '1px solid #c4c4c4',
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Godrej <br/> Properties</p></div>
            <div className="grid-item" style={{
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem <br/> Ipsum</p></div>  
            <div className="grid-item" style={{
              borderRight: '1px solid #c4c4c4',
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem <br/> Ipsum</p></div>
            <div className="grid-item" style={{
              borderRight: '1px solid #c4c4c4',
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem <br/> Ipsum</p></div>
            <div className="grid-item" style={{
              borderTop: '1px solid #c4c4c4'
            }}><p className='heading-3' style={{color:'#c4c4c4'}}>Lorem <br/> Ipsum</p></div> 

          </div>

        </div>
    </>
  )
}

export default Associates
