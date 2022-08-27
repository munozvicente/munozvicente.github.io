import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="innerContact">
        <h1>Contact Me</h1>
        <div className="formContainer">
          <form>
            <div className="labelContainer">
              <label>
                Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="labelContainer">
              <label>
                Email Address:
                <input type="email" name="email" />
              </label>
            </div>
            <div className="labelContainer">
              <label>
                Message:
                <textarea rows={9} name="message" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
