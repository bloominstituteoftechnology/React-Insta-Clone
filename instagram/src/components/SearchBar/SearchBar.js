import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = () => {
  return (
    <div class = 'header'>
      <section class = 'search-section'>
        <img class = 'logo' alt = 'Logo' src = '../../../assets/logo.svg'/>
      </section>

      <section class = 'search-section'>
        <input class = 'search-main' placeholder = 'Search here'/>
      </section>

      <section>
        <div class = 'searchbutton nav'>🧭</div>
        <div class = 'searchbutton heart'>🖤</div>
        <div class = 'searchbutton account'>👱</div>
      </section>
    </div>
  );
};

export default SearchBar;
