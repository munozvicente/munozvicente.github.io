import React, { useEffect, createContext, useState } from "react";
import { initGA, trackingPageGA } from "./reactGA";
import ReactSwitch from "react-switch";

import "./App.css";

import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Tools from "./components/Tools/Tools.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

export const ThemeContext = createContext(null);

const App = () => {
  useEffect(() => {
    initGA();
    trackingPageGA("/home");
  }, []);

  const lightModeIcon = require('./img/icons/lightmode.png');
  const darkModeIcon = require('./img/icons/darkmode.png');

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="switch-container">
          <img src={lightModeIcon} alt="" width="28px"/>
          <ReactSwitch
            className="reactSwitch"
            onChange={toggleTheme}
            checked={theme === "dark"}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            id="material-switch"
          />
          <img src={darkModeIcon} alt="" width="28px"/>
        </div>
        <Header />
        <Hero />
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
