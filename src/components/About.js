import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="section-heading">About Me</h2>
      <p className="about-paragraph">
        I'm a passionate web developer with a focus on front-end technologies. I love creating
        interactive and user-friendly websites. My journey in web development started a few years
        ago, and I've been learning and building ever since.
      </p>
      <p className="about-paragraph">
        When I'm not coding, you can find me exploring new technologies, playing video games, or
        hiking in the great outdoors.
      </p>
      <p className="about-paragraph">
        If you'd like to learn more about my work, you can visit my{' '}
        <a className="about-link" href="https://github.com/VishalTawase">
          GitHub profile
        </a>.
      </p>
    </div>
  );
}

export default About;
