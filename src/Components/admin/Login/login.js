import React, { useState } from "react";

import { useForm } from "react-hook-form";

import logo from "../../../assets/seven_square_logo.png";
import "./login.css";

import { auth } from "../../../Firebase/FBInit";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const onSubmit = (data) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				navigate("/admin-properties");
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				setErrorMessage(error.message);
			});
	};

	return (
		<>
			{/* <div className='container'> */}
			<div className='modal center'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='container'>
							<div className='text-center mt-5 mb-4'>
								<img className='img-fluid my-2' src={logo} alt='Logo' />
								<h2>Login</h2>
							</div>
							<form className='pt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
								<div className='mb-3 px-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Email address
									</label>
									<input type='email' className='form-control' {...register("email", { required: "Required" })} />
									{errors.email && <p className='validation'>Required</p>}
								</div>
								<div className='mb-3 px-3'>
									<label htmlFor='exampleInputPassword1' className='form-label'>
										Password
									</label>
									<input type='password' className='form-control' {...register("password", { required: "Required" })} />
								</div>
								<div className='text-center'>
									<button type='submit' className='btn btn-primary'>
										Login
									</button>
									{errorMessage && <p className='validation'>Wrong Email or Password</p>}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default Login;
