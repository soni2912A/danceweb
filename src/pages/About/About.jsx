import React from 'react'
import "./about.css";
import Team from "../../components/Team/Team";

import ClassesImage from "../../assets/images/about.jpg";
import TickerBar from "../../components/Middle-section/TickerBar"
import CTA from "../../components/Middle-section/CTASection"

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
        <TickerBar/>
                 
      {/* <Team/> */}

      </div>
    </section>
    <TickerBar/>
    <Team/>
    <CTA/>
    </>
  );
};


export default About