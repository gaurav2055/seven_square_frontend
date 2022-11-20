import React from 'react'

import ServicesData from '../../Data/Services'

const Services = () => {

  return (
    <>
    {/* <div className="services-header container text-center" id='services1'>
        <p className="h2">
            Services
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illo veniam? Deleniti facilis necessitatibus quibusdam explicabo fugiat quod aut veniam voluptatibus maxime architecto.</p>
    </div> */}
    <div className='container'>
        <div className="row no-gutters">
            {ServicesData.map((value,index)=>{
                return(
                    <div className="col-md-3 mt-3" key={index}>
                        <div className="card text-left" style={{backgroundImage:`url(${value.s.icon})`, border: 'none', height: '190px' }}>
                            <div className="card-body text-white" style={{paddingTop:'100px'}}>
                                <p className='heading-3 mb-0'>{value.s.title}</p>
                                <p className="card-text body-2">{value.s.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Services
