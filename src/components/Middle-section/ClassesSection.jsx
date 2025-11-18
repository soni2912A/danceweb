import React from "react";
import "./classes.css";

const ClassesSection = () => {
  return (
    <div className="classes-container">

      <div className="classes-left">
        <h1>Classes</h1>
      </div>

      <div className="classes-right">
        <h3>Our Classes</h3>
        <p>
          Get your groove on with Hip Hop, find your rhythm in Jazz, and explore 
          creation in Contact Improvisation. Movement Studio offers a diverse range of classes 
          for every dancer.
        </p>

        <button>Reserve your spot</button>
      </div>

    </div>
  );
};

export default ClassesSection;
