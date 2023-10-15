import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2 className="section-heading">Education</h2>
      <div className="education-item">
        <h3>University Name</h3>
        <p>Degree: Bachelor of Technology in Computer Science</p>
        <p>Year: 2021-2025</p>
      </div>
      <div className="education-item">
        <h3>Online Course Name</h3>
        <p>Course: Web Development Bootcamp</p>
        <p>Year: 2017</p>
      </div>
      {/* Add more education items */}
    </div>
  );
}

export default Education;
