import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
  
//   faShoppingCart,
//   faHdd,
//   faCommentAlt,
//   faPlus,
//   faUserPlus,
//   faSignOutAlt,
// } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faFacebook,faTwitter, faInstagramSquare, faYoutube, faFacebookSquare, faCcVisa, faCcMastercard, faCcPaypal, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
     <footer style={{ background:"#111111", }}>
            <div className="container">

<div className="row mb-5">

     <div className="col-md-4">

     <h5>Cleanex</h5>
     <p className="text-secondary">Cleanex psum dolor sit amet consectetur adipisicing elit.Dolore explicabo quidem error,fuga impedit autem!</p>
     <h5>Follow us on social</h5>
    
        
        
         <FontAwesomeIcon  className="social-icon" icon={faFacebookSquare} />
         <FontAwesomeIcon className="social-icon"  icon={faTwitter} />
         <FontAwesomeIcon className="social-icon"  icon={faInstagramSquare} />
         <FontAwesomeIcon className="social-icon" icon={faYoutube} />
         
       
    

     </div>
     <div className="col-md-2">
     <h5 className="quick-menu">Quick Menu</h5>
   
         <li style={{listStyle:"none"}}><a href="#">Home</a></li>
         <li style={{listStyle:"none"}}><a href="#">About</a></li>
         <li style={{listStyle:"none"}}><a href="#">Contct</a></li>
         <li style={{listStyle:"none"}}><a href="#">Review</a></li>
         <li style={{listStyle:"none"}}><a href="#">blog</a></li>
    


     </div>
     <div className="col-md-2">
     <h5>Legal Menu</h5>

     <li style={{listStyle:"none"}}><a href="#">Site Map</a></li>
     <li style={{listStyle:"none"}}><a href="#">Privacy & policy </a></li>
     <li style={{listStyle:"none"}}><a href="#">Conditions</a></li>

     </div>
     <div className="col-md-4">


     
      <h5>Our Newsletter</h5>
      <p className="text-secondary">Get Our every single news & offer!</p>
      <input className="subs-input" type="email" placeholder="Enter Your email" />
      <button className="btn-subs" type="submit">Subscribe</button>


      <h5 className="mt-4">We accept</h5>

      <FontAwesomeIcon  className="credit-icon" icon={faCcVisa} />
      <FontAwesomeIcon className="credit-icon" icon={faCcMastercard} />
      <FontAwesomeIcon className="credit-icon" icon={faCcPaypal} />
      <FontAwesomeIcon className="credit-icon" icon={faCcAmex} />
      <FontAwesomeIcon className="credit-icon" icon={faCcDiscover} />



     </div>




</div>

<spain className="footer-spain"></spain>

<div className="text-center">
    <p className="copy-right text-secondary">Copyright  {(new Date()).getFullYear()}, All Rights Reserved</p>
</div>

    
</div>
     </footer>
    );
};

export default Footer;