import React, { useEffect, useState } from "react";
import seven_square_logo from "../../assets/seven_square_logo.png";
import { detailsApi } from "../../axios";

const Footer = () => {
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
	return (
		<>
			<div className='footer-main text-white mt-5 py-5 position-relative' style={{ backgroundColor: "#a80000" }}>
				{/* <div className='logo container'>
					<img src={seven_square_logo} alt='7_square_logo' />
				</div> */}
				<div className='footer-content mt-4 d-md-flex px-3 ms-3 mb-3'>
					<div className='about-content me-3'>
						<p className='h4'>Brief</p>
						<p>{details.brief}</p>
					</div>
					<div className='contact me-4'>
						<p className='h4'>Contact</p>
						{/* <div className="phn-no d-flex justify-content-space align-items-center"> */}
						<p>Phone No. &nbsp;</p>
						<p style={{ marginTop: "-20px" }}>+91 {details.phoneNo || "9699700777"}</p>
						{/* </div> */}
						{/* <div className="email"> */}
						<p>Email</p>
						<p style={{ marginTop: "-20px" }}>{details.email || "sevensquarerealtors@gmail.com"}</p>
						{/* </div> */}
					</div>
					<div className='address ms-2 me-4'>
						<p className='h4'>Address</p>
						<p>{details.address || "Shop No.1, Shri Panchamrut CHS, N.L. Complex, Link Road, Dahisar East, Mumbai, Maharashtra 400068, India"}</p>
					</div>
				</div>
				<div className='copyright-div container mt-4 position-absolute bottom-0'>
					<p className=' start-0'>Copyright@20227SquareRealtors</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
