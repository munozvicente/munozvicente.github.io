import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div className="contact">
      <div className="innerContact">
        <h1>Contact Me</h1>
        <div className="formContainer">
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="labelContainer">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                />
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="labelContainer">
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </label>
            </div>
            <div className="labelContainer">
              <label>
                Message:
                <textarea
                  rows={9}
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                />
                {errors.message && (
                  <span className="errorMessage">Please enter a message</span>
                )}
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
