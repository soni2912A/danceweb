import React from "react";
import "./footer.css"; // import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="footer-logo">
          <h1>
            Mov.<br />Stu.
          </h1>
        </div>

        <div className="footer-info">
          <div className="footer-column">
            <h3>Email</h3>
            <p>hello@figma.com</p>
          </div>
          <div className="footer-column">
            <h3>Address</h3>
            <p>
              22 Candyland Lane, Brooklyn, NY<br />
              (646) 555-5677
            </p>
          </div>
          <div className="footer-column">
            <h3>Socials</h3>
            <p>Instagram: @figma</p>
            <p>Facebook: figma</p>
          </div>
        </div>
      </div>

      {/* Bottom Color Bars */}
      <div className="footer-bottom">
        <div className="footer-box socials">Our Socials</div>
        <div className="footer-box email">Email us</div>
        <div className="footer-box book">Book with us</div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Movement Studio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;