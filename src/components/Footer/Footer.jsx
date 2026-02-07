import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h1 className="footer-logo">
            Mov.<span className="logo-space">Stu.</span>
          </h1>
        </div>
        <div className="footer-center">
          <p className="footer-title">Email:</p>
          <p className="footer-text">hello@figma.com</p>
          <p className="footer-title">Instagram:</p>
          <p className="footer-text">@figma</p>
          <p className="footer-title">Facebook:</p>
          <p className="footer-text">figma</p>
        </div>
        <div className="footer-right">
          <p className="footer-title">Address:</p>
          <p className="footer-text">224 Candyland Lane, Brooklyn, NY</p>
          <p className="footer-text">(646) 555-4567</p>
          <p className="footer-text">Movement Studios©</p>
          <p className="footer-text">2025 All Rights Reserved</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-block blue">Our Socials</div>
        <div className="footer-block black">Email us</div>
        <div className="footer-block pink">Book with us</div>
      </div>
    </footer>
  );
};

export default Footer;