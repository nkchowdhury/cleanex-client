import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewDetails from '../../components/ReviewDetails/ReviewDetails'
import { Carousel } from 'react-bootstrap';




const Review = () => {




    // const reviewInfo = [

    //     {
    //       tittle: "It was the best service , I have ever seen",
    //       review: "printer took a galley of type and scrambled it to make a type specimen book. It has       survived not only five centuries",
    //       name: "Jhon Doe",
    //       about: "Ceo,Cloud-Sky",
    //       imgUrl:'https://i.ibb.co/2hnNwwy/review1.png'
    //     },

    //     {
    //         tittle: "It was the best service , I have ever seen",
    //         review: "printer took a galley of type and scrambled it to make a type specimen book. It has    survived not only five centuries",
    //         name: "Micle Doe",
    //         about: "Ceo,Sky-lane",
    //         imgUrl:'https://i.ibb.co/23YWHNw/review2.png'
    //       },


    //       {
    //         tittle: "It was the best service , I have ever seen",
    //         review: "printer took a galley of type and scrambled it to make a type specimen book. It has    survived not only five centuries",
    //         name: "Rayhan Shekh",
    //         about: "Ceo,Megna bank",
    //         imgUrl:'https://i.ibb.co/wp3s2jK/review3.png',
    //       },
    
      
    //   ];

   const [review,setReview] = useState([])
   
   useEffect(() => {

    fetch('https://murmuring-mesa-47382.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setReview(data))


   },[])









    return (
        <section id='review' className="container">

        <div className="review-tittle text-center">

        <h5 style={{ color: "#11b4f5" }}>Review</h5>
        <h2>What Say Our Customers</h2>

        </div>

         
        
        <div className="row text-center">

           
           
            {
                review.map(review =>  <ReviewDetails review={review}></ReviewDetails>)
            }



        </div>

      


           


       







        </section>
    );
};

export default Review;