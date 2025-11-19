import React from "react";
import "./hero.css";

const Hero =({title,background})=>{
    return(
        <div className={`hero ${background}`}>
            <h1 className="hero-title">Classes</h1>
            

    
        </div>
    );
};

export default Hero;


// const Hero = ({ title, background }) => {
//   return (
//     <div className={`hero ${background}`}>
//       <h1 className="hero-title">{title}</h1>
//     </div>
//   );
// };

// export default Hero;