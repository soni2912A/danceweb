import React from "react";
import "./founders.css";

const FoundersSection = () => {
  return (
    <div className="founders-container">

      <h2>Our Founders</h2>

      <div className="founders-grid">

        <div className="founder-quote">
          <p>"Find your flow, and dance your truth."</p>
          <span>— Sophia Bennett</span>
        </div>

        <div className="founder-card one">
          <div className="text">
            <h4>Sophia Bennett</h4>
            <p>Founder & Instructor</p>
          </div>
        </div>

        <div className="founder-card two">
          <div className="text">
            <h4>Alisa Morris</h4>
            <p>Founder & Program Manager</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FoundersSection;
