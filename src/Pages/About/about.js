// src/Pages/About/About.js
import React from 'react';
import './about.css';

// MUI Icons
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code'; 
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; 
import BoltIcon from '@mui/icons-material/Bolt'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="about-description">
        I am a passionate web developer focused on building responsive, user-friendly, and efficient websites and applications.
        I love solving real-world problems, learning new technologies, and creating solutions that make a difference.
      </p>

      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <HtmlIcon className="skill-icon html" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <CssIcon className="skill-icon css" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <JavascriptIcon className="skill-icon javascript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <BoltIcon className="skill-icon bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <CodeIcon className="skill-icon react" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <VideoLibraryIcon className="skill-icon capcut" />
          <p>Editing</p>
        </div>
      </div>
    </div>
  );
};

export default About;
