import React, { useState } from "react";

function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <button onClick={handleToggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
