import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {
    
   
   const [ signInUser, setSignInUser]= useContext(UserContext);

   const [order,setOrder] = useState([]);

    const [addedOrder,setAddedOrder]=useState(false)




    useEffect(() => {

        fetch('https://murmuring-mesa-47382.herokuapp.com?email=' +signInUser.email)
        .then(res => res.json())
        .then (data => console.log("fetch data", data))
        // .then(data => {

        //     if(data){
        //         setAddedOrder(data)
                
        //     }


        //     setOrder(data)
        // })


    },[addedOrder])








    return (
        <div>

          <h1> You've placed {order.length} order</h1>
          <h1> {signInUser.name}</h1>
            
        </div>
    );
};

export default OrderList;