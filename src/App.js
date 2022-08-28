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

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ReactSwitch className="reactSwitch" onChange={toggleTheme} checked={theme === "dark"}/>
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