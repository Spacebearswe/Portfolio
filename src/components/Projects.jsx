import React from "react";
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.css';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app </p>
            </div> */}
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed 3D multiplayer racing game with C#.</p>
            </div>
             <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed 2D shooting game</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;