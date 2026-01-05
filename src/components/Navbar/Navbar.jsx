import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT MENU */}
      <div className={`nav-left ${open ? "show" : ""}`}>
        <NavLink to="/class" className="nav-link" onClick={() => setOpen(false)}>
          Classes
        </NavLink>

        <NavLink to="/about" className="nav-link1" onClick={() => setOpen(false)}>
          About
        </NavLink>

        <p>224 Nostrand Ave, Brooklyn, NY</p>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <NavLink to="/" className="nav-link2">
          <h2 className="logo">Movement Studios.</h2>
        </NavLink>

        {/* HAMBURGER (MOBILE ONLY) */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
