import React from "react";
import logo from "../../../assets/seven_square_logo.png";
import "./login.css";

function Login() {
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
							<form className='pt-3 mb-5'>
								<div class='mb-3 px-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Email address
									</label>
									<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
								</div>
								<div class='mb-3 px-3'>
									<label for='exampleInputPassword1' class='form-label'>
										Password
									</label>
									<input type='password' class='form-control' id='exampleInputPassword1' />
								</div>
								<div className='text-center'>
									<button type='submit' class='btn btn-primary'>
										Login
									</button>
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
