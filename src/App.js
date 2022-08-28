// import css
import React, { useEffect } from "react";
import { initGA, trackingPageGA } from "./reactGA";

import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Tools from './components/Tools/Tools.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  useEffect(() => {
    initGA();
    trackingPageGA("/home");
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
