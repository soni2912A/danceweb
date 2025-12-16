// import React from "react";
// import "./navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <h2 className="logo">Movement Studios</h2>
//       </div>

//       <div className="nav-center">
//         <a href="#home" className="nav-link">Home</a>
//         <a href="#classes" className="nav-link">Classes</a>
//         <a href="#about" className="nav-link">About</a>
//       </div>

//       <div className="nav-right">
//         <p>224 Nostrand Ave, Brooklyn, NY</p>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


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


