import React from "react";
import "./hero.css";
import homep from "../../assets/images/homep.svg"; // <-- correct import

const Hero = ({ title, background }) => {
  return (
    <div className={`hero ${background}`}>
      <h1 className="hero-title">{title}</h1>

      <div className="hero-image-box">
        <img src={homep} alt="Hero" className="hero-image" />
         <div className="hero-content">
        <h1 className="hero-title">
          Find your <br /> flow.
        </h1>

        <button className="hero-btn">Reserve your spot</button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
