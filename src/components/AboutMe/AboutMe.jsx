import React from 'react';
import PropTypes from 'prop-types';
import aboutMeStyles from './AboutMe.styles';

function AboutMe() {
  return (
    <section style={aboutMeStyles.section}>
      <div style={aboutMeStyles.content}>
        <img style={aboutMeStyles.image} src="about-me.jpg" alt="Me" />
        <div style={aboutMeStyles.text}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod libero quis sapien rutrum, ut
            convallis diam scelerisque. Curabitur dictum auctor justo, vel hendrerit nibh congue eu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eleifend dui ut ante
            consequat maximus.
          </p>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default AboutMe;
