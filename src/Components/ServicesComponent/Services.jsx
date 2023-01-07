import React from "react";
import propTypes from "prop-types";
import Slider from "react-slick";

import ServicesData from "../../Data/Services";
import LandingPageHeader from "../Header/LandingPageHeader";
import Footer from "../Footer/Footer";
import "./Services.css";

const Services = (props) => {
	// const{
	//     fromNavBar = false
	// } = props

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// variableWidth: true,
	};

	return (
		<>
			{/* { fromNavBar && <LandingPageHeader isdark={true}/> } */}

			<div className='react-slicker wh-75 mx-auto px-auto MobileResponsive my-5'>
				<Slider {...settings} className='mx-auto'>
					<div className='main-div mx-1'>
						<div className='img-div'>
							<img src='' alt='' style={{ position: "relative" }} />
						</div>
						<div className='content px-4' style={{ position: "absolute", bottom: "30px" }}>
							<div className='heading-2 #000 heading-2'>Services</div>
							<div className='body-2 #000 w-50'>All the wide and exciting range of services by professional we provide</div>
						</div>
					</div>
					{ServicesData.map((value, index) => {
						return (
							<div className='main-div mx-1' key={index}>
								<div className='img-div'>
									<img src={value.s.icon} alt='' style={{ position: "relative" }} />
								</div>
								<div className='content px-4' style={{ position: "absolute", bottom: "30px" }}>
									<div className={`${value.s.headingStyle} heading-2`}>{value.s.title}</div>
									<div className={`${value.s.bodyStyle} w-50`}>{value.s.description}</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>

			<div className='container responsive'>
				<div className='row g-2'>
					<div className='col-md-3 mt-3'>
						<div className='card text-left' style={{ border: "none" }}>
							<div className='card-body pt-0'>
								<p className='mb-0 heading-2 #000'>Services</p>
								<p className='card-text body-2 #000'>All the wide and exciting range of services by professional we provide</p>
							</div>
						</div>
					</div>
					{ServicesData.map((value, index) => {
						return (
							// <div className='col-md-3 mt-3' key={index}>
							// 	<div className='card text-left' style={{ backgroundImage: `url(${value.s.icon})`, border: "none" }}>
							// 		<div className='card-body' style={{ paddingTop: `${value.s.cardBodyStyle}` }}>
							// 			<p className={`mb-0 ${value.s.headingStyle}`}>{value.s.title}</p>
							// 			<p className={`card-text body-2 ${value.s.bodyStyle}`}>{value.s.description}</p>
							// 		</div>
							// 	</div>
							// </div>
							<div className='col-3 mt-3' key={index}>
								<div className='card text-left text-bg-dark' /*style={{backgroundImage:`url(${value.s.icon})`, border: 'none'}}*/>
									<img src={value.s.icon} className='card-img' style={{ position: "relative" }} />
									<div className='card-img-overlay' /*style={{ paddingTop: `${value.s.cardBodyStyle}` }}*/>
										<p className={`mb-0 card-text ${value.s.headingStyle}`}>{value.s.title}</p>
										<p className={`card-text card-text body-2 ${value.s.bodyStyle}`}>{value.s.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* { fromNavBar && <Footer /> } */}
		</>
	);
};

export default Services;
