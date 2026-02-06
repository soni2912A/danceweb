import React from "react";
import "./hero.css";

import homep from "../../assets/images/homep.jpg";  
const Hero = ({ title, background }) => {
  return (
    <div className={`hero ${background}`}>   
      
      <div className="hero-image-box">
        <img src={homep} alt="Hero" className="hero-image" />
      </div>

     
      <div className="hero-content">
        
  <h1 className="hero-title">
  <span className="find">
    Find <span className="your">your</span>
  </span>
  <span className="flow">flow.</span>
  </h1>


        <button className="hero-btn">Reserve your spot</button>
      </div>

    </div>
  );
};


export default Hero;




