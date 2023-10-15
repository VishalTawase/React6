import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div>
      <h2 className="section-heading">My Projects</h2>
      <div className="project">
        <h3>Project 1: Portfolio Website</h3>
        <p>A personal portfolio website built with React, showcasing my skills and projects.</p>
      </div>
      <div className="project">
        <h3>Project 2: Task Management App</h3>
        <p>An application to manage tasks and to-dos, built with React and Firebase.</p>
      </div>
      <div className="project">
        <h3>Project 3: E-commerce Website</h3>
        <p>An online store built with Node.js, Express, and MongoDB for backend and React for the front end.</p>
      </div>
    </div>
  );
}

export default Projects;
