import React from "react";
import "../../css/hiragino.css";
import "./hero.css";

const Hero = () => {

  const portraitPicture = require('../../img/portrait.png')

  return (
    <div className="hero">
      <div className="innerHero">
        <div className="heroContainerOne">
          <h2>👋 Hello! I am</h2>
          <h1>Vicente Muñoz</h1>
          <h3>Web Developer & Engineering Student</h3>
          <p>
            I had my first approach to the world of programming when I was 15
            years old.<br></br> A couple of years later I decided this was the way to go
            and started a journey that is still just beginning.
          </p>
          <h4>Now: Django / React Full-Stack Developer</h4>
          <a href="/"><h5>READ MORE</h5></a>
        </div>
        <div className="heroContainerTwo"><img src={portraitPicture} alt="" height="" width="" /></div>
      </div>
    </div>
  );
};

export default Hero;
