import React from 'react'

const LoginModal = () => {
  return (
    <>
    {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal">trigger modal</button> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="from-content">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <label htmlFor="inputName" className="col-form-label">Name</label>
                            </div>
                            <div className="col-12">
                                <input type="text" id="inputText" className="form-control" aria-describedby="textHelpInline"/>
                            </div>
                            <div className="col-12">
                                <span id="textHelpInline d-none" className="form-text">
                                    Enter your Name.
                                </span>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputNumber" className="col-form-label">Mobile Number</label>
                            </div>
                            <div className="col-12">
                                <input type="number" id="inputNumber" className="form-control" aria-describedby="numberHelpInline"/>
                            </div>
                            <div className="col-12">
                                <span id="numberHelpInline" className="form-text">
                                    Enter Your Mobile Number.
                                </span>
                            </div>
                            <div className="col-6 mt-3">
                                <div className="dropdown ps-0">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'none', border:'none'}}>
                                        Preference
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item">Buy Property</a></li>
                                        <li><a className="dropdown-item">Rent out Property</a></li>
                                        <li><a className="dropdown-item">Sell Property</a></li>
                                        <li><a className="dropdown-item">Rent a Property</a></li>
                                    </ul>                         
                                </div>
                            </div>
                            <div className="col-6 d-none">
                                <span id="dropdownHelpInline" className="form-text">
                                    Enter Your Preference.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    <button type="button" className="btn btn-dark">View Properties</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginModal