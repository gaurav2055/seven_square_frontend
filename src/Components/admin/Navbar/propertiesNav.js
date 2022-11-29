import React from "react";

function PropertiesNav(props) {
	return (
		<nav class='navbar navbar-expand navbar-dark bg-dark'>
			<div class='container-fluid'>
				<div class='collapse navbar-collapse' id='navbarNavDarkDropdown'>
					<ul class='navbar-nav'>
						<li class='nav-item dropdown'>
							<a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
								Dropdown
							</a>
							<ul class='dropdown-menu dropdown-menu-dark'>
								<li>
									<a class='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Another action
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default PropertiesNav;
