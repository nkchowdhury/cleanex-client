import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import OurTeam from './components/OurTeam/OurTeam';
import Login from './components/Login/Login';
import ContactUs from './components/ContactUs/ContactUs';
import Admin from './components/Admin/Admin';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import PlaceOrder from './components/Dashboard/PlaceOrder/PlaceOrder';
import AddReview from './components/AddReview/AddReview';
import NoOrder from './components/Dashboard/NoOrder/NoOrder'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import OrderList from './components/Dashboard/OrderList/OrderList'
import OrderDetails from './components/OrderDetails/OrderDetails'
import AddServices from './components/AddServices/AddServices';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AllOrder from './components/Admin/AllOrder/AllOrder'
import ManageService from './components/Admin/ManageService/ManageService'

library.add(fab, faCheckSquare, faCoffee)




export const UserContext = createContext();


function App() {

const [signInUser, setSignInUser] = useState({});


  return (




  <UserContext.Provider value={[signInUser, setSignInUser]}>
    
    
    {/* <h1>email: {signInUser.userName}</h1>  */}


    <Router>

    <Switch>

    <Route path="/home">
              <Home></Home>
    </Route>



    <Route path="/contact">
        <ContactUs></ContactUs>
    </Route>


    <Route path="/login">
        <Login></Login>

    </Route>

    <PrivateRoute path="/admin">
       <Admin></Admin>

    </PrivateRoute>


    <PrivateRoute path="/addService">

           <Admin tittle="Add Service">
                   <AddServices></AddServices>
           </Admin>

    </PrivateRoute>


    <PrivateRoute path="/manage">

         <Admin tittle="Manage Service">

         <ManageService></ManageService>
  
        </Admin>

    </PrivateRoute>


    <PrivateRoute path="/adminOrderList">

          <Admin tittle="All Order List">

          <AllOrder></AllOrder>
  
          </Admin>

    </PrivateRoute>



    <PrivateRoute path="/addAdmin">

         <Admin tittle="Add Admin">

         <AddAdmin></AddAdmin>
  
         </Admin>

    </PrivateRoute>
     

   

    <PrivateRoute path="/orderDetails">
    <Dashboard>
    <OrderDetails></OrderDetails>
    </Dashboard> 

    </PrivateRoute>

    <PrivateRoute path="/order">
    <Dashboard>
      <NoOrder></NoOrder>
    </Dashboard>

    </PrivateRoute>


   
   <PrivateRoute path="/orders/:_id">
        <Dashboard tittle="order">
          <PlaceOrder></PlaceOrder>
        </Dashboard>
    </PrivateRoute>


    
   <PrivateRoute path="/orderList">
        <Dashboard tittle="orderList">

        <OrderList></OrderList>
         
        </Dashboard>
    </PrivateRoute>



    <PrivateRoute path="/review">
         <Dashboard tittle="Review">
           <AddReview></AddReview>
         </Dashboard>
    </PrivateRoute>


    <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
       
    </PrivateRoute>


    <Route exact path="/">     
             <Home></Home>
    </Route>

    <Route path="*">

            <NoMatch></NoMatch>

    </Route>

  </Switch>

    </Router>

    </UserContext.Provider>
  );
}

export default App;
