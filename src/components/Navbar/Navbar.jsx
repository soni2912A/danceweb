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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#classes" className="nav-link">Classes</a>
        <a href="#about" className="nav-link">About</a>
        <p>224 Nostrand Ave, Brooklyn, NY</p>
      </div>

      <div className="nav-center"></div>

      <div className="nav-right">
        <h2 className="logo">Movement Studios.</h2>
      </div>
    </nav>
  );
}

export default Navbar;
