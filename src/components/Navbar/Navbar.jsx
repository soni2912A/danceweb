
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/class" className="nav-link">Classes</NavLink>
        <NavLink to="/about" className="nav-link1">About</NavLink>
        <p>224 Nostrand Ave, Brooklyn, NY</p>
      </div>

      {/* <div className="nav-center"></div> */}

      <div className="nav-right">
  <NavLink to="/" className="nav-link2">
    <h2 className="logo">Movement Studios.</h2>
  </NavLink>
</div>

    </nav>
  );
}

export default Navbar;


