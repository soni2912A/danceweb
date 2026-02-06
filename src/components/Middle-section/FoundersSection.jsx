import React from "react";
import "./Founders.css";
import founder1 from "../../assets/images/founder1.png";
import founder2 from "../../assets/images/founder2.png";

const FoundersSection = () => {
  return (
    <section className="founders-section">

      {/* LEFT SIDE */}
      <div className="left">
        <h2>Our Founders</h2>

        <div className="quote">
          <blockquote>
            "Find your flow, and dance your truth."
          </blockquote>
          <p>— Sophia Bennett</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        <div className="founder-card">
          <img src={founder1} alt="Founder 1" />
          <div className="caption magenta">
            <h3>Sophia Bennett</h3>
            <p>Founder & Instructor</p>
          </div>
        </div>

        <div className="founder-card">
          <img src={founder2} alt="Founder 2" />
          <div className="caption cyan">
            <h3>Alisa Morris</h3>
            <p>Founder & Program Manager</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundersSection;
