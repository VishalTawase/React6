import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-heading">Contact Me</h2>
      <ul className="contact-list">
        <li>Email: <a className="contact-link" href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/yourusername/">linkedin.com/in/yourusername/</a></li>
        <li>GitHub: <a className="contact-link" href="https://github.com/yourusername">github.com/yourusername</a></li>
        {/* Add more contact information */}
      </ul>
    </div>
  );
}

export default Contact;
