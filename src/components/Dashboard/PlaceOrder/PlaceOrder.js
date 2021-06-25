import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


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
    fetch('http://localhost:4044/service/')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const sellectedService = data.find((service => service._id === _id))
            setService(sellectedService)
        })
}, [_id]);


// console.log("my service data" ,service);





// console.log("service data", service )



// let history = useHistory();
// function handleClientService() {
//   history.push('/dashboard');
// }



const { tittle,price, } = service;


const orderData = {

    tittle:service.tittle,
    price:service.price,
    description:service.description

    


}


const onSubmit = () => {
     
    const orderInfo = { ...signInUser, ...orderData,  date: new Date() }
   
    console.log('orderInfo' ,orderInfo)
   
    fetch('http://localhost:4044/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            
            console.log("Fetch data", data)
            alert('Order Place successfully');
        //   handleClientService();
        }
      });
  };







 






return (

        <div className="container">
       
                  <h3>Your {_id} </h3>


 <form onSubmit={handleSubmit(onSubmit)}>
      
        <input
          type="text"
          tittle="name"
          defaultValue={signInUser.userName}
          placeholder="Name"
          {...register("name")}
        />

        <br />
        <br />
        
        <input 
          type="email"
          defaultValue={signInUser.email}
          tittle="email"
          placeholder="Email"
          {...register("email")}
        />
       
        <br />
        <br />

        <input
          type="text"
          defaultValue={tittle}
          tittle="tittle"
          placeholder="tittle"
          {...register("tittle")}
        />
         <br />
        <br />

        <input
          type="number"
          defaultValue={price}
          tittle="price"
          placeholder="price"
          {...register("price")}
        />
       
        <br />
        <br />
        <button className="btn-pay" type="submit">Pay</button>
    </form>








            
        </div>
    );
};

export default PlaceOrder;