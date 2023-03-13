import React from "react";

function Resume() {
  const proficiencies = ["JavaScript", "React", "HTML", "CSS", "Node.js", "MongoDB"];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <ul className="proficiencies">
        {proficiencies.map((proficiency) => (
          <li key={proficiency}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
