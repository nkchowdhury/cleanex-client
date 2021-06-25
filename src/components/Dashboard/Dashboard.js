import React, { useContext } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Dashboard = (props) => {

    console.log(props)

const [ signInUser, setSignInUser]= useContext(UserContext);

return (
      

    <section className='container-fluid'>
      <div className='row bg-white py-3'>
        <div className='col-md-2'>
          <Link to='/'>
            <h3>Clean<b>Ex</b></h3>
          </Link>
        </div>
        <div className='col-md-10 d-flex align-items-center justify-content-between mt-3'>
          <h5>{props.title}</h5>
          <h5>{signInUser.userName}</h5>
        </div>
      </div>
      <div className='row bg-white'>
        <div className='col-md-2 sidebar-pages'>
          <Sidebar />
        </div>
        <div className='col-md-10'>
               {props.children}
        </div>
      </div>
    </section>


    //  style={{ backgroundColor: '#F4F7FC' }}







    );
};

export default Dashboard;