import React from 'react'
import seven_square_logo from '../../assets/seven_square_logo.png'
import harmburger_1 from '../../assets/hamburger_1.png'

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
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="/">Properties</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white">Sell/Rent | List Property</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LandingPageHeader