import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./LoginModal.css";
import { auth } from "../../Firebase/FBInit";
import { RecaptchaVerifier, signInWithPhoneNumber, setPersistence, browserSessionPersistence, onAuthStateChanged, signOut } from "firebase/auth";
import { detailsApi, userApi } from "../../axios";
import Alert from "../Alert/alert";

const LoginModal = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { setState } = props;
	const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm();
	const [otp, setOtp] = useState(false);
	const [login, setLogin] = useState(true);
	const [loader, setLoader] = useState(false);
	const [detail, setDetail] = useState({});
	const [counter, setCounter] = useState(0);
	const [recaptcha, setRecaptcha] = useState({});
	const [userData, setUserData] = useState({});
	const [alert, setAlert] = useState(false);
	const [user, setUser] = useState(false);
	const [SO, setSO] = useState(false);
	const [alertMsg, setAlertMsg] = useState();

	useEffect(() => {
		const setData = async () => {
			try {
				const response = await detailsApi.get("/getDetails");
				setDetail(response.data.message);
			} catch (error) {}
		};
		setData();
	}, []);

	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	const close = () => {
		setState(false);
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user && !user?.email) {
				console.log(user.phoneNumber.substring(3));
				window.phoneNo = user.phoneNumber.substring(3);
				setUser(true);
			} else {
				setUser(false);
			}
		});
	}, []);

	useEffect(() => {
		const getUser = async () => {
			// debugger;
			if (user) {
				const PNo = window.phoneNo;
				const data = { phoneNo: PNo };
				try {
					console.log(user);
					const res = await userApi.get(`/getSingleUser?phoneNo=${PNo}`, data);
					console.log(res.data.message, "res");
					reset(res.data.message);
				} catch (error) {}
			} else {
				console.log(false);
			}
		};
		getUser();
	}, [user]);

	useEffect(() => {
		// debugger;
		if (Object.keys(recaptcha).length !== 0) {
			const phoneNo = "+91" + userData.phoneNo;
			window.phoneNo = userData.phoneNo;
			let appVerifier = recaptcha;
			setPersistence(auth, browserSessionPersistence)
				.then(() => {
					signInWithPhoneNumber(auth, phoneNo, appVerifier).then((confirmationResult) => {
						window.confirmationResult = confirmationResult;
						setLogin(false);
						setOtp(true);
						setAlert(true);
						setAlertMsg("Otp has been sent");
						setLoader(false);
						setCounter(30);
						setTimeout(() => {
							setAlert(false);
						}, 4000);
					});
				})
				.catch((error) => {
					// Handle Errors here.
					// console.log("error here");
					// console.log(error.message);
					setLoader(false);
					alert(error.message);
				});
		}
	}, [recaptcha]);

	const setUpRecaptcha = async () => {
		var recaptchaVarifier = await new RecaptchaVerifier(
			"recaptcha-container",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					// console.log("captcha Resolved");
					// console.log(response);
					// userAuth();
				},
			},
			auth
		);
		// const recap = recaptchaVarifier;
		return recaptchaVarifier;
		// await setRecaptcha(recap);
		// recaptchaVarifier = undefined;
	};

	const onSubmit = async (data) => {
		// debugger;
		setLoader(true);
		if (Object.keys(recaptcha).length === 0) {
			// setRecaptcha({});
			const recap = await setUpRecaptcha();
			// console.log(recaptcha);
			setUserData(data);
			setRecaptcha(recap);
			return;
		}
		const phoneNo = "+91" + data.phoneNo;
		window.phoneNo = data.phoneNo;
		let appVerifier = recaptcha;
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				signInWithPhoneNumber(auth, phoneNo, appVerifier)
					.then((confirmationResult) => {
						window.confirmationResult = confirmationResult;
						setLogin(false);
						setOtp(true);
						setAlert(true);
						setAlertMsg("Otp has been sent");
						setLoader(false);
						setCounter(30);
						setTimeout(() => {
							setAlert(false);
						}, 4000);
					})
					.catch((error) => {
						// Handle Errors here.
						// console.log("error here");
						// console.log(error.message);
						setLoader(false);
						alert(error.message);
					});
			})
			.catch((error) => {
				// Handle Errors here.
				// console.log("error here");
				// console.log(error.message);
				setLoader(false);
				alert(error.message);
			});

		setLoader(false);
		// console.log(window.recaptchaVerifier);
	};

	const onSubmit2 = async (data) => {
		setLoader(true);
		try {
			userApi.post("/addUser", data);
		} catch (error) {
			// console.log(error.response.data.message);
		}
		setAlertMsg("Details Updated");
		setAlert(true);
		setLoader(false);
		// setState(false);
	};

	const onSubmitOtp = (data) => {
		const code = data.otp;
		const optConfirm = window.confirmationResult;
		optConfirm.confirm(code).then((result) => {
			// let user = result.user;
			// console.log(result.user);
			try {
				userApi.post("/addUser", userData);
			} catch (error) {
				// console.log(error.response.data.message);
			}

			// console.log("user Signed in");
			// navigate("/property-details");
			setState(false);
		});
	};

	return (
		<>
			{loader && <Alert />}
			<div className='modal'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Login
							</h5>
							<button type='button' className='btn-close' onClick={close}></button>
						</div>
						<div className='modal-body'>
							{alert && (
								<div className='alert alert-primary alert-dismissible fade show' role='alert'>
									{alertMsg}
								</div>
							)}
							<p className='body-1'>{detail.detail15 || "First Step Towards Your dream journey."}</p>
							<div id='recaptcha-container'></div>
							{login && (
								<form onSubmit={handleSubmit(user ? onSubmit2 : onSubmit)}>
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
												<input type='number' id='inputNumber' disabled={user} className='form-control' placeholder='Mobile Number' {...register("phoneNo", { required: "Your Phone Number is Required", minLength: { value: 10, message: "A 10 digit phone number is required" }, maxLength: { value: 10, message: "A 10 digit phone number is required" } })} />
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
														<option value='' selected disabled>
															Choose your Preference
														</option>
														<option value='Buy'>Buy Property</option>
														<option value='Rent'>Rent a Property</option>
														<option value='Sell'>Sell a Property</option>
														<option value='List for Rent'>List a property for Rent</option>
													</select>
													{/* {getValues("intention") === "" && <p className='validation'>This field is required</p>} */}
													{errors.intention && <p className='validation'>errors.intention.message</p>}
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
										{user && (
											<div
												className='btn btn-primary mt-3 mx-3'
												onClick={() => {
													signOut(auth)
														.then(() => {
															setAlert(true);
															setAlertMsg("Logged Out");
															reset();
															setTimeout(() => {
																setAlert(false);
															}, 4000);
															// Sign-out successful.
														})
														.catch((error) => {
															// An error happened.
														});
												}}>
												LogOut
											</div>
										)}
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
										className='btn btn-link btn-sm my-3 me-2 px-4'
										onClick={() => {
											if (counter === 0) {
												onSubmit(userData);
											}
										}}>
										Resend otp {counter !== 0 && <p>{"in ..00:" + counter > 9 ? counter : "0" + counter}</p>}
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
