import React from 'react'

import ServicesData from '../../Data/Services'

const Services = () => {

  return (
    <>
    <div className="services-header container text-center" id='services1'>
        <p className="h2">
            Services
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illo veniam? Deleniti facilis necessitatibus quibusdam explicabo fugiat quod aut veniam voluptatibus maxime architecto.</p>
    </div>
    <div className='container'>
        <div className="row no-gutters">
            {ServicesData.map((value,index)=>{
                return(
                    <div className="col-md-3 mt-3" key={index}>
                        <div className="card text-center p-3" style={{backgroundColor: '#F8F9FA', border: 'none' }}>
                            <img className="card-img-top w-25 mx-auto" src={value.s.icon} alt="service img"/>
                            <div className="card-body">
                                <p className='h5'>{value.s.title}</p>
                                <p className="card-text" style={{fontSize:'14px'}}>{value.s.description}</p>
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
