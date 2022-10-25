import React from "react";
import "./projects.css";

const Projects = () => {
  const project1 = {
    title: "Full Stack E-commerce Website",
    description:
      "Developed a self-manageable online shop that supports payments through PayPal (PayPal Sandbox). It consists of a ReactJS built client connected to a remote Django server. Supports many CRUD requests for users, products and orders, that were previously tested on Postman during development. Data flow is unidirectional thanks to Flux architecture, DB is AWS's PostgreSQL + images on S3. Deployed with Heroku.",
    image: require("../../img/screenshots/ecommerce.png"),
  };

  const project2 = {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.",
    image: require("../../img/placeholder.png"),
  };

  const project3 = {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.",
    image: require("../../img/placeholder.png"),
  };

  return (
    <div className="projects">
      <div className="innerProjects">
        <h1>Projects</h1>
        <div>
          <div className="projectContainer">
            {" "}
            {/* Project 1 */}
            <img src={project1.image} alt="" />
            <div className="innerProjectContainer">
              <h2>{project1.title}</h2>
              <p>{project1.description}</p>
              <h4>
                <a href="https://ecomdjango-vm.herokuapp.com" target="blank">
                  Online Demo Available Here
                </a>
              </h4>
              <h4>
                <a
                  href="https://github.com/munozvicente/django-react_ecommerce"
                  target="blank"
                >
                  GitHub Repository
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

//<div className='projectContainerMiddle'> {/* Project 2 */}
//                        <img src={project2.image} alt=""/>
//                        <div className="innerProjectContainer">
//                            <h2>{project2.title}</h2>
//                            <p>{project2.description}</p>
//                        </div>
//                    </div>
//                    <div className='projectContainer'> {/* Project 3 */}
//                        <img src={project3.image} alt=""/>
//                        <div className="innerProjectContainer">
//                            <h2>{project3.title}</h2>
//                            <p>{project3.description}</p>
//                        </div>
//                    </div>
