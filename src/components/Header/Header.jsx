import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';
import './Header.styles.css';

function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
