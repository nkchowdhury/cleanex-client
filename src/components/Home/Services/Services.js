import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceDetails from '../ServiceDetails/ServiceDetails'


const Services = () => {

    const [serviceData,setServiceData] = useState([]);
    

    useEffect(() => {
  
      fetch('http://localhost:4044/service')
      .then(res => res.json())
      .then (data => setServiceData(data))
  
  
  
  
    },[])





    return (
        <div className="container">

             <div className="service-tittle  text-center">
              <h5 style={{ color: "#11b4f5" }}>Our Services</h5>
              <h2>Services We Provide </h2>
             </div>




            <div className="d-flex justify-content-center">
                <div className="w-100 row">
                        {
                         serviceData.map(service => (
                        <ServiceDetails service={service}></ServiceDetails>
                        ))}
                </div>
            </div>
            
        </div>
    );
};

export default Services;
