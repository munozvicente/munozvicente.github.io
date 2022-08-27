import React from "react";
import "./tools.css";

const Tools = () => {
  const lightModeData = {
    icon1: require("../../img/tools/lightmode/js.png"),
    icon2: require("../../img/tools/lightmode/reactjs.png"),
    icon3: require("../../img/tools/lightmode/redux.png"),
    icon4: require("../../img/tools/lightmode/cpp.png"),
    icon5: require("../../img/tools/lightmode/python.png"),
    icon6: require("../../img/tools/lightmode/django.png"),
    icon7: require("../../img/tools/lightmode/figma.png"),
    icon8: require("../../img/tools/lightmode/heroku.png"),
    icon9: require("../../img/tools/lightmode/postgresql.png"),
    icon10: require("../../img/tools/lightmode/firebase.png"),
    icon11: require("../../img/tools/lightmode/shopify.png"),
    icon12: require("../../img/tools/lightmode/mailchimp.png"),
  };

  return (
    <div className="tools">
      <div className="innerTools">
        <img src={lightModeData.icon1} alt="" height="" width="" />
        <img src={lightModeData.icon2} alt="" height="" width="" />
        <img src={lightModeData.icon3} alt="" height="" width="" />
        <img src={lightModeData.icon4} alt="" height="" width="" />
        <img src={lightModeData.icon5} alt="" height="" width="" />
        <img src={lightModeData.icon6} alt="" height="" width="" />
        <img src={lightModeData.icon7} alt="" height="" width="" />
        <img src={lightModeData.icon8} alt="" height="" width="" />
        <img src={lightModeData.icon9} alt="" height="" width="" />
        <img src={lightModeData.icon10} alt="" height="" width="" />
        <img src={lightModeData.icon11} alt="" height="" width="" />
        <img src={lightModeData.icon12} alt="" height="" width="" />
      </div>
    </div>
  );
};

export default Tools;
