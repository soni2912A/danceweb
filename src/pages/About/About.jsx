import React from 'react'
import "./about.css";
import Team from "../../components/Team/Team";

import ClassesImage from "../../assets/images/about.jpg";

const About = () => {
  return (<>
    <section
      className="classes-hero"
      style={{ backgroundImage: `url(${ClassesImage})` }}
    >
      <div className="overlay">
        <h1 className="classes-title">About Us</h1>
      </div>
      <div>
      
      {/* <Team/> */}
      </div>
    </section>
    <Team/>
    </>
  );
};


export default About