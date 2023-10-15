import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Vishal Shahuraj Tawase</h1>
        <Navigation />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  );
}

export default App;
