import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/FBInit";

import UserLogin from "../UserLogin/UserLogin";

import "./PropertyListing.css";

import imagesArray from "../../Data/Images";

const PropertiesListing = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const OnClickPropertyHandler = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// const uid = user.uid;
				navigate("/property-details");
				// ...
			} else {
				// User is signed out
				// ...
				setShow(true);
			}
		});
	};

	return (
		<>
			<div className='container mt-4'>
				<div className='masonry'>
					<div className='img-card' onClick={OnClickPropertyHandler}>
						<img src={imagesArray[0].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[1].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[2].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[3].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[4].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[5].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
					<div className='img-card mt-3'>
						<img src={imagesArray[6].img} alt='propertyImg' />
						<div className='overlay'>
							<p className='h6 px-4 pt-3'> 1200 sqft. </p>
							<p className='property px-4'>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius consectetur omnis!{" "}
							</p>
						</div>
					</div>
				</div>
				{show && (
					<div className='modal modal-lg' tabIndex='-1' role='dialog'>
						<div className='modal-dialog modal-dialog-centered' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<button
										type='button'
										className='close'
										onClick={() => {
											setShow(false);
										}}
									>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
								<div className='modal-body'>
									<UserLogin />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default PropertiesListing;
