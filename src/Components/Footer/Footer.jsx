import React from "react";
import seven_square_logo from "../../assets/seven_square_logo.png";

const Footer = () => {
	return (
		<>
			<div className='footer-main text-white mt-5 py-5 position-relative' style={{ backgroundColor: "#000" }}>
				<div className='logo container'>
					<img src={seven_square_logo} alt='7_square_logo' />
				</div>
				<div className='footer-content mt-4 d-md-flex justify-content-md-end px-3 ms-md-auto mb-3' style={{ width: "80%" }}>
					<div className='about-content me-3'>
						<p className='h4'>Brief</p>
						<p>massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. Nullam ac magna neque.</p>
					</div>
					<div className='contact me-4'>
						<p className='h4'>Contact</p>
						{/* <div className="phn-no d-flex justify-content-space align-items-center"> */}
						<p>Phone No. &nbsp;</p>
						<p style={{ marginTop: "-20px" }}>+91 9699700777</p>
						{/* </div> */}
						{/* <div className="email"> */}
						<p>Email</p>
						<p style={{ marginTop: "-20px" }}>sevensquarerealtors@gmail.com</p>
						{/* </div> */}
					</div>
					<div className='address ms-2 me-4'>
						<p className='h4'>Address</p>
						<p>
							Shop No.1, Shri Panchamrut CHS, N.L. <br />
							Complex, Link Road, Dahisar East, Mumbai, Maharashtra 400068, India
						</p>
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
