import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import seven_square_realtors_logo_white from "../../../assets/seven_square_logo.png";
import { auth } from "../../../Firebase/FBInit";

function NavBar() {
	const navigate = useNavigate();
	const logout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/admin");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-dark fixed-top'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/admin-properties'>
						<img className='' src={seven_square_realtors_logo_white} alt='logo' style={{ maxHeight: "49px" }} />
					</Link>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item px-2'>
								<Link className='nav-link text-white' aria-current='page' to='/admin-properties'>
									Properties
								</Link>
							</li>
							<li className='nav-items px-2'>
								<Link className='nav-link text-white' aria-current='page' to='/admin-users'>
									Users
								</Link>
							</li>
							<li className='nav-items px-2'>
								<Link className='nav-link text-white' aria-current='page' to='/admin-testimonials'>
									Testimonials
								</Link>
							</li>
							<li className='nav-items px-2'>
								<Link className='nav-link text-white' aria-current='page' to='/admin-AddProperties'>
									Add Properties
								</Link>
							</li>
							<li className='nav-items px-2'>
								<Link className='nav-link text-white' aria-current='page' to='/admin-details'>
									Edit Details
								</Link>
							</li>
							<li className='nav-items px-2'>
								<Link className='nav-link text-white' aria-current='page' to='#' onClick={logout}>
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
