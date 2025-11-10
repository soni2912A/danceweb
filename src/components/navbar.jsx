import React from "react";
import "./Navbar.css"; // import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo or Studio Name */}
      <div className="navbar-logo">
        Movement<span>Studios.</span>
      </div>

      {/* Center: Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      {/* Right: Address */}
      <div className="navbar-address">
        224 Nostrand Ave, Brooklyn, NY
      </div>
    </nav>
  );
};

export default Navbar;