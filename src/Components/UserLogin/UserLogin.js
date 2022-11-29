import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../Firebase/FBInit";
import { RecaptchaVerifier, signInWithPhoneNumber, setPersistence, browserSessionPersistence } from "firebase/auth";

const UserLogin = () => {
	const navigate = useNavigate(); 
	const [otp, setOtp] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm();

	const setUpRecaptcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			"recaptcha-container",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					console.log("captcha Resolved");
					// userAuth();
				},
			},
			auth
		);
	};

	const userAuth = (data) => {
		setUpRecaptcha();
		const phoneNo = "+91" + data.phoneNo;
		console.log(phoneNo);
		let appVerifier = window.recaptchaVerifier;
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				signInWithPhoneNumber(auth, phoneNo, appVerifier).then((confirmationResult) => {
					alert("opt Sent");
					window.confirmationResult = confirmationResult;
					setOtp(true);
				});
			})
			.catch((error) => {
				// Handle Errors here.
				console.log(error.message);
			});
	};

	const onSubmitOtp = (data) => {
		const code = data.otp;
		const optConfirm = window.confirmationResult;
		optConfirm.confirm(code).then((result) => {
			// let user = result.user;
			console.log("user Signed in");
			navigate("/property-details");
		});
	};

	return (
		<>
			<div className='conntainer p-3 align-items-center'>
				<p className='h3 text-center'>First Step Towards Your dream journey</p>
				<form onSubmit={handleSubmit(userAuth)}>
					<div id='recaptcha-container'></div>
					<div className='row g-3'>
						<div className='col md'>
							<div className='form-floating mb-2'>
								<input type='text' className='form-control' id='FName' placeholder='First name' {...register("FName", { required: true })} />
								<label htmlFor='FName'>First Name</label>
							</div>
						</div>
						<div className='col md'>
							<div className='form-floating mb-2'>
								<input type='text' className='form-control' id='LName' placeholder='Last name' {...register("LName", { required: true })} />
								<label htmlFor='LName'>Last Name</label>
							</div>
						</div>
					</div>
					<div className='row g-3 align-items-center'>
						<div className='col md'>
							<div className='row'>
								<div className='form-floating mb-2'>
									<input type='number' className='form-control' id='phoneNo' placeholder='Phone Number' {...register("phoneNo", { required: true, minLength: 10, maxLength: 10 })} />
									<label htmlFor='phoneNo'>
										<span style={{ margin: "5px" }} />
										Phone No
									</label>
								</div>
							</div>
							<div className='row'>
								<div className='form-floating mb-2'>
									<select {...register("action", { required: true })} className='form-select'>
										<option defaultValue='Buy a Residential'>Buy a Residential</option>
										<option value='Rent a Residential'>Rent a Residential</option>
										<option value='Sell a Residential'>Sell a Residential</option>
										<option value='Put up a Residential for Rent'>Put up a Residential for Rent</option>
										<option value='Buy a Residential'>Buy a Commercial</option>
										<option value='Rent a Residential'>Rent a Commercial</option>
										<option value='Sell a Residential'>Sell a Commercial</option>
										<option value='Put up a Residential for Rent'>Put up a Commercial for Rent</option>
									</select>
								</div>
							</div>
						</div>
						<div className='col md'>
							<div className='form-floating'>
								<textarea className='form-control' placeholder='Address' id='Address' style={{ height: "6.25rem" }} {...register("Address", { required: true })} />
								<label htmlFor='Address'>Your Address</label>
							</div>
						</div>
					</div>
					<div>
						<button type='submit' className='btn btn-primary mb-3'>
							Submit
						</button>
					</div>
				</form>
				{otp && (
					<form onSubmit={handleSubmit2(onSubmitOtp)}>
						<div className='row g-3'>
							<div className='col md'>
								<div className='form-floating mb-2'>
									<input type='text' className='form-control' {...register2("otp", { register: true })} placeholder='Enter Otp' />
									<label htmlFor='otp'>Otp</label>
								</div>
							</div>
							<div className='col md'>
								<div className='form-floating mb-2'>
									<button type='submit' className='btn btn-primary mb-3'>
										Submit
									</button>
								</div>
							</div>
						</div>
					</form>
				)}
			</div>
		</>
	);
};

export default UserLogin;
