import React from "react";
import "../../css/hiragino.css";
import "./header.css";

const Header = () => {

  const darkModeIcon = require('../../img/icons/darkmode.png');

  return (
    <header className="header">
      <div className="wrapper">
        <a href="#"><h1 className="MW6">VM.</h1></a>
        <nav>
            <ul>
            <li className="homeButton">
                <a href="/home"><p>Home</p></a>
            </li>
            <li className="navbarButton">
              <a href="/about"><p>About</p></a>
            </li>
            <li className="navbarButton">
              <a href="/projects"><p>Projects</p></a>
            </li>
            <li className="contactButton">
              <a href="/contact"><p>CONTACT</p></a>
            </li>
            </ul>
        </nav>
        <div className="modeSwitch"> 
            <a href="/">
              <p>ACTIVATE DARK MODE</p>
            </a>
            <a href="/"><img src={darkModeIcon} alt="" height="30px" width="30px" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
