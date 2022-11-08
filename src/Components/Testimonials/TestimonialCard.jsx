import React from 'react'

import double_quote from '../../assets/double_quote.png'
import testimonoialsObj from '../../Data/TestimonialObj'
import star from '../../assets/star.png'

const TestimonialCard = () => {
  return (
    <>
    <div className='mt-5'>
        <div className="testimonial-header text-center">
            <p className="h4">Testimonials</p>
            <p className="">massa massa massa nisi. Aliquam quis ante ultricies arcu tincidunt bibendum ac sed enim. Sed ultrices et arcu quis sollicitudin. massa massa massa nisi.</p>
        </div>
        <div className="container">
            <div className="row">
                {testimonoialsObj.map((val, index)=>{
                    return(
                        <div className="col-sm-3 mt-3 mt-sm-0">
                            <div class="card p-3" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', border:'none'}}>
                                <img className='w-25' src={double_quote} alt="double_quote_img" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">{val.comment}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between">
                                        {/* <div className="d-flex justify-content-space align-items-center"> */}
                                            {val.author}
                                            <div className="ratings d-flex justify-content-space align-items-start">
                                                <img src={star} alt="star icon" />
                                                <p className="ms-2"> <b> {val.ratings} </b> </p>
                                            </div>
                                        {/* </div> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
    </>
  )
}

export default TestimonialCard
