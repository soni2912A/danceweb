import React from "react";
import "./Vision.css";
import classImg from "../../assets/images/class1.png";

const ClassesSection = () => {
  return (
    <section className="vision-wrapper">
      <div className="vision-container">

        {/* LEFT IMAGE */}
        <div className="vision-left square-box">
          <img src={classImg} alt="Classes" />
          <h1 className="vision-title">Classes</h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="vision-right square-box">
          <div className="arrange-text">
            <h2>Our Classes</h2>

            <p>
              Get your groove on with Hip Hop, find your rhythm in Jazz, and
              explore connection in Contact Improvisation. Movement Studio
              offers a diverse range of classes for every dancer.
            </p>

            <button>Reserve your spot</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClassesSection;
