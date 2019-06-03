import React from 'react';
import IGlogo from '../../../../assets/IGlogo.png'
import './SearchBar.css';

const SearchBar = () => {
    return (
      <div className="search-wrapper">
        <div className="img-wrapper">
          <img alt="instagram logo" src={IGlogo} className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="icon-wrapper">
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };

  export default SearchBar;