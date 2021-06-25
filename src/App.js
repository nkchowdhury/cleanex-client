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
import OrderList from './components/Dashboard/OrderList/OrderList';
import NoOrder from './components/Dashboard/NoOrder/NoOrder'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

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
        <Dashboard title="Order List">
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
