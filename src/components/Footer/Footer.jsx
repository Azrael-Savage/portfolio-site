import React from 'react';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://github.com">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
        </ul>
      </nav>
      <p>&copy; 2021 My Portfolio</p>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className="copy">&copy; {new Date().getFullYear()} My React Portfolio</div>
    </footer>
  );
}

export default Footer;
