import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <nav className="SearchBar">
      <div className="container">

      <div className="logo">
        <a  href="/"
            id="glyph"
            className="sprite"></a>
        <a  href="/"
            id="logotype"
            className="sprite"></a>
      </div>
      
      <div className="search-box">
        <input  type="text"
                className="search-input"
                placeholder="Search"/>
        <span className="sprite"
              id="search"></span>
      </div>

      <div className="navigation">
        <a href="/"
            id="explore"
           className="sprite"></a>
        <a  href="/"
            id="activity"
            className="sprite"></a>
        <a  href="/"
            id="profile"
            className="sprite"></a>
      </div>

      </div>
    </nav>
  );
}

export default SearchBar;