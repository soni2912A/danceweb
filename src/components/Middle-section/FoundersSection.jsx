import React from "react";
import "./founders.css";
import founder1 from "../../assets/images/founder1.png";
import founder2 from "../../assets/images/founder2.png";

const FoundersSection = () => {
  return (
    <div className="founder-wrapper">

      {/* LEFT SIDE */}
      <div className="founder-left">
        <h2>Our Founders</h2>
        <p className="quote">"Find your flow, and dance your truth."</p>
        <p className="quote-author">— Sophia Bennett</p>
      </div>

      {/* RIGHT SIDE USING FIGURE */}
      <div className="founder-right">

        {/* FIGURE 1 */}
        <figure className="founder-figure">
          <img src={founder1} alt="Founder" />
          <figcaption className="caption magenta">
            <h3>Sophia Bennett</h3>
            <p>Founder & Instructor</p>
          </figcaption>
        </figure>

        {/* FIGURE 2 */}
        <figure className="founder-figure">
          <img src={founder2} alt="Founder" />
          <figcaption className="caption blue1">
            <h3>Alisa Morris</h3>
            <p>Founder & Program Manager</p>
          </figcaption>
        </figure>

      </div>

    </div>
  );
};

export default FoundersSection;
