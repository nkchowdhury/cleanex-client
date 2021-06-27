import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllOrderDetails from '../../Admin/AllOrder/AllOrderDetails'

const AllOrder = () => {



const [signInUser, setSignInUser]=useContext(UserContext);

const[allOrders,setAllOrders] = useState([])




useEffect(() => {

    fetch('https://murmuring-mesa-47382.herokuapp.com/allOrders')
    .then(res => res.json())
    .then(data => setAllOrders(data) )


},[])





    return (
         <section>


         <div></div>

         <table class="table">


         <thead>
                 <tr>
                       <th scope="col">Service</th>
                       <th scope="col">Date</th>
                       <th scope="col">User Email</th>
                       <th scope="col">Price</th>
                       <th scope="col">Status</th>
                </tr>
        </thead>
          <tbody>

          {
             
            allOrders.map(aol => <AllOrderDetails aol={aol}></AllOrderDetails>  )

          }



          </tbody>


         </table>




         </section>
    );
};

export default AllOrder;