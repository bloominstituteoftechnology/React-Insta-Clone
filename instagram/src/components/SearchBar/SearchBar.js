import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar">

      <div className="search-logos">
        <div className="insta-logo">
          <img src="https://i.imgur.com/G94rAPX.png" alt="Instagram Logo" />
        </div>
        <div className="spacer-line"></div>
        <div className="insta-logo-text">
          <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
        </div>
      </div>

      <div className="search-bar-input"></div>
      
      <div className="search-bar-icons">
        <div className="search-history"></div>
        <div className="search-likes"></div>
        <div className="search-profile"></div>
      </div>
    </div>
  )
}
export default SearchBar;