import React from "react";
import "./HeaderMain.css";
import hero from "../../../images/hero.png";
import bgtwo from "../../../images/bgtwo.jpg";
import bg from '../../../images/bg.png' ;
import BusinessInfo from'../../../components/Header/BusinessInfo/BusinessInfo';
import heroImg from '../../../images/hero2.png'

const HeaderMain = () => {
  return (
    <main>
      <div className="container">
      <div 
        style={{ height: "700px" }}
        className="row d-flex align-items-center justify-content-md-between"
      >
        <div className="col-md-6">
          <p  style={{color: "#87cbeb", fontSize:'30px'}}>We Provide the best</p>
          <h1 style={{color: "#357e98", fontSize:'50px'}}>
            Cleaning Service <br />
            in your city
          </h1>
          <p className="text-secondary">
            It is a long established fact that a reader will be distr opposed <br/> acted by
            the readable content of a page when more-or-less <br/> looking at its layout.The point
            of using Lorem as opposed <br/> Ipsum is that it has a  letters more-or-less normal <br/>
            distribution of letters,as opposed.
          </p>

          <button type="button"  className="btn btn-hero btn-primary">
            Get Appointments
          </button>
        </div>

        <div className="col-md-6">
          <img src={heroImg} className="img-fluid" alt="hero-img" />
        </div>
      </div>
      <BusinessInfo></BusinessInfo>
      </div>
    </main>
  );
};

export default HeaderMain;
