import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-heading">My Skills</h2>
      <ul className="skills-list">
        <li>HTML/CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL and NoSQL databases</li>
        {/* Add more skills */}
      </ul>
    </div>
  );
}

export default Skills;
