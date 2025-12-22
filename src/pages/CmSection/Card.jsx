import React from "react";
import "./classes.css";

const Card = ({ card }) => {
  return (
    <div className="class-card" style={{ backgroundImage: `url(${card.img})` }}>
      <div className="overlay">
        <h1 className="big-code">{card.code}</h1>
      </div>

      <div className="card-info">
        <h3>{card.title}</h3>
        <p>{card.desc}</p>

        <div className="bottom-row">
          <span className="timing">{card.time}</span>
          <button className="book-btn">Book Now</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
