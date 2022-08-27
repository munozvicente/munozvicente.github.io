import React from "react";
import "../../css/hiragino.css";
import "./header.css";

const Header = () => {

  const darkModeIcon = require('../../img/icons/darkmode.png');

  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="MW6">VM.</h1>
        <nav>
            <ul>
            <li className="homeButton">
                <p>Home</p>
            </li>
            <li className="navbarButton">
                <p>About</p>
            </li>
            <li className="navbarButton">
                <p>Projects</p>
            </li>
            <li className="contactButton">
                <p>CONTACT</p>
            </li>
            </ul>
        </nav>
        <div className="modeSwitch"> 
            <p>ACTIVATE DARK MODE</p>
            <img src={darkModeIcon} alt="" height="30px" width="30px" />
        </div>
      </div>
    </header>
  );
};

export default Header;
