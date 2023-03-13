import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/assets/images/project1.jpg",
      githubUrl: "https://github.com/myusername/project1",
      deployUrl: "https://myusername.github.io/project1/",
    },
    {
      title: "Project 2",
      image: "/assets/images/project2.jpg",
      githubUrl: "https://github.com/myusername/project2",
      deployUrl: "https://myusername.github.io/project2/",
    },
    // More projects...
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
