import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {

   const [ signInUser, setSignInUser]= useContext(UserContext)

   const [order,setOrder] = useState([]);

    const [addedOrder,setAddedOrder]=useState(false)


    useEffect(() => {
        
         
        fetch(`http://localhost:4044/orders?email=` + signInUser.email)
        .then(res => res.json())
        .then(data =>  {

            if(data){
                  setAddedOrder(data)
              }
              setOrder(data)
              })


  },[addedOrder])





    return (
        <div>

          <h1>{order.tittle}</h1>
            
        </div>
    );
};

export default OrderList;