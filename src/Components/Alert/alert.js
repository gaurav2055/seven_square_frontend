import React from "react";

function Alert() {
	return (
		<>
			<div className='modal' data-bs-backdrop='static'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content no-border' style={{ backgroundColor: "transparent" }}>
						<div className='d-flex justify-content-center'>
							<div className='spinner-border m-4' role='status' style={{ width: "4rem", height: "4rem", borderWidth: "0.3rem" }}>
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Alert;
