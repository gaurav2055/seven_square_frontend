import React from 'react'

import double_quote from '../../assets/double_quote.png'
import testimonoialsObj from '../../Data/TestimonialObj'
import star from '../../assets/star.png'

const TestimonialCard = () => {
  return (
    <>
    <div className='mt-5'>
        <div className="container">
            <div className="row">
                {testimonoialsObj.map((val, index)=>{
                    return(
                        <div className="col-sm-3 mt-3 mt-sm-0">
                            <div className="card p-3" style={{backgroundColor: `${val.bodyBackground}`, color: `${val.bodyTextColor}`, border:'none'}}>
                                {val.isDoubleQuote && <img src={val.icon} alt="double_quote_img"  style={{width:'48px'}}/>}
                                <div className="card-body">
                                    <h5 className={`card-title ${val.titleStyling}`}>{val.cardTitle}</h5>
                                    <p className={`card-text ${val.bodyStyling}`}>{val.comment}</p>
                                </div>
                                { val.isStar?
                                    <ul className="list-group list-group-flush" >
                                        <li className="list-group-item d-flex justify-content-between" style={{backgroundColor: `${val.bodyBackground}`, color: `${val.bodyTextColor}`, border:'none'}}>
                                                <p className={`${val.authorStyling}`}> {val.author} </p>
                                                <div className="ratings d-flex justify-content-space align-items-start">
                                                    {val.isStar && <img src={star} alt="star icon" />}
                                                    <p className="ms-2"> <b> {val.ratings} </b> </p>
                                                </div>
                                        </li>
                                    </ul> : <img src={val.arrow} alt='arrow_img'/>
                                }
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
