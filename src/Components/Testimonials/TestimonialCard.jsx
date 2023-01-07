import React, { useEffect } from "react";

import double_quote from "../../assets/double_quote.png";
import testimonoialsObj from "../../Data/TestimonialObj";
import star from "../../assets/star.png";
import double_quote_white from "../../assets/double_quote_white.png";
import double_quote_black from "../../assets/double_quote_black.png";
import arrow from "../../assets/arrow.png";
import axios from "axios";
import { useState } from "react";
import { testApi } from "../../axios";

const TestimonialCard = () => {
	const [testimonialData, setTestimonialData] = useState([]);
	const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

	useEffect(() => {
		testApi(`/getThreeTestimonials`).then((response) => {
			setTestimonialData(response.data.message);
		});
	}, []);

	// // console.log(testimonialData);

	return (
		<>
			<div className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 mt-3 mt-sm-0' style={{ maxHeight: "500px" }}>
							<div className='card p-3' style={{ border: "none" }}>
								<div className='card-body'>
									<h5 className='card-title heading-1'>Find Out what our Customers think about us</h5>
								</div>
								{/* <img src={arrow} alt='arrow_img' /> */}
							</div>
						</div>
						{testimonialData?.map((val, index) => {
							return (
								<div className='col-lg-3 mt-3 mt-lg-0' index={index} key={index}>
									<div className='card p-3 mt-2' style={{ backgroundColor: "#fff", color: "rgb(255,0,0)", boxShadow: "5px 7px 10px #000" }}>
										<img src={double_quote_black} alt='double_quote_img' style={{ width: "48px" }} />
										<div className='card-body'>
											<p className={"card-text body-1"}> {val?.testimonial} </p>
											<p className='heading-3'> ~ {val?.name} </p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialCard;
