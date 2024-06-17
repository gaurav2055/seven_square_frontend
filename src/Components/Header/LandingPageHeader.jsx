import { React, useEffect } from "react";
import seven_square_logo from "../../assets/seven_square_logo.png";
import { Link } from "react-router-dom";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/Instagram_icon.png.webp"
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { detailsApi } from "../../axios";
// import '../../index.css'

require("./LandingPageHeader.css");

const LandingPageHeader = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [details, setDetails] = useState({});
	useEffect(() => {
		const setData = async () => {
			try {
				const response = await detailsApi.get("/getDetails");
				setDetails(response.data.message);
			} catch (error) {}
		};
		setData();
	}, []);

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
						<img className='h-75' src={seven_square_logo} alt='logo' style={{ maxHeight: "49px" }} />
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
							<li class='nav-item dropdown px-3'>
								<Link className='nav-link dropdown-toggle text-danger' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									Contact
								</Link>
								<ul class='dropdown-menu'>
									<li>
										<a class='dropdown-item text-danger' href={`tel:${details?.phoneNo || 9699700777}`}>
											<img src={phone} alt='Phone' className='me-2' style={{ width: "30px", height: "30px" }} />
											{details?.phoneNo || 9699700777}
										</a>
									</li>
									<li>
										<a href='https://www.facebook.com/profile.php?id=61558366063022&mibextid=ZbWKwL' target='_blank' className='dropdown-item text-danger'>
											<img src={facebook} alt='fb_logo' className='me-2' style={{ width: "30px", height: "30px" }} /> Facebook
										</a>
									</li>
									<li>
										<a href='https://www.instagram.com/7squarerealtors?igsh=MWhjZ2s0aGFoMTFzcA==' target='_blank' className='dropdown-item text-danger'>
											<img src={instagram} alt='ig_logo' className='me-2' style={{ width: "30px", height: "30px" }} /> Instagram
										</a>
									</li>
									<li>
										<hr class='dropdown-divider' />
									</li>
									<li>
										<a class='dropdown-item text-danger' href='https://goo.gl/maps/D1zArg2TEAYaVHwDA'>
											<img src={map} alt='' className='me-2' style={{ width: "30px", height: "30px" }} />
											Open in Maps
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default LandingPageHeader;
