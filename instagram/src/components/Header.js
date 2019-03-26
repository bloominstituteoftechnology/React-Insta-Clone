import React from 'react';
import './Header.css';
import logoMark from '../assets/glyph-logo_May2016.png';
import logoType from '../assets/instagram-logo.png';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <div className="container main-header">
        <div className="logo">
          <img className="logo-mark" src={logoMark} alt="instagram logo mark" />
          <div className="divider" />
          <img className="logo-type" src={logoType} alt="instagram logo type" />
        </div>
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={props.search}
            name="search"
            onChange={props.onChange}
          />
        </form>
        <nav className="main-nav">
          <p>Discovery</p>
          <p>Likes</p>
          <p>Profile</p>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  submit: PropTypes.func,
  search: PropTypes.func,
  onChange: PropTypes.func
};

export default Header;
