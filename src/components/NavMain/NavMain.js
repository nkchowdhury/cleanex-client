import React, { useContext } from 'react';
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
import { UserContext } from '../../App';
  import './NavMain.css'








const NavMain = () => {


  const [signInUser, setSignInUser] = useContext(UserContext);

    return (

        <Navbar className="container" expand="lg">
        <Navbar.Brand href="/home">Clean<b style={{color: '#357e98'}}>Ex</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto main-navbar">
            <Nav.Link className="nab-item">
              <Link  to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link className="nab-item">
              <Link to="#about">About Us</Link>
            </Nav.Link>
            <Nav.Link className="nab-item">
              <Link to="#service">Service</Link>
            </Nav.Link>
            <Nav.Link className="nab-item">
              <Link to="#review">Review</Link>
            </Nav.Link>
            
            <Nav.Link>

            {
                 signInUser.email ? (<p style={{color:'#357e98'}}>{signInUser.userName}</p> )
                  :<Link to="/login"> <button className="header-btn">Log in</button></Link>
             }
           
           

            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
    );
};

export default NavMain;

