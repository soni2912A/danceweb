import React from "react";
import "./vision.css";
import visionImg from "../../assets/images/vision1.png";
// import classImg from "../../assets/images/class1.png";

const VisionSection = () => {
  return (
    <div className="vision-wrapper">
      <div className="vision-container">

       <figure className="vision-left square-box">
        <img src={visionImg} alt="dancing" />
         <h1 className="vision-title">Vision</h1>
       </figure>

        {/* RIGHT PERFECT SQUARE TEXT BLOCK */}
        <div className="vision-right square-box">
          <div className="arrange-text">
          <h2 >Who we are</h2>
          <p>
            At Movement Studio, we’re passionate about creating a supportive and inspiring environment <br />
            for dancers of all levels. Whether you’re a complete beginner eager to explore the world of <br />
            modern dance, a seasoned performer looking to refine your technique, or simply someone who <br />
            finds joy in moving, you’ll find a home here.
          </p>

          <button>About us</button>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default VisionSection;

