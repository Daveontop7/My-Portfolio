import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-pic">
        <img src="/ninja.jpeg" alt="profile" />
      </div>
      <h1>George David</h1>
      <h3>Web Developer</h3>
      <p>
      I am a web developer focused on creating responsive and efficient websites and web apps. I enjoy solving problems, working on both front-end and back-end, and continuously learning new technologies.
      </p>
      <div className="social-icons">
      <a href="https://github.com/Daveontop7" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="medium" />
        </a>
        <a href="https://www.linkedin.com/in/david-george-30998b349/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href="https://wa.me/09027235106">
          <WhatsAppIcon fontSize="medium" />
          </a>
      </div>
    </div>
  
  );
};

export default Home;
