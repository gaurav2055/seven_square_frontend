import React from 'react'

import logo_hiranandani from '../../assets/logo_hiranandani.png' 
import logo_lodha from '../../assets/logo_lodha.png' 
import logo_godrej from '../../assets/logo_godrej.png' 
import logo_rustomjee from '../../assets/logo_rustomjee.png' 

const Associates = () => {
  return (
    <>
        <div className="associate-main" style={{backgroundColor:'#F4F4F4'}}>

          <div className="associate-header text-center py-3 px-2">
            <p className='h2'>Associated with</p>
            <p>massa massa massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin.</p>
          </div>

          <div className="associations">

            <div className="container text-center">
              <div className="row">
                <div className="col-md-3">
                  <img src={logo_lodha} alt="logo" />
                </div>
                <div className="col-md-3">
                  <img src={logo_hiranandani} alt="logo" />
                </div>
                <div className="col-md-3">
                  <img src={logo_godrej} alt="logo" />
                </div>
                <div className="col-md-3">
                  <img src={logo_rustomjee} alt="logo" />
                </div>
              </div>
            </div>

            <div className="others main text-center my-3">
              <b className='h2 text-center'>&</b>
              <div className="others container d-sm-flex mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <p>DOSTI Friends & Life</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Raheja Universal</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Kalpa-Taru Power Transformation</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Mahindra Lifespaces</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Ajmera</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Chandak Foundation for Tomrrow</p>
                  </div>
                  <div className="col-sm-2">
                    <p>K Raheja Corp Homes</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Nirman Group</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Prestige Group</p>
                  </div>
                  <div className="col-sm-2">
                    <p>Shraddha Lifespaces</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
    </>
  )
}

export default Associates
