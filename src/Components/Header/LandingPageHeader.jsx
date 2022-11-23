import React from 'react'
import seven_square_logo from '../../assets/seven_square_logo.png'
import harmburger from '../../assets/hamburger.png'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { useState } from 'react'
import LoginModal from '../LoginModal/LoginModal'
// import '../../index.css'

require('./LandingPageHeader.css')

const LandingPageHeader = (props) => {

    const [showModal, setShowModal] = useState(false)

    const { isdark = false } = props

    // const seven_square_logo = require('../../assets/seven_sqaure_logo.png')
    const handelLogin = () => {
        setShowModal(!showModal)
    }

  return (
    <>
        { showModal && <LoginModal /> }

        <nav className="navbar navbar-expand-lg px-sm-5 py-4" style={{backgroundColor: isdark?'#000':''}}>
            <div className="container-fluid">
                <a className="navbar-brand me-0 ms-sm-5" href="/">
                    {/* <img className='w-100' src={seven_square_logo} alt='logo' /> */}
                    <Logo />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className='navbar-toggler' style={{focus: "outline: 1px none"}}> */}
                <img className='btn-sm' src={harmburger} alt="harmburger_ic" />
                {/* </span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-sm-5">
                    <li className="nav-item">
                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to="/properties">Properties</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link text-white" to="services">Services</Link>
                    </li> */}
                    <li className="nav-item">
                        <button onClick={handelLogin} className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background:'none', border:'none' }}>Sell/Rent | List Property</button>
                        {/* <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button> */}
                        
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default LandingPageHeader