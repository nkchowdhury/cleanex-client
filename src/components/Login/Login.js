import React, { useContext, useState } from 'react';
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavMain from '../NavMain/NavMain';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';





if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }




const Login = () => {


const [user,setUser] = useState();
const[signInUser, setSignInUser] = useContext(UserContext);


const googleProvider = new firebase.auth.GoogleAuthProvider();


const history = useHistory();
const location = useLocation();


let { from } = location.state || { from: { pathname: "/" } };



const handleSignIn = () => {




firebase.auth().signInWithPopup(googleProvider)
.then(res => {

  const {displayName,photoURL,email} = res.user;
  const newUser={
      userName:displayName,
      email:email,
      userPhoto:photoURL
  }


  setSignInUser(newUser)
  history.replace(from);
  console.log(res)
})
.catch(err => {


  console.log(err.message)
})


}



    return (
        <section>
            <div className="container">

            <NavMain></NavMain>

<div style={{textAlign: 'center', marginBottom:"180px", marginTop:"80px"}}>
   <h3>Login Now</h3>
    <Button  onClick={handleSignIn}   variant="primary">Continue With Google</Button>

</div>


            </div>
          

             <Footer></Footer>
            
        </section>
    );
};

export default Login;