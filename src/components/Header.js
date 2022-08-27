import React from "react";
import "../css/hiragino.css";
import "../css/main.css";

const Header = () => {

  const darkModeIcon = "../img/icons/darkmode.png";

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
        <div>
            <p className="modeSwitch">ACTIVATE DARK MODE</p>
            <img src="../img/icons/darkmode.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
