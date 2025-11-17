// 1st try
// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* Top section */}
//       <div className="footer-top">
//         <div className="footer-left">
//           <h1 className="footer-logo">
//             Mov.<br />Stu.
//           </h1>
//         </div>

//         <div className="footer-right">
//           <div className="footer-info">
//             <p>Email:</p>
//             <p>hello@figma.com</p><br />
//             <p>Instagram:</p>
//             <p> @figma</p><br />
//             <p>Facebook:</p>
//             <p> figma</p>
//           </div>

//           </div>
//           <div className="FOOTER-r1">
//           {/* <div className="footer-right1"> */}
//           <div className="footer-info1">
//             <p>Address:</p><br />
//             <p>224 Candyland Lane,Brooklyn,NY</p>
//             <p>(646)555-4567</p><br />
//             <p>Movement Studios©️</p>
//             <p>2025 All Rights Reserved</p>

//         </div>
//         </div>
//         </div>
//         {/* </div> */}

//       {/* Bottom color blocks */}
//       <div className="footer-bottom">
//         <div className="footer-block blue">Our Socials</div>
//         <div className="footer-block black">Email us</div>
//         <div className="footer-block pink">Book with us</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// 2nd try
// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       {/* Top Section */}
//       <div className="footer-top">

//         {/* Left Logo */}
//         <div className="footer-left">
//           <h1 className="footer-logo">
//             Mov.<br />Stu.
//           </h1>
//         </div>

//         {/* Middle Contact */}
//         <div className="footer-center">
//           <p className="footer-title">Email:</p>
//           <p className="footer-text">hello@figma.com</p><br />

//           <p className="footer-title">Instagram:</p>
//           <p className="footer-text">@figma</p><br />

//           <p className="footer-title">Facebook:</p>
//           <p className="footer-text">figma</p>
//         </div>

//         {/* Right Address */}
//         <div className="footer-right">
//           <p className="footer-title">Address:</p><br />

//           <p className="footer-text">224 Candyland Lane, Brooklyn, NY</p>
//           <p className="footer-text">(646) 555-4567</p><br />

//           <p className="footer-text">Movement Studios©</p>
//           <p className="footer-text">2025 All Rights Reserved</p>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <div className="footer-bottom">
//         <div className="footer-block blue">Our Socials</div>
//         <div className="footer-block black">Email us</div>
//         <div className="footer-block pink">Book with us</div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* Left Logo */}
        <div className="footer-left">
          <h1 className="footer-logo">
            Mov.<br />Stu.
          </h1>
        </div>

        {/* Middle Contact */}
        <div className="footer-center">
          <p className="footer-title">Email:</p>
          <p className="footer-text">hello@figma.com</p><br />

          <p className="footer-title">Instagram:</p>
          <p className="footer-text">@figma</p><br />

          <p className="footer-title">Facebook:</p>
          <p className="footer-text">figma</p>
        </div>

        {/* Right Address */}
        <div className="footer-right">
          <p className="footer-title">Address:</p><br />

          <p className="footer-text">224 Candyland Lane, Brooklyn, NY</p>
          <p className="footer-text">(646) 555-4567</p><br />

          <p className="footer-text">Movement Studios©</p>
          <p className="footer-text">2025 All Rights Reserved</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-block blue">Our Socials</div>
        <div className="footer-block black">Email us</div>
        <div className="footer-block pink">Book with us</div>
      </div>

    </footer>
  );
};

export default Footer;



