import React from "react";
import "./team2.css";

import g1 from "../../assets/images/g1.jpg";
// import g2 from "../../assets/images/g2.jpg";
import homep from "../../assets/images/homep.jpg"
// import g4 from "../../assets/images/g4.jpg";
import g4 from "../../assets/images/about.jpg"
import d5 from "../../assets/images/d5.jpg";
import b2 from "../../assets/images/b2.jpg";

const Team2 = () => {
  return (
    <section className="classes-section">
      <div className="classes-left">
        <h2>Booking Experience for <br /> Classes</h2>
      </div>

      <div className="classes-right">
        <div className="card">
          <img src={g1} alt="Hip Hop Foundations" />
          <h3>Hip Hop Foundations</h3>
          <p>This class introduces hip hop dance.</p>
          <span>Tuesday 7:00PM - 9:00PM</span>
        </div>

        <div className="card">
          <img src={homep} alt="Hip Hop Freestyle" />
          <h3>Hip Hop Freestyle</h3>
          <p>Develop freestyle movement.</p>
          <span>Tuesday 7:00PM - 9:00PM</span>
        </div>

        <div className="card">
          <img src={g4} alt="Jazz Technique" />
          <h3>Jazz Technique</h3>
          <p>Focus on jazz styles & flexibility.</p>
          <span>Wednesday 7:00PM - 9:00PM</span>
        </div>

        <div className="card">
          <img src={d5} alt="Jazz Funk" />
          <h3>Jazz Funk</h3>
          <p>Powerful and expressive dance.</p>
          <span>Thursday 7:00PM - 9:00PM</span>
        </div>

        <div className="card full">
          <img src={b2} alt="Contact Improvisation" />
          <h3>Contact Improvisation</h3>
          <p>Movement through touch & weight.</p>
          <span>Friday 7:00PM - 9:00PM</span>
        </div>
      </div>
    </section>
  );
};

export default Team2;
