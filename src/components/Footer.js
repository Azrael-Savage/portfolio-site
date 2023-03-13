import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/myusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/myusername/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/myuserid/myusername" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="https://twitter.com/myusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; My Portfolio {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
