import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';




const AdminSidebar = () => {


    const[signInUser, setSignInUser] = useContext(UserContext);

    return (
        
        <div className='sidebar d-flex flex-column justify-content-between py-3 px-3'>
           <ul className='list-unstyled'>
        
   
            <li style={{marginBottom:"20px"}}>
              <Link to='/adminOrderList' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faShoppingCart} /> <span>Order List</span>
              </Link>
            </li>

            <li style={{marginBottom:"20px"}}>
              <Link to='/addService' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faHdd} /> <span>Add Service</span>
              </Link>
            </li>

            <li>
              <Link to='/makeAdmin' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faCommentAlt} /> <span>Make Admin</span>
              </Link>
            </li>

            <li>
              <Link to='/manage' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faCommentAlt} /> <span>Manage Service</span>
              </Link>
            </li>
         
      </ul>
    </div>
    );
};

export default AdminSidebar;