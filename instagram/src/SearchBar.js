import React from 'react';
import './App.css';


const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
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