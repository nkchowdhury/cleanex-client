import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';


const PlaceOrder = () => {


 const [signInUser, setSignInUser] = useContext(UserContext);


    const {_id} = useParams();

    const { register, handleSubmit, errors } = useForm();


      // Set state fro service
  const [service, setService] = useState([]);

  
  // Get the single Service user clicked from API:
//   useEffect(() => {
//     fetch(`http://localhost:4044/service/${_id}`)
//       .then((res) => res.json())
//       .then((data) => console.log("service data",data));
//   }, [_id]);
    

  useEffect(() => {
    fetch('https://murmuring-mesa-47382.herokuapp.com/service/')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const sellectedService = data.find((service => service._id === _id))
            setService(sellectedService)
        })
}, [_id]);


// console.log("my service data" ,service);





// console.log("service data", service )



let history = useHistory();
function handleClientService() {
  history.push('/OrderDetails');
}



const { tittle,price, } = service;


const orderData = {

    tittle:service.tittle,
    price:service.price,
    description:service.description

    


}


const onSubmit = () => {
     
    const orderInfo = { ...signInUser, ...orderData,  date: new Date() }
   
    console.log('orderInfo' ,orderInfo)
   
    fetch('https://murmuring-mesa-47382.herokuapp.com/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            
            console.log("Fetch data", data)
            alert('Order Place successfully');
          handleClientService();
        }
      });
  };







 






return (

        <div className="container">
       
                  <h3>Your Order Details </h3>


 <form  onSubmit={handleSubmit(onSubmit)}>




      
        <label for="formGroupExampleInput" class="form-label mt-2">Name</label>
      
        <input
          class="form-control col-md-6"
          type="text"
          tittle="name"
          defaultValue={signInUser.userName}
          placeholder="Name"
          {...register("name")}
        />

      
        <label for="formGroupExampleInput" class="form-label mt-2">Email</label>
        <input 
          class="form-control col-md-6"
          type="email"
          defaultValue={signInUser.email}
          tittle="email"
          placeholder="Email"
          {...register("email")}
        />
       
   

       <label for="formGroupExampleInput" class="form-label mt-2">Service Tittle</label>

        <input

          class="form-control col-md-6"
          type="text"
          defaultValue={tittle}
          tittle="tittle"
          placeholder="tittle"
          {...register("tittle")}
        />
         
        
         <label for="formGroupExampleInput" class="form-label mt-2">Price (US-$)</label>
        <input
          class="form-control col-md-6"
          type="price"
          defaultValue={"$",price}
          tittle="price"
          placeholder="price"
          {...register("price")}
        />
       
       <br />
        
        <div className="col-md-6">
          
       <ProcessPayment style={{marginTop:"13px"}} ></ProcessPayment>
        </div>

       <br />

       <button style={{marginTop:"10px"}} type="submit" class="btn btn-info">Pay Now</button>
       
    </form>








            
        </div>
    );
};

export default PlaceOrder;