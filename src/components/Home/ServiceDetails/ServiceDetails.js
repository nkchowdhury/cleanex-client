import React from 'react';
import './ServiceDetails.css';
import { Link } from 'react-router-dom';



const ServiceDetails = ({service}) => {

    const {  _id, iconUrl,tittle, description } = service;


    // const handleServiceOrder = () => { 

    //     history.push(`/service//${_id}`)
    //    } 


    return (
       
        <div className="col-md-4 ser-order text-center">

     {/* <div onClick={() => handleServiceOrder(_id)> */}

<Link  to={'/orders/' + _id}>

<img className="service-icon img-fluid" src={iconUrl} alt="Image" />

<h4 className="text-secondary" style={{marginTop:"20px", marginBottom:"20px"}}>{tittle}</h4>

<p className="text-secondary">{description}</p>


</Link>

     {/* </div> */}

           
            
        </div>
    );
};

export default ServiceDetails;