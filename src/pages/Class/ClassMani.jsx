import React from "react";
import "./class.css";
import ClassesImage from "../../assets/images/classes1.png";
import Team2 from "../../components/Team2/team2";
import TickerBar from "../../components/Middle-section/TickerBar"
import CTA from "../../components/Middle-section/CTASection"

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
    <TickerBar/>
    
          <Team2 />
          <CTA/>
          </>

  );
};

export default ClassMani;
