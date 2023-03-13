import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa';
import ResumeSection from './ResumeSection';
import './Resume.styles.css';

function Resume({ proficiencies }) {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>
        <button>
          <FaDownload />
          Download Resume
        </button>
      </a>
      <ResumeSection title="Proficiencies">
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </ResumeSection>
    </section>
  );
}

Resume.propTypes = {
  proficiencies: PropTypes.array.isRequired,
};

export default Resume;
