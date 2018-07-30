import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import logoText from './instagramLogoText.png';

const SearchBar = (props) => {
  return (  
    <div className="searchBarMainDiv">
      {/* start logo div */}
      <div className="searchBarLogoDiv">
        <i class="fa fa-instagram"></i>|<img src={logoText} alt="instagram text" />
      </div>

      {/* start input div */}
      <div className="searchBarInputDiv">
        <input placeholder="Search" />
      </div>

      {/* start links div */}
      <div className="searchBarLinksDiv">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>



    </div>
  );
}
 
export default SearchBar;