import React, { useEffect } from "react";

import double_quote from "../../assets/double_quote.png";
import testimonoialsObj from "../../Data/TestimonialObj";
import star from "../../assets/star.png";
import double_quote_white from "../../assets/double_quote_white.png";
import double_quote_black from "../../assets/double_quote_black.png";
import arrow from "../../assets/arrow.png";
import axios from "axios";
import { useState } from "react";

const TestimonialCard = () => {
	const [testimonialData, setTestimonialData] = useState([]);
	const devBaseUrl = "https://sevensquarerealtors.up.railway.app/";

	useEffect(() => {
		axios.get(`${devBaseUrl}api/testimonial/getThreeTestimonials`).then((response) => {
			setTestimonialData(response.data.message);
		});
	}, []);

	// console.log(testimonialData);

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
								<div className='col-lg-3 mt-3 mt-sm-0' index={index}>
									<div className='card p-3 mt-2' style={{ backgroundColor: "#000", color: "#fff", border: "none" }}>
										<img src={double_quote_black} alt='double_quote_img' style={{ width: "48px" }} />
										<div className='card-body'>
											<p className={"card-text body-1"}> {val?.testimonial} </p>
										</div>
										<ul className='list-group list-group-flush'>
											<li className='list-group-item d-flex justify-content-between' style={{ backgroundColor: "#000", color: "#fff", border: "none" }}>
												<p className='heading-3'> {val?.name} </p>
												<div className='ratings d-flex justify-content-space align-items-start'>
													<img src={star} alt='star icon' />
													<p className='ms-2'>
														{" "}
														<b> 5.4 </b>{" "}
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							);
						})}
						{/* <div className="col-sm-3 mt-3 mt-sm-0">
                <div className="card p-3" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                    <img src={double_quote_white} alt="double_quote_img"  style={{width:'48px'}}/>
                    <div className="card-body">
                        <p className={"card-text body-1"}> {testimonialData[0].testimonial} </p>
                    </div>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item d-flex justify-content-between" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                            <p className="heading-3"> {testimonialData[0].name} </p>
                            <div className="ratings d-flex justify-content-space align-items-start">
                                <img src={star} alt="star icon" />
                                <p className="ms-2"> <b> 1.2 </b> </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-3 mt-3 mt-sm-0">
                <div className="card p-3">
                    <img src={double_quote_black} alt="double_quote_img"  style={{width:'48px'}}/>
                    <div className="card-body">
                        <p className={"card-text body-1"}> {testimonialData[1].testimonial} </p>
                    </div>
                    <ul className="list-group list-group-flush" >
                    <li className="list-group-item d-flex justify-content-between" style={{ border:'none'}}>
                            <p className="heading-3"> {testimonialData[1].name} </p>
                            <div className="ratings d-flex justify-content-space align-items-start">
                                <img src={star} alt="star icon" />
                                <p className="ms-2"> <b> 1.2 </b> </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-3 mt-3 mt-sm-0">
                <div className="card p-3" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                    <img src={double_quote_white} alt="double_quote_img"  style={{width:'48px'}}/>
                    <div className="card-body">
                        <p className={"card-text body-1"}> {testimonialData[2].testimonial} </p>
                    </div>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item d-flex justify-content-between" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                            <p className="heading-3"> {testimonialData[2].name} </p>
                            <div className="ratings d-flex justify-content-space align-items-start">
                                <img src={star} alt="star icon" />
                                <p className="ms-2"> <b> 1.2 </b> </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
						{/* <div className="col-sm-3 mt-3 mt-sm-0">
                <div className="card p-3" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                    <img src={double_quote_white} alt="double_quote_img"  style={{width:'48px'}}/>
                    <div className="card-body">
                        <p className={"card-text body-1"}> {testimonialData[0].testimonial} </p>
                    </div>
                    <ul className="list-group list-group-flush" >
                    <li className="list-group-item d-flex justify-content-between" style={{backgroundColor: '#000', color: '#fff', border:'none'}}>
                            <p className="heading-3"> {testimonialData[0].name} </p>
                            <div className="ratings d-flex justify-content-space align-items-start">
                                <img src={star} alt="star icon" />
                                <p className="ms-2"> <b> 1.2 </b> </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}

						{/* <div className="container">
            <div className="row">
                {testimonoialsObj.map((val, index)=>{
                    return(
                        <div className="col-sm-3 mt-3 mt-sm-0" key={index}>
                            <div className="card p-3" style={{backgroundColor: `${val.bodyBackground}`, color: `${val.bodyTextColor}`, border:'none'}}>
                                {val.isDoubleQuote && <img src={val.icon} alt="double_quote_img"  style={{width:'48px'}}/>}
                                <div className="card-body">
                                    <h5 className={`card-title ${val.titleStyling}`}>{val.cardTitle}</h5>
                                    <p className={`card-text ${val.bodyStyling}`}>{val.comment}</p>
                                </div>
                                { val.isStar?
                                    <ul className="list-group list-group-flush" >
                                        <li className="list-group-item d-flex justify-content-between" style={{backgroundColor: `${val.bodyBackground}`, color: `${val.bodyTextColor}`, border:'none'}}>
                                                <p className={`${val.authorStyling}`}> {val.author} </p>
                                                <div className="ratings d-flex justify-content-space align-items-start">
                                                    {val.isStar && <img src={star} alt="star icon" />}
                                                    <p className="ms-2"> <b> {val.ratings} </b> </p>
                                                </div>
                                        </li>
                                    </ul> : <img src={val.arrow} alt='arrow_img'/>
                                }
                            </div>
                        </div>
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

export default TestimonialCard;
