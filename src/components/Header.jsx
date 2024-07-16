import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Guild-Wars-2-Logo-Background-PNG.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li className="home">
            <Link to="/">HOME</Link>
          </li>
          <li className="add-video">
            <Link to="/add-video">NOVO VÍDEO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
