import React from "react";

function Project({ title, image, githubUrl, deployUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={deployUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={deployUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Project;
