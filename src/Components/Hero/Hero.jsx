import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageHeader from "../Header/LandingPageHeader";
import seven_square_logo from "../../assets/seven_square_logo.png";

import "./Hero.css";

import hero_square from "../../assets/hero_square.png";
import LoginModal from "../LoginModal/LoginModal";

const Hero = (props) => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const HandelExploreBtn = () => {
		navigate("/properties");
	};

	const { details } = props;

	const sell = () => {
		setShowModal(true);
	};

	return (
		<>
			{showModal && <LoginModal setState={setShowModal} />}
			<div className='hero-div'>
				<div id='hero-main'>
					<div className='hero-sections d-md-flex justify-content-around w-100 px-auto px-sm-0 align-items-start w-100 pb-5'>
						<div className='hero-section-1 mx-3 mx-sm-0'>
							<div className='hero-left mx-0 mx-sm-5 pt-5 w-md-75'>
								<div className='sq-img container'>
									<img src={hero_square} alt='SquareImg' />
								</div>

								<div className='hero-heading container'>
									<p className='heading-1 m-0'>
										<span style={{ color: "#1f26d2" }}>{details.detail1 || "7SQUARE REALTORS"}</span>
										{/* <img src={seven_square_logo} alt="" /> */}
										<br className='responsive' />
										<span style={{ color: "red" }} className='heading-1'>
											{" "}
											{details.detail2 || "Squaring deals into relationship"}
										</span>
									</p>
								</div>
							</div>

							<div className='hero-content container mb-4'>
								<div className='py-3 ms-md-5'>
									<p className='heading-3 my-1' style={{ maxWidth: "25rem", color: "#1f26d2" }}>
										{/* Suspendisse condimentum massa nec lacus congue rutrum.
										<br className='responsive' /> Praesent eros magna, fermentum ac feugiat at, molestie quis <br className='responsive' /> ipsum. Mauris facilisis gravida diam vestibulum dignissim. */}
										{details.detail3}
									</p>
								</div>
								<div className='heroCta ms-sm-5'>
									<button type='button' className='heroCtaBtn btn exp-btn' onClick={HandelExploreBtn}>
										Explore
									</button>
								</div>
							</div>
						</div>

						<div className='hero-section-2 mt-5 py-5 px-3 mt-5 mx-3 mx-sm-4'>
							<div className='feature-1 d-flex justify-content-center align-items-start me-3'>
								<div className='circle-with-line d-flex justify-content-end align-items-start w-50'>
									<div className='circle-with-line d-flex justify-content-center align-items-center w-50'>
										<div className='outer-circle'>
											{" "}
											<div className='inner-circle mx-auto'></div>{" "}
										</div>
										<hr className='w-50' style={{ borderTop: "2px solid #000" }} />
									</div>
								</div>
								<div className='feature1-content w-75 text-white' onClick={HandelExploreBtn}>
									<div className='feature1-heading heading-3 text-blue'>Buy Property</div>
									<div className='feature1-content body-2 text-blue' style={{ fontWeight: "bold" }}>
										{details.detail4 || "Buy the property you always dreamt of buying. We show both Residential and Commercial Properties"}
									</div>
								</div>
							</div>
							<div className='feature-2 d-flex justify-content-center align-items-start mt-3 ms-3'>
								<div className='feature2-content w-75 text-white text-end' onClick={HandelExploreBtn}>
									<div className='feature2-heading heading-3 ' style={{ color: "rgb(255,0,0)" }}>
										Rent Property
									</div>
									<div className='feature2-content body-2 text-start ' style={{ color: "rgb(255,0,0)", fontWeight: "bold" }}>
										{details.detail5 || "Rent amazing properties at great affordable prices. Both Residential and commercial are available "}
									</div>
								</div>
								<div className='circle-with-line d-flex justify-content-start align-items-start w-50'>
									<div className='circle-with-line d-flex justify-content-center align-items-center w-50'>
										<hr className='w-50' style={{ borderTop: "2px solid #000" }} />
										<div className='outer-circle'>
											{" "}
											<div className='inner-circle1 mx-auto'></div>{" "}
										</div>
									</div>
								</div>
							</div>
							<div className='feature-3 d-flex justify-content-center align-items-start mt-3 me-3'>
								<div className='circle-with-line d-flex justify-content-end align-items-start w-50'>
									<div className='circle-with-line d-flex justify-content-center align-items-center w-50'>
										<div className='outer-circle'>
											{" "}
											<div className='inner-circle mx-auto'></div>{" "}
										</div>
										<hr className='w-50' style={{ borderTop: "2px solid #000" }} />
									</div>
								</div>
								<div className='feature3-content w-75 text-white' onClick={sell}>
									<div className='feature3-heading heading-3 text-blue'>Sell Property</div>
									<div className='feature3-content body-2 text-blue' style={{ fontWeight: "bold" }}>
										{details.detail6 || "Sell your properties at great and amazing prices. We sell both Residential and Commercial properties."}
									</div>
								</div>
							</div>
							<div className='feature-4 d-flex justify-content-center align-items-start mt-3 ms-3'>
								<div className='feature4-content w-75 text-white text-end' onClick={sell}>
									<div className='feature4-heading heading-3 ' style={{ color: "rgb(255,0,0)" }}>
										Rent out your Property
									</div>
									<div className='feature4-content body-2 text-end ' style={{ color: "rgb(255,0,0)", fontWeight: "bold" }}>
										{details.detail7 || "Rent out your property without any worries. We will find great tennants for you."}
									</div>
								</div>
								<div className='circle-with-line d-flex justify-content-start align-items-start w-50'>
									<div className='circle-with-line d-flex justify-content-center align-items-center w-50'>
										<hr className='w-50' style={{ borderTop: "2px solid #000" }} />
										<div className='outer-circle'>
											{" "}
											<div className='inner-circle1 mx-auto'></div>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
