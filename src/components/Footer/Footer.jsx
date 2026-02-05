// import React from "react";
// import "./footer.css";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <motion.footer
//       className="footer"
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       {/* Top Section */}
//       <div className="footer-top">
//         {/* Left Logo */}
//         <motion.div
//           className="footer-left"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           <h1 className="footer-logo">
//             Mov.<br />Stu.
//           </h1>
//         </motion.div>

//         {/* Middle Contact */}
//         <motion.div
//           className="footer-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <p className="footer-title">Email:</p>
//           <p className="footer-text">hello@figma.com</p><br />

//           <p className="footer-title">Instagram:</p>
//           <p className="footer-text">@figma</p><br />

//           <p className="footer-title">Facebook:</p>
//           <p className="footer-text">figma</p>
//         </motion.div>

//         {/* Right Address */}
//         <motion.div
//           className="footer-right"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="footer-title">Address:</p><br />

//           <p className="footer-text">224 Candyland Lane, Brooklyn, NY</p>
//           <p className="footer-text">(646) 555-4567</p><br />

//           <p className="footer-text">Movement Studios©</p>
//           <p className="footer-text">2025 All Rights Reserved</p>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         className="footer-bottom"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className="footer-block blue"
//           whileHover={{ scale: 1.08 }}
//         >
//           Our Socials
//         </motion.div>

//         <motion.div
//           className="footer-block black"
//           whileHover={{ scale: 1.08 }}
//         >
//           Email us
//         </motion.div>

//         <motion.div
//           className="footer-block pink"
//           whileHover={{ scale: 1.08 }}
//         >
//           Book with us
//         </motion.div>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;




import React from "react";
import "./footer.css";
// import the CSS file 
import { motion } from "framer-motion"
const Footer = () => {
  return (<footer className="footer">
    {/* Top Section */}
    <div className="footer-top">
      {/* Left Logo */}
      <div className="footer-left">
        <h1 className="footer-logo">
          Mov.<br />Stu. </h1>
      </div> {/* Middle Contact */}
      <div className="footer-center">
        <p className="footer-title">Email:</p>
        <p className="footer-text">hello@figma.com</p><br />
        <p className="footer-title">Instagram:</p>
        <p className="footer-text">@figma</p><br />
        <p className="footer-title">Facebook:</p>
        <p className="footer-text">figma</p>
      </div> {/* Right Address */}


      <div className="footer-right">
        <p className="footer-title">Address:</p><br />
        <p className="footer-text">224 Candyland Lane, Brooklyn, NY</p>
        <p className="footer-text">(646) 555-4567</p><br />
        <p className="footer-text">Movement Studios©</p>
        <p className="footer-text">2025 All Rights Reserved</p>
      </div>
    </div> {/* Bottom Section */}
    <div className="footer-bottom">
      <div className="footer-block blue">Our Socials</div>
      <div className="footer-block black">Email us</div>
      <div className="footer-block pink">Book with us</div>
    </div>
  </footer>
  );
};
export default Footer;