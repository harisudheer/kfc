import React from "react";
import logo3 from "./logo3.png";
import Footer from "./Footer.css";
export default function () {
  return (
    <>
      <div className="Footer-container">
      <img src={logo3}/>
        <div>
          <h3>KFC India</h3>
          About KFC<br></br>
          KFC Care<br></br>
          Careers<br></br>
        </div>
        <div>
          <h3>KFC Food</h3>
          Menu<br></br>
          Delivery<br></br>
          Order Lookup<br></br>
        </div>
        <div>
          <h3>Legal</h3>
          Terms and Conditions<br></br>
          Privacy Policy<br></br>
          Disclaimer<br></br>
        </div>
        <div>
          <h3>Social Media</h3>
          Facebook<br></br>
          Twitter<br></br>
          Instagram
        </div>
      </div>
         <div className="Footer-bottom">
        <div>Web Accessiblity | Privacy Statement | Terms of Use Contact Us</div>
        <div>© 2024
        Copyright©KFC Corporation. @All rights reserved.</div> 
      </div>
    </>
  );
}
