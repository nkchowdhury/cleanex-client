import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';



const Sidebar = () => {

  const [ signInUser, setSignInUser] = useContext(UserContext)


    return (

        

        <div className='sidebar d-flex flex-column justify-content-between py-3 px-3'>
           <ul className='list-unstyled'>
        
   
            <li style={{marginBottom:"20px"}}>
              <Link to='/order' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faShoppingCart} /> <span>Order</span>
              </Link>
            </li>

            <li style={{marginBottom:"20px"}}>
              <Link to='/orderDetails' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>

            <li>
              <Link to='/review' className='text-dark'>
                <FontAwesomeIcon style={{marginRight:"6px"}} icon={faCommentAlt} /> <span>Review</span>
              </Link>
            </li>
         
      </ul>
    </div>


            
            
       
    );
};

export default Sidebar;