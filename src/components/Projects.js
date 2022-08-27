import React from 'react';

const Projects = () => {
    const project1 = {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: "",
    }

    const project2 = {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: "",
    }

    const project3 = {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium venenatis nisi in maximus. Nunc augue neque, finibus sit amet ex vel, tempor tincidunt lorem. Sed faucibus magna in lacus posuere pulvinar. Praesent dignissim dui ac dolor lobortis porta. Aenean a justo sed nibh fermentum ullamcorper sed eget urna. In in justo lorem.',
        image: "",
    }

    return(
        <div>
            <h1>Projects</h1>
            <div>
                <div> {/* Project 1 */}
                    <div>
                        <h2>{project1.title}</h2>
                        <p>{project1.description}</p>
                    </div>
                    <img src={project1.image} alt=""/>
                </div>
                <div> {/* Project 2 */}
                    <div>
                        <h2>{project2.title}</h2>
                        <p>{project2.description}</p>
                    </div>
                    <img src={project2.image} alt=""/>
                </div>
                <div> {/* Project 3 */}
                    <div>
                        <h2>{project3.title}</h2>
                        <p>{project3.description}</p>
                    </div>
                    <img src={project3.image} alt=""/>
                </div>
            </div>
        </div>
    )

}

export default Projects;