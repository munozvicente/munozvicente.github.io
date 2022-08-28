import React, { useEffect, createContext, useState } from "react";
import ReactSwitch from "react-switch";

import "../../css/hiragino.css";
import "./header.css";


const Header = () => {

  const darkModeIcon = require('../../img/icons/darkmode.png');

  const [theme, setTheme] = useState("dark");
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

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
        </div>
      </div>
    </header>
  );
};

export default Header;
