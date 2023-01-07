import React from "react";

import "./Card.css";

import youtube from "../../assets/youtube.png";

const Card = (props) => {
	// const {
	//   About,
	//   address,
	//   title,
	//   propertyActionType
	// } = props?.data

	return (
		<>
			<div className='card-container p-4 ms-md-5' style={{ maxWidth: "600px", maxHeight: "800px" }}>
				{props?.data?.propertyActionType === "Buy" || props?.data?.propertyActionType === "Rent" ? (
					<span className='badge bg-primary mb-2 heading-3'>{props?.data?.propertyActionType || "Buy"}</span>
				) : (
					<>
						<span className='badge bg-primary mb-2 heading-3'>{props?.data?.propertyActionType?.match(/[A-Z][a-z]+/g)[0] || "Buy"}</span>
						<span className='badge bg-danger ms-2 mb-2 heading-3'>New</span>
					</>
				)}
				<p className='heading-2'>{props?.data?.title || "Hill Crest,16th Road, Bandra West"}</p>
				<p className='body-2'>{props?.data?.address || "16th Road (Bandra, Maharashtra, IN - 400050)"}</p>

				<p className='heading-3 mb-0'>About</p>
				<p className='body-2'>{String(props?.data?.About).substring(0, 180) || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit congue sodales. Nulla eget ex odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nulla ipsam provident!"}</p>

				{props?.data?.ytLink && (
					<div className='container d-flex  align-items-start mt-4'>
						<div className=''>
							<img src={youtube} alt='YouTube' />
						</div>
						<div className='ms-3 mt-3'>
							<p>{props?.data?.ytLink}</p>
						</div>
					</div>
				)}
				<hr />

				<div className=' container name-price-tag d-flex justify-content-between align-items-start mt-4'>
					<div className='price-tag'>
						<p className='mb-0'>Starting at</p>
						<p className='heading-3'>₹ {props?.data?.price || "72.2 L"}</p>
					</div>
					<div className='name-tag'>
						<p className='mb-0 body-2'>Naven Khara</p>
						<p className='heading-3'>+91 {props.details || "lols"}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
