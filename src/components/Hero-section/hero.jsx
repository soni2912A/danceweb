import React from "react";
import "./hero.css";
// import homep from "../../assets/images/homep.svg"; 
import homep from "../../assets/images/homep.jpg";  // Image import declaration

// ------------ DECLARATION OF PROPS HERE ------------
const Hero = ({ title, background }) => {
  return (
    <div className={`hero ${background}`}>   {/* className declaration */}
      
      {/* Background Image (declared) */}
      <div className="hero-image-box">
        <img src={homep} alt="Hero" className="hero-image" />
      </div>

      {/* Text + Button (declared) */}
      <div className="hero-content">
        <h1 className="hero-title">
          Find your <br /> flow.
        </h1>

        <button className="hero-btn">Reserve your spot</button>
      </div>

    </div>
  );
};

// Export declaration
export default Hero;




// const Hero = ({ title, background }) => {
//   return (
//     <div className={`hero ${background}`}>
//       <h1 className="hero-title">{title}</h1>

//       <div className="hero-image-box">
//         <img src={homep} alt="Hero" className="hero-image" />
//          <div className="hero-content">
//         <h1 className="hero-title">
//           Find your <br /> flow.
//         </h1>

//         <button className="hero-btn">Reserve your spot</button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
