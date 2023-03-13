import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Project.styles';

function Project({ image, title, description, deployedLink, githubLink }) {
  return (
    <article style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.textContainer}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.links}>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Deployed Application
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub Repository
          </a>
        </div>
        <Link to="/portfolio" style={styles.backLink}>
          Back to Portfolio
        </Link>
      </div>
    </article>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
