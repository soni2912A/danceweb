import React from "react";
import "./classes.css";
import classImg from "../../assets/images/class1.png";

const ClassesSection = () => {
  return (
    <section className="class-wrapper">
      <div className="class-container">

        {/* LEFT IMAGE */}
        <div className="class-left1 class-square-box">
          <img src={classImg} alt="Classes" />
          <h1 className="class-title1">Classes</h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="class-right1 class-square-box">
          <div className="arrange-text1">
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
