import React from 'react';
import { Carousel } from 'react-bootstrap';

const ReviewDetails = ({review}) => {


    return (




  <div className="col-md-4">


         <img src={review.imgUrl}   />
           <h5  className="mt-4" style={{ color: "#11b4f5" }}>{review.name}</h5>
           <h5 className="text-secondary  mb-4">{review.about}</h5>
           <p className="text-secondary">{review.description}</p>
      
  </div>

       
    );
};

export default ReviewDetails;