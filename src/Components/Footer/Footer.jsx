import React from 'react'
import seven_square_realtors_logo_white from '../../assets/seven_square_realtors_logo_white.png'

const Footer = () => {
  return (
    <>
      <div className="footer-main text-white mt-5 py-5" style={{backgroundColor: '#000'}}>
        <div className="logo container">
          <img src={seven_square_realtors_logo_white} alt="7_square_logo" />
        </div>
        <div className="footer-content mt-4 d-sm-flex justify-content-sm-end px-5 w-75 ms-sm-auto">
          <div className="about-content">
            <p className="h4">Brief</p>
            <p>massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. Nullam ac magna neque.</p>
          </div>
          <div className="contact">
            <p className="h4">Contact</p>
            {/* <div className="phn-no d-flex justify-content-space align-items-center"> */}
              <p>Phone No. &nbsp;</p>
              <p style={{marginTop:'-20px'}}>+91 9876543210</p>
            {/* </div> */}
            {/* <div className="email"> */}
              <p>Email</p>
              <p style={{marginTop:'-20px'}}>sevensquarerealtors@gmail.com</p>
            {/* </div> */}
          </div>
          <div className="address">
            <p className="h4">Address</p>
            <p>25 Buze, Tepelenë District, Gjirokastër County, Albania</p>
          </div>
        </div>
        <div className="copyright-div container mt-4">
          <p className='ms-4'>Copyright@20227SquareRealtors</p>
        </div>
      </div>
    </>
  )
}

export default Footer
