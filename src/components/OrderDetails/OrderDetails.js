import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import YourOrder from '../../components/OrderDetails/YourOrder'

const OrderDetails = () => {





   const  [signInUser, setSignInUser] = useContext(UserContext);

    const [order,setOrder] = useState([]);
 
     const [addedOrder,setAddedOrder]=useState(false)
 
 
    
 
     useEffect(() => {
 
         fetch('https://murmuring-mesa-47382.herokuapp.com/orders?email=' + signInUser.email)
         .then(res => res.json())
        //  .then (data => console.log("fetch data", data))
         
         .then(data => {
 
             if(data){
                 setAddedOrder(data)
                 
             }
 
 
             setOrder(data)
         })
 
 
     },[addedOrder])



    return (
        <div className="text-center">
              <h3>Hi!{signInUser.userName}</h3>
             <h2>You have{order.length} order</h2>

            
            <div className="row">
            {
                 order.map(or => <YourOrder or={or}></YourOrder>)
             }
             
            </div>
        </div>
    );
};

export default OrderDetails;