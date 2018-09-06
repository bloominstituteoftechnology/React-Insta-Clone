import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className = 'search-wrapper'>
      <div className = 'img-wrapper'>
        <img alt = 'Instagram logo' src = {IGLogo} className = 'logo' />
      </div>

      <div>
        <input type = 'text' placeholder 'Search' />
      </div>

      <div className = 'social-wrap'>
        <div className = 'social'>
          <i className = 'fa fa-compass' />
        </div>

        <div className = 'social'>
          <i className = 'fa fa-heart' />
        </div>

        <div className = 'social'>
          <i className = 'fa fa-user-circle' />
        </div>
      </div>
    </div> // search wrapper
  );
};

export default SearchBar;
