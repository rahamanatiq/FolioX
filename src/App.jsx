import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden' // Changed from overflow: hidden to allow scrolling
    }}>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
