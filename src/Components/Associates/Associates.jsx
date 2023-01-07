import React from "react";

import logo_raajRealty from "../../assets/logo_raajRealty.png";
import logo_lodha from "../../assets/logo_lodha.png";
import logo_godrej from "../../assets/logo_godrej.png";
import logo_rustomjee from "../../assets/logo_rustomjee.png";
import logo_mahindra from "../../assets/logo_mahindra.jpg";
import logo_shradha from "../../assets/logo_shraddha.png";
import logo_ajmera from "../../assets/logo_ajmera.png";
import logo_MICL from "../../assets/logo_MICL.png";
import "./Associates.css";

const Associates = () => {
	const style = {
		"@media screen and ()": {},
	};
	return (
		<>
			<div className='associate-main container-md my-5 px-4 d-sm-flex justify-content-around align-items-center'>
				<div className='associate-left w-50 me-5'>
					<div
						style={{
							backgroundColor: "#e5e5e5",
							height: "12.5rem",
							width: "12.5rem",
							position: "relative",
						}}></div>
					<div
						className='heading-2 me-sm-5'
						style={{
							position: "relative",
							top: "-170px",
							left: "50px",
						}}>
						To make your Dreams come true we have associated with
					</div>
				</div>

				<div className='associate-right'>
					<div
						className='grid-item border-right'
						style={{
							borderRight: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{color:'#c4c4c4'}}>Rustomjee</p> */}
						<img src={logo_rustomjee} className='img-fluid' alt='' style={style} />
					</div>
					<div
						className='grid-item border-right'
						style={{
							borderRight: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Hiranandani <br /> Communities
						</p> */}
						<img src={logo_raajRealty} className='img-fluid' alt='' />
					</div>
					<div className='grid-item'>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Lorem Ipsum
						</p> */}
						<img src={logo_lodha} className='img-fluid' alt='' />
					</div>
					<div
						className='grid-item'
						style={{
							borderRight: "1px solid #c4c4c4",
							borderTop: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Lorem Ipsum
						</p> */}
						<img src={logo_godrej} className='img-fluid' alt='' />
					</div>
					<div
						className='grid-item'
						style={{
							borderRight: "1px solid #c4c4c4",
							borderTop: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Godrej <br /> Properties
						</p> */}
						<img src={logo_mahindra} alt='' className='img-fluid' />
					</div>
					<div
						className='grid-item'
						style={{
							borderTop: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Lorem <br /> Ipsum
						</p> */}
						<img src={logo_shradha} alt='' className='img-fluid' />
					</div>
					<div
						className='grid-item'
						style={{
							borderRight: "1px solid #c4c4c4",
							borderTop: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Lorem <br /> Ipsum
						</p> */}
						<img src={logo_ajmera} alt='' className='img-fluid' />
					</div>
					<div
						className='grid-item'
						style={{
							borderRight: "1px solid #c4c4c4",
							borderTop: "1px solid #c4c4c4",
						}}>
						{/* <p className='heading-3' style={{ color: "#c4c4c4" }}>
							Lorem <br /> Ipsum
						</p> */}
						<img src={logo_MICL} alt='' className='img-fluid' />
					</div>
					<div
						className='grid-item'
						style={{
							borderTop: "1px solid #c4c4c4",
						}}>
						<p className='heading-2 text-center align-middle'>And Many More...</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Associates;
