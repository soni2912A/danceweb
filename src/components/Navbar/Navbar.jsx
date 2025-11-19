
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* <a href="#home" className="nav-link">Home</a> */}
        <a href="#classes" className="nav-link">Classes</a>
        <a href="#about" className="nav-link">About</a>
        <p>224 Nostrand Ave, Brooklyn, NY</p>
      </div>

      <div className="nav-center">
        {/* <p>224 Nostrand Ave, Brooklyn, NY</p> */}
      </div>

      <div className="nav-right">
        <h2 className="logo">Movement  Studios.</h2>
      </div>
    </nav>
  );
}

export default Navbar;