import React from "react";
import seven_square_logo from "../../assets/seven_square_logo.png";
import harmburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
// import '../../index.css'

require("./LandingPageHeader.css");

const LandingPageHeader = (props) => {
	const [showModal, setShowModal] = useState(false);

	const { isdark = false } = props;

	const handelLogin = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			{showModal && <LoginModal setState={setShowModal} />}

			<nav
				className={"navbar navbar-expand-lg px-sm-5 fixed-top bg-light"}
				style={{
					boxShadow: "0px 5px 10px",
				}}>
				<div className='container-fluid'>
					<a className='navbar-brand me-0 ms-sm-5' href='/'>
						<img className='h-75' src={seven_square_logo} alt='logo' />
						{/* <Logo /> */}
					</a>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
						{/* <span className='navbar-toggler' style={{focus: "outline: 1px none"}}> */}
						{/* <img className='btn-sm' src={harmburger} alt='harmburger_ic' /> */}
						{/* </span> */}
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ms-auto me-sm-5'>
							<li className='nav-item px-3'>
								<Link className='nav-link text-danger' aria-current='page' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item px-3'>
								<Link className='nav-link text-danger' to='/properties'>
									Properties
								</Link>
							</li>
							<li className='nav-item px-3'>
								<button onClick={handelLogin} className='nav-link text-danger' style={{ background: "none", border: "none" }}>
									Buy/Rent | Sell/List Property
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default LandingPageHeader;
