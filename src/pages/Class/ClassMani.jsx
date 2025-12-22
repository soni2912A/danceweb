import React from "react";
import "./class.css";
import ClassesImage from "../../assets/images/classes1.png";
import Team2 from "../../components/Team2/team2";

const ClassMani = () => {
  return ( <> 
    <section
      className="classes-hero"
      style={{ backgroundImage: `url(${ClassesImage})` }}
    >
      <div className="overlay">
        <h1 className="classes-title">Classes</h1>
      </div>
    </section>
          <Team2 />
          </>

  );
};

export default ClassMani;
