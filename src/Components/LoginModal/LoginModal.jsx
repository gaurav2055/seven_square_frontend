import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginModal.css";
import { auth } from "../../Firebase/FBInit";
import { RecaptchaVerifier, signInWithPhoneNumber, setPersistence, browserSessionPersistence } from "firebase/auth";
import { userApi } from "../../axios";
import Alert from "../Alert/alert";

const LoginModal = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();
	const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm();
	const [otp, setOtp] = useState(false);
	const [login, setLogin] = useState(true);
	const [loader, setLoader] = useState(false);

	const close = () => {
		props.setState(false);
	};

	const setUpRecaptcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			"recaptcha-container",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					console.log("captcha Resolved");
					console.log(response);
					// userAuth();
				},
			},
			auth
		);
	};

	const onSubmit = (data) => {
		// debugger;
		setLoader(true);
		if (!window.recaptchaVerifier) {
			setUpRecaptcha();
		}
		window.userData = data;
		console.log(window.recaptchaVerifier);
		const phoneNo = "+91" + data.phoneNo;
		let appVerifier = window.recaptchaVerifier;
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				signInWithPhoneNumber(auth, phoneNo, appVerifier).then((confirmationResult) => {
					alert("opt Sent");
					window.confirmationResult = confirmationResult;
					setLogin(false);
					setLoader(false);
					setOtp(true);
				});
			})
			.catch((error) => {
				// Handle Errors here.
				console.log("error here");
				console.log(error.message);
			});
	};

	const onSubmitOtp = (data) => {
		const code = data.otp;
		const optConfirm = window.confirmationResult;
		optConfirm.confirm(code).then((result) => {
			// let user = result.user;
			console.log(result.user);
			try {
				userApi.post("/addUser", window.userData);
			} catch (error) {
				console.log(error.response.data.message);
			}

			console.log("user Signed in");
			// navigate("/property-details");
			props.setState(false);
		});
	};

	return (
		<>
			{loader && <Alert />}
			<div className='modal' style={{ "z-index": "1000" }}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Login
							</h5>
							<button type='button' className='btn-close' onClick={close}></button>
						</div>
						<div className='modal-body'>
							<p className='body-1'>First Step Towards Your dream journey.</p>
							<div id='recaptcha-container'></div>
							{login && (
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='from-content'>
										<div className='row align-items-center'>
											<div className='col-12'></div>
											<div className='col-12'>
												<span id='textHelpInline d-none' className='form-text'>
													Enter your Name.
												</span>
											</div>
											<div className='col-12 form-floating'>
												<input type='text' id='inputText' className='form-control' placeholder='Name' {...register("name", { required: "Your Name is reqired" })} />
												<label htmlFor='inputName' className='col-form-label floatingInput mx-2'>
													Name
												</label>
												{errors.name && <p className='validation'>{errors.name.message}</p>}
											</div>
											<div className='col-12'>
												<span id='numberHelpInline' className='form-text'>
													Enter Your Mobile Number.
												</span>
											</div>
											<div className='col-12 form-floating'>
												<input type='number' id='inputNumber' className='form-control' placeholder='Mobile Number' {...register("phoneNo", { required: "Your Phone Number is Required" })} />
												<label htmlFor='inputNumber' className='col-form-label floatingInput mx-2'>
													Mobile Number
												</label>
												{errors.phoneNo && <p className='validation'>{errors.phoneNo.message}</p>}
											</div>
											<div className='col-12'>
												<span id='numberHelpInline' className='form-text'>
													Enter Your Address.
												</span>
											</div>
											<div className='col-12 form-floating'>
												<textarea id='inputAddress' className='form-control' placeholder='Address' {...register("address", { required: "Your Address is required" })} />
												<label htmlFor='inputAddress' className='col-form-label floatingInput mx-2'>
													Address
												</label>
												{errors.address && <p className='validation'>{errors.address.message}</p>}
											</div>
											<div className='col-6 mt-3'>
												<div className='dropdown ps-0'>
													<select className='form-select' {...register("intention", { required: "This field is required" })}>
														<option value='#' selected disabled>
															Choose your Preference
														</option>
														<option value='Buy'>Buy Property</option>
														<option value='Rent'>Rent a Property</option>
														<option value='Sell'>Sell a Property</option>
														<option value='List for Rent'>List a property for Rent</option>
													</select>
													{getValues("intention") === "#" && <p className='validation'>This field is required</p>}
												</div>
											</div>
											<div className='col-6 d-none'>
												<span id='dropdownHelpInline' className='form-text'>
													Enter Your Preference.
												</span>
											</div>
										</div>
										<button type='submit' className='btn btn-dark mt-3'>
											Submit
										</button>
									</div>
								</form>
							)}
							{otp && (
								<form onSubmit={handleSubmit2(onSubmitOtp)}>
									<div className='col md'>
										<div className='form-floating mb-2'>
											<input type='text' className='form-control' {...register2("otp", { register: true })} placeholder='Enter Otp' />
											<label htmlFor='otp'>Otp</label>
										</div>
									</div>
									<div
										className='btn btn-primary btn-sm my-3 me-2 px-4'
										onClick={() => {
											onSubmit(window.userData);
										}}>
										Resend otp
									</div>
									<div
										className='btn btn-primary btn-sm my-3 px-4'
										onClick={() => {
											setOtp(false);
											setLogin(true);
										}}>
										Change Details
									</div>
									<div className='col md'>
										<div className='form-floating mb-2'>
											<button type='submit' className='btn btn-primary mb-3'>
												Submit otp and View Properties
											</button>
										</div>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginModal;

{
	/* <div id='recaptcha-container'></div>
								<div className='row'>
									<div className='col-12'>
										<span id='textHelpInline d-none' className='form-text'>
											Enter your Name.
										</span>
									</div>
									<div className='col-12 form-floating'>
										<input type='text' id='inputText' className='form-control' placeholder='Name' {...register("name", { required: "Your Name is reqired" })} />
										<label htmlFor='inputName' className='col-form-label floatingInput mx-2'>
											Name
										</label>
										{errors.name && <p className='validation'>{errors.name.message}</p>}
									</div>
								</div>
								<div className='row g-3 align-items-center'>
									<div className='col md'>
										<div className='row mb-2'>
											<div className='col-12'>
												<span id='numberHelpInline' className='form-text'>
													Enter Your Mobile Number.
												</span>
											</div>
											<div className='col-12 form-floating'>
												<input type='number' id='inputNumber' className='form-control' placeholder='Mobile Number' {...register("phoneNo", { required: "Your Phone Number is Required" })} />
												<label htmlFor='inputNumber' className='col-form-label floatingInput mx-2'>
													Mobile Number
												</label>
												{errors.phoneNo && <p className='validation'>{errors.phoneNo.message}</p>}
											</div>
										</div>
										<div className='row'>
											<div className='form-floating mb-2'>
												<select className='form-select' {...register("intention", { required: "This field is required" })}>
													<option value='' selected disabled>
														Choose your Preference
													</option>
													<option value='Buy'>Buy Property</option>
													<option value='Rent'>Rent a Property</option>
													<option value='Sell'>Sell a Property</option>
													<option value='List for Rent'>List a property for Rent</option>
												</select>
												{getValues("intention") == "" && <p className='validation'>This field is required</p>}
											</div>
										</div>
									</div>
									<div className='col md'>
										<div className='col-12'>
											<span id='numberHelpInline' className='form-text'>
												Enter Your Address.
											</span>
										</div>
										<div className='col-12 form-floating'>
											<textarea id='inputAddress' className='form-control' placeholder='Address' {...register("address", { required: "Your Address is required" })} style={{ height: "6.25rem" }} />
											<label htmlFor='inputAddress' className='col-form-label floatingInput mx-2'>
												Address
											</label>
											{errors.address && <p className='validation'>{errors.address.message}</p>}
										</div>
									</div>
								</div>
								<div>
									<button type='submit' className='btn btn-primary mb-3'>
										Submit
									</button>
								</div> */
}
