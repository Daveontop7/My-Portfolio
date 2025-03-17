// Footer.jsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dave. All rights reserved.</p>
      <div className="social-links">
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
    </footer>
  );
};

export default Footer;
