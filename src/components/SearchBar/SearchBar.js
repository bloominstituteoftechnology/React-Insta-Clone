import React from 'react';
import './SearchBar.css';

import InstagramLogo from '../../Images/instagram-logo.jpeg';
import InstagramScript from '../../Images/instagram-script.png';
import NavigationIcon from '../../Images/navigation-icon.png';
import UserIcon from '../../Images/user-icon.jpeg';
import HeartIcon from '../../Images/heart-icon.png';
import MagnifyingGlass from '../../Images/magnifying-glass.png';
import PropTypes from 'prop-types';


export const SearchBar = (props) =>

    <div className = "header">
        <section className = "logo">
          <img src={InstagramLogo} alt="instagram logo" className="instagram-logo" />
          <img src={InstagramScript} alt="instagram script" className="instagram-script" />
          </section>
          <section className="search">
          <img src={MagnifyingGlass} alt="magnifying glass" className="searchbar" />
          </section>
          <section className="icons">
          <img src={NavigationIcon} alt="Navigation Icon" className="icon" />
          <img src={HeartIcon} alt="Heart Icon" className="icon"  />
          <img src={UserIcon} alt="User Icon" className="icon"  />
          </section>
       </div>;


SearchBar.propTypes = {
    input: PropTypes.string
};
