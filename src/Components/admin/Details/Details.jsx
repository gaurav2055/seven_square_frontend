import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { detailsApi } from "../../../axios";
import { auth } from "../../../Firebase/FBInit";
import NavBar from "../Navbar/NavBar";

import "./Details.css";

function Details() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		const setData = async () => {
			onAuthStateChanged(auth, async (user) => {
				if (user && user?.email) {
					try {
						const response = await detailsApi.get("/getDetails");
						reset(response.data.message);
					} catch (error) {
						alert(error.message);
					}
				} else {
					// console.log("no user");
					navigate("/admin");
				}
			});
		};
		setData();
	}, []);

	const updateDetails = async (data) => {
		// console.log(data);
		try {
			const response = await detailsApi.put("/updateDetails", data);
			alert("property added");
		} catch (error) {
			// console.log(error.message);
			alert(error.response.data.message);
		}
	};

	return (
		<>
			<NavBar />
			<div className=' headings container mt-5'>
				<p className='heading-1 mb-1'>Details</p>
				<p className='body-1 text-muted'>Edit page details here</p>
				<hr />
			</div>
			<div className='container'>
				<form className='mb-5' onSubmit={handleSubmit(updateDetails)}>
					<div>
						<p className='heading-2'>Personal Details</p>
					</div>
					<div className='row pb-3'>
						<div className='col-md my-2'>
							<div className='form-floating'>
								<input type='text' className='form-control' id='phoneNo' placeholder='Phone No' {...register("phoneNo", { required: "Required" })} />
								<label htmlFor='phoneNo'>Phone No</label>
								{errors.phoneNo && <p className='validation'>{errors.phoneNo.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div className='form-floating'>
								<input type='text' className='form-control' id='email' placeholder='Email' {...register("email", { required: "Required" })} />
								<label htmlFor='email'>Email</label>
								{errors.email && <p className='validation'>{errors.email.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div className='form-floating'>
								<textarea className='form-control' id='brief' placeholder='Brief' {...register("brief", { required: "Required" })} />
								<label htmlFor='brief'>Brief</label>
								{errors.brief && <p className='validation'>{errors.brief.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div className='form-floating'>
								<textarea className='form-control' id='address' placeholder='Address' {...register("address", { required: "Required" })} />
								<label htmlFor='address'>Address</label>
								{errors.address && <p className='validation'>{errors.address.message}</p>}
							</div>
						</div>
					</div>
					<div>
						<p className='heading-2'>Hero Section:</p>
						<p className='heading-3'>Left Side</p>
					</div>
					<div className='row mb-3'>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>
									1<sup>st</sup> Line inside the squaare
								</span>
							</div>
							<div className='form-floating'>
								<input type='text' className='form-control' id='detail1' placeholder='Detail 1' {...register("detail1", { required: "Required" })} />
								<label htmlFor='detail1'>Detail 1</label>
								{errors.detail1 && <p className='validation'>{errors.detail1.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>
									2<sup>nd</sup> Line inside the square
								</span>
							</div>
							<div className='form-floating'>
								<input type='text' className='form-control' id='detail2' placeholder='Detail 2' {...register("detail2", { required: "Required" })} />
								<label htmlFor='detail2'>Detail 2</label>
								{errors.detail2 && <p className='validation'>{errors.detail2.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>Paragraph bellow the square</span>
							</div>
							<div className='form-floating'>
								<textarea className='form-control' id='detail3' placeholder='Detail 3' {...register("detail3", { required: "Required" })} />
								<label htmlFor='detail3'>Detail 3</label>
								{errors.detail3 && <p className='validation'>{errors.detail3.message}</p>}
							</div>
						</div>
					</div>
					<div>
						<p className='heading-3'>Right Side</p>
					</div>
					<div className='row pb-3'>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>Buy Property</span>
							</div>
							<div className='form-floating'>
								<textarea className='form-control' id='detail4' placeholder='Buy Property' {...register("detail4", { required: "Required" })} />
								<label htmlFor='detail4'>Buy Property</label>
								{errors.detail4 && <p className='validation'>{errors.detail4.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>Rent Property</span>
							</div>
							<div className='form-floating'>
								<textarea className='form-control' id='detail5' placeholder='Rent Property' {...register("detail5", { required: "Required" })} />
								<label htmlFor='detail 5'>Rent Property</label>
								{errors.detail5 && <p className='validation'>{errors.detail5.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>Sell Property</span>
							</div>
							<div className='form-floating'>
								<textarea className='form-control' id='detail6' placeholder='Sell Property' {...register("detail6", { required: "Required" })} />
								<label htmlFor='detail 6'>Sell Property</label>
								{errors.detail6 && <p className='validation'>{errors.detail6.message}</p>}
							</div>
						</div>
						<div className='col-md my-2'>
							<div>
								<span className='form-text'>Rent out your Property</span>
							</div>
							<div className='form-floating'>
								<textarea className='form-control' id='detail7' placeholder='Rent out your Property' {...register("detail7", { required: "Required" })} />
								<label htmlFor='detail 7'>Rent out your Property</label>
								{errors.detail7 && <p className='validation'>{errors.detail7.message}</p>}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<p className='heading-2'>About</p>
					</div>
					<div className='row pb-3'>
						<div className='col-md-6'>
							<div>
								<span className='form-text'>About paragraph</span>
							</div>
							<div className='form-floating'>
								<textarea name='' id='detail8' className='form-control' placeholder='About para' {...register("detail8", { required: "Required" })} />
								<label htmlFor='detail8'>About para</label>
								{errors.detail8 && <p className='validation'>{errors.detail8.message}</p>}
							</div>
						</div>
						<div className='col-md-3'>
							<div>
								<span className='form-text'>Years Of Experience</span>
							</div>
							<div className='form-floating'>
								<input className='form-control' id='detail9' placeholder='Experience' {...register("detail9", { required: "Required" })} />
								<label htmlFor='detail9'>Experience</label>
								{errors.detail9 && <p className='validation'>{errors.detail9.message}</p>}
							</div>
						</div>
						<div className='col-md-3'>
							<div>
								<span className='form-text'>Years Of Experience</span>
							</div>
							<div className='form-floating'>
								<input className='form-control' id='detail10' placeholder='Customers Served' {...register("detail10", { required: "Required" })} />
								<label htmlFor='detail10'>Customers Served</label>
								{errors.detail10 && <p className='validation'>{errors.detail10.message}</p>}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<p className='heading-2'>Features Properties</p>
					</div>
					<div className='row pb-3'>
						<div className='col-md'>
							<div>
								<span className='form-text'>
									1<sup>st</sup> paragraph
								</span>
							</div>
							<div className='form-floating'>
								<textarea name='' id='detail11' className='form-control' placeholder='First paragraph' {...register("detail11", { required: "Required" })} />
								<label htmlFor='detail11'>First paragraph</label>
								{errors.detail11 && <p className='validation'>{errors.detail11.message}</p>}
							</div>
						</div>
						<div className='col-md'>
							<div>
								<span className='form-text'>
									2<sup>nd</sup> paragraph
								</span>
							</div>
							<div className='form-floating'>
								<textarea name='' id='detail12' className='form-control' placeholder='Second paragraph' {...register("detail12", { required: "Required" })} />
								<label htmlFor='detail12'>Second paragraph</label>
								{errors.detail12 && <p className='validation'>{errors.detail12.message}</p>}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<p className='heading-2'>Plp Page:</p>
					</div>
					<div className='row pb-3'>
						<div className='col-md'>
							<div>
								<span className='form-text'>Heading</span>
							</div>
							<div className='form-floating'>
								<textarea name='' id='detail13' className='form-control' placeholder='Heading' {...register("detail13", { required: "Required" })} />
								<label htmlFor='detail13'>Heading</label>
								{errors.detail13 && <p className='validation'>{errors.detail13.message}</p>}
							</div>
						</div>
						<div className='col-md'>
							<div>
								<span className='form-text'>Sub Heading</span>
							</div>
							<div className='form-floating'>
								<textarea name='' id='detail14' className='form-control' placeholder='Sub Heading' {...register("detail14", { required: "Required" })} />
								<label htmlFor='detail14'>Sub Heading</label>
								{errors.detail14 && <p className='validation'>{errors.detail14.message}</p>}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<p className='heading-2'>Login Modal</p>
					</div>
					<div>
						<span className='form-text'>Heading</span>
					</div>
					<div className='form-floating'>
						<textarea name='' id='detail15' className='form-control' placeholder='Heading' {...register("detail15", { required: "Required" })} />
						<label htmlFor='detail15'>Heading</label>
						{errors.detail15 && <p className='validation'>{errors.detail15.message}</p>}
					</div>
					<button type='submit' className='btn btn-primary my-3'>
						Update
					</button>
				</form>
			</div>
		</>
	);
}

export default Details;
