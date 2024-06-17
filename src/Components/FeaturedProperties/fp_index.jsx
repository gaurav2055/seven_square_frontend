import { React, useEffect, useState } from "react";
import Slider from "react-slick";

import "./fp_index.css";
import { propApi } from "../../axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/FBInit";
import LoginModal from "../LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";

let settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	adaptiveHeight: true,
};

const FeaturedProperties = (props) => {
	const [featuredPropertyData, setFeaturedPropertyData] = useState();
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const localBaseUrl = "http://localhost:8080/";
	const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

	useEffect(() => {
		propApi(`/getFeatureProperties`).then((reponse) => {
			setFeaturedPropertyData(reponse?.data?.message);
		});
	}, []);

	const { details } = props;

	const OnClickPropertyHandler = (propertyId) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// console.log(user?.email);
				navigate(`/property-details/${propertyId}/${details?.phoneNo}`);
			} else {
				setShowModal(true);
			}
		});
	};

	return (
		<>
			{showModal && <LoginModal setState={setShowModal} />}
			<div
				className='inner-div container-fluid my-5'
				style={{
					backgroundColor: "#e5e5e5",
				}}>
				<div className='feature_properties_main container d-md-flex justify-content-between align-items-center py-5'>
					<div className='fp_header_left container me-5'>
						<div className='card-body'>
							<p className='card-title heading-2'>Feature Properties</p>
							<p className='card-text body-1' style={{ color: "#1f26d2", fontWeight: "600" }}>
								{details?.detail11 || "We help you to get the perfect lifestyle!"}
							</p>
						</div>
						<hr />
						<div className='card-body'>
							<p className='card-text body-1' style={{ color: "#1f26d2", fontWeight: "600" }}>
								{details?.detail12 || "Naven Khara massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin."}
							</p>
							<div className='stat-1 d-flex'>
								<div className='verticle-line'></div>
								<div className='content ms-3' style={{ color: "red" }}>
									<div className='years body-1'>
										Reach out to us to get your <br /> dream space
									</div>
									<div className='heading heading-3'>
										Naveen S Khara <br />
										+91 {details?.phoneNo || "9699700777"}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='featured_properties_right container mt-5 mt-md-0' style={{ maxWidth: "500px" }}>
						<Slider {...settings}>
							{featuredPropertyData?.map((val, index) => {
								let desc = String(val.About).substring(0, String(val.About).indexOf("\n") > 0 ? String(val.About).indexOf("\n") : 70);
								return (
									// <>
									// 	<div className='d-flex' style={{ border: "none" }} key={index} onClick={() => OnClickPropertyHandler(val.id)}>
									// 		<img className='card-img-top d-block w-100' src={val.mainImg} alt='property image cap' />
									// 	</div>
									// 	<div className='overlay'>
									// 		<p className='heading-3 px-4 pt-3 mb-0'>{val.title}</p>
									// 		<p className='heading-3 px-4 pt-3 mb-0'> {val.carpetArea} sqft.</p>
									// 		<p className='property body-2  px-4' style={{ maxWidth: "10" }}>
									// 			{" "}
									// 			{/* {String(val.About).substring(0, 200)}{" "} */}
									// 			{desc}
									// 		</p>
									// 	</div>
									// </>
									<div className='img-card d-flex mb-3' onClick={() => OnClickPropertyHandler(val.id)} key={index}>
										<img className='card-img-top d-block w-100' src={val.mainImg} alt='propertyImg' />
										<div className='overlay'>
											<p className='heading-3 px-4 pt-3 mb-0'>{val.title}</p>
											<p className='heading-3 px-4 pt-3 mb-0'> {val.carpetArea} sqft.</p>
											<p className='property body-2  px-4 w-75'>
												{" "}
												{/* {String(val.About).substring(0, 200)}{" "} */}
												{desc}
											</p>
										</div>
									</div>
								);
							})}
						</Slider>
						{/* <div className="carousel slide" data-bs-ride="true">
							<div className="carousel-indicators">
								{featuredPropertyData?.map((val, index) => {
									return(
										<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
									)
								})}
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedProperties;
