import React from "react";
import "./tickerbar.css";

const messages = [
  "Fluid. Expressive. Powerful. Move with us!",
  "Masterclass Alert: Guest Choreographer Workshop This Saturday",
  "New Contemporary Dance Classes Now Enrolling – Secure Your Spot"
];

const TickerBar = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {/* 1st copy */}
        <div className="ticker-content">
          {messages.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>

        {/* 2nd copy for infinite loop */}
        <div className="ticker-content">
          {messages.map((msg, i) => (
            <p key={i + "copy"}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
