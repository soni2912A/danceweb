import React from "react";
import "./vision.css";
import visionImg from "../../assets/images/vision1.png";

const VisionSection = () => {
  return (
    <div className="vision-wrapper">
      <div className="vision-container">

        {/* LEFT PERFECT SQUARE IMAGE */}
        <div
          className="vision-left square-box"
          style={{ backgroundImage: `url(${visionImg})` }}
        ></div>

        {/* RIGHT PERFECT SQUARE TEXT BLOCK */}
        <div className="vision-right square-box">
          <h2>Who we are</h2>
          <p>
            At Movement Studio, we’re passionate about creating a supportive and inspiring 
            environment for dancers of all levels. Whether you’re a complete beginner eager 
            to explore the world of modern dance, a seasoned performer looking to refine 
            your technique, or simply someone who finds joy in moving, you’ll find a home here.
          </p>

          <button>About us</button>
        </div>

      </div>
    </div>
  );
};

export default VisionSection;
