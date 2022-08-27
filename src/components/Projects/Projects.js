import React from 'react';
import "./projects.css";

const Projects = () => {
    const project1 = {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: require('../../img/placeholder.png'),
    }

    const project2 = {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: require('../../img/placeholder.png'),
    }

    const project3 = {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: require('../../img/placeholder.png'),
    }

    return(
        <div className="projects">
            <div className="innerProjects">
            <h1>Projects</h1>
                <div>
                    <div className='projectContainer'> {/* Project 1 */}
                        <img src={project1.image} alt=""/>
                        <div className="innerProjectContainer">
                            <h2>{project1.title}</h2>
                            <p>{project1.description}</p>
                        </div>
                    </div>
                    <div className='projectContainerMiddle'> {/* Project 2 */}
                        <img src={project2.image} alt=""/>
                        <div className="innerProjectContainer">
                            <h2>{project2.title}</h2>
                            <p>{project2.description}</p>
                        </div>
                    </div>
                    <div className='projectContainer'> {/* Project 3 */}
                        <img src={project3.image} alt=""/>
                        <div className="innerProjectContainer">
                            <h2>{project3.title}</h2>
                            <p>{project3.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects;