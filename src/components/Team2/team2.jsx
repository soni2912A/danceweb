import React from "react";
import "./team2.css";

import g1 from "../../assets/images/g1.jpg";
import homep from "../../assets/images/homep.jpg";
import g4 from "../../assets/images/about.jpg";
import d5 from "../../assets/images/d5.jpg";
import b2 from "../../assets/images/b2.jpg";
import ourPromise from "../../assets/images/ourpromise.jpg";


const Team2 = () => {
  return (
    <section className="classes-section">
      {/* LEFT SIDE */}
      <div className="classes-left">
        <h2>
          Booking Experience <br /> for Classes
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="classes-right">
        <div className="card">
          <div className="img-wrap">
            <img src={g1} alt="Hip Hop Foundations" />
          </div>
          <div className="card-content">
            <h3>Hip Hop Foundations</h3>
            <p>This class introduces hip hop dance.</p>
            <span>Tuesday 7:00PM – 9:00PM</span>
          </div>
        </div>

        <div className="card">
          <div className="img-wrap">
            <img src={homep} alt="Hip Hop Freestyle" />
          </div>
          <div className="card-content">
            <h3>Hip Hop Freestyle</h3>
            <p>Develop freestyle movement.</p>
            <span>Tuesday 7:00PM – 9:00PM</span>
          </div>
        </div>

        <div className="card">
          <div className="img-wrap">
            <img src={g4} alt="Jazz Technique" />
          </div>
          <div className="card-content">
            <h3>Jazz Technique</h3>
            <p>Focus on jazz styles & flexibility.</p>
            <span>Wednesday 7:00PM – 9:00PM</span>
          </div>
        </div>

        <div className="card">
          <div className="img-wrap">
            <img src={d5} alt="Jazz Funk" />
          </div>
          <div className="card-content">
            <h3>Jazz Funk</h3>
            <p>Powerful and expressive dance.</p>
            <span>Thursday 7:00PM – 9:00PM</span>
          </div>
        </div>

        {/* FULL WIDTH */}
        <div className="card full">
          <div className="img-wrap">
            <img src={b2} alt="Contact Improvisation" />
          </div>
          <div className="card-content">
            <h3>Contact Improvisation</h3>
            <p>Movement through touch & weight.</p>
            <span>Friday 7:00PM – 9:00PM</span>
          </div>
        </div>

        {/* OUR PROMISE */}
        {/* OUR PROMISE SECTION */}
<div className="our-promise-section">
  <div className="promise-image">
    <img src={ourPromise} alt="Our Promise" />
  </div>

  <div className="promise-content">
    {/* <h2>
      Our Promise <br /> 
    </h2> */}
    
  </div>
</div>

</div>

      
    </section>
  );
};

export default Team2;
