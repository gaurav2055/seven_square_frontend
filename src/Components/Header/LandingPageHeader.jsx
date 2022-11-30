import React from 'react'
import seven_square_logo from '../../assets/seven_square_logo.png'
import harmburger from '../../assets/hamburger.png'
import { Link } from 'react-router-dom'

// import LandingPage from '../LandingPage/LandingPage'

require('./LandingPageHeader.css')

const LandingPageHeader = () => {

    // const seven_square_logo = require('../../assets/seven_sqaure_logo.png')

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className='w-100' src={seven_square_logo} alt='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className='navbar-toggler' style={{focus: "outline: 1px none"}}> */}
                    <img className='btn-sm' src={harmburger} alt="harmburger_ic" />
                {/* </span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to="/properties">Properties</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <a href="/" className="nav-link text-white">Sell/Rent | List Property</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LandingPageHeader