import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

import ServicesData from "../../Data/Services";
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
		arrows: true,

		// variableWidth: true,
	};

	return (
		<>
			{/* { fromNavBar && <LandingPageHeader isdark={true}/> } */}

			<div className='react-slicker wh-75 mx-auto px-auto MobileResponsive my-5'>
				<Slider {...settings} className='mx-auto'>
					<div className='main-div'>
						<div className='img-div'>
							<img className='d-block w-100' src='' alt='' style={{ position: "relative" }} />
						</div>
						<div className='content px-4' style={{ position: "absolute", bottom: "30px" }}>
							<div className='heading-2 #000 heading-2'>Allied Services</div>
							<div className='body-2 w-50' style={{ color: "#fe2c33" }}>
								Slide for a Wide and exciting range of services at affordable rates by professionals.
							</div>
						</div>
					</div>
					{ServicesData.map((value, index) => {
						return (
							<div className='main-div card border-light' key={index}>
								<div className='img-div'>
									<img className='d-block w-100' src={value.s.icon} alt='' style={{ position: "relative" }} />
								</div>
								<div className='content ps-3 pe-5' style={{ position: "absolute", bottom: "30px" }}>
									<div className={`${value.s.headingStyle} heading-2 card-text`}>{value.s.title}</div>
									<div className={`${value.s.bodyStyle} card-text`}>{value.s.description}</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>

			<div className='container responsive'>
				<div className='row g-2'>
					<div className='col-md-6 col-lg-3 mt-3'>
						<div className='card text-left' style={{ border: "none" }}>
							<div className='card-body pt-3'>
								<p className='mb-0 heading-2 #000'>Allied Services</p>
								<p className='card-text body-2 #000' style={{ color: "#fe2c33" }}>
									Wide and exciting range of services at affordable rates by professionals.
								</p>
							</div>
						</div>
					</div>
					{ServicesData.map((value, index) => {
						return (
							<div className='col-md-6 col-lg-3 mt-3' key={index}>
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
