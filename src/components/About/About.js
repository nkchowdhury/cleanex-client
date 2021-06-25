import React from 'react';
import './About.css';
import aboutImg from '../../images/about.png' 

const About = () => {
    return (
        <div id="about" className="container">

        <div className="about-tittle text-center">

        <h5 style={{ color: "#11b4f5" }}>About Us</h5>
        <h2>Who We Are! </h2>


        </div>



        <div className="d-flex align-items-center">
            <div className="col-md-6">


            <img className="img-fluid" src={aboutImg} alt="img" />



            </div>
            <div className="col-md-6">
              
              <h4 className="text-secondary">We have been providing the best<br/>services since 2018</h4>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto,quam corrupti dolores amet distinctio ipsa cumque quia, eveniet labore,tempora accusamus saepe ducimus natus quo soluta. Corrupti quidem nostrum dolore sapiente dicta,voluptatum iusto culpa.
              <br />
              <br />
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged eveniet labore,tempora accusamus saepe ducimus natus quo soluta. Corrupti quidem nostrum dolore sapiente dicta,voluptatum iusto culpa.
              </p>

              <button className="btn-about">Know More</button>

            </div>
        </div>
            
        </div>
    );
};

export default About;