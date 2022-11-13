import React from 'react'
import { Link } from 'react-router-dom'

import seven_square_realtors_logo_white from '../../assets/seven_square_realtors_logo_white.png'
import hamburger from '../../assets/hamburger.png'

const CommonHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{
        backgroundColor: '#000'
      }}>
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img className='' src={seven_square_realtors_logo_white} alt='logo' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'>
              <img src={hamburger} alt="" />
            </span>
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
                <a className="nav-link text-white" href='/'>Sell/Rent | List Property</a>
                </li>
            </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default CommonHeader
