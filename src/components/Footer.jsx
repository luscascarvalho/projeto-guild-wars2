import React from "react";
import logo from "../assets/Guild-Wars-2-Logo-Background-PNG.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="containerFooter">
        <img src={logo} alt="Logo Guild Wars 2" className="logoFooter" />
      </div>
    </footer>
  );
};

export default Footer;
