import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="header">

      <div className="header-bar">

        <div className="search-logos">
          <div className="insta-logo">
            <img src="https://i.imgur.com/G94rAPX.png" alt="Instagram Logo" />
          </div>
          <div className="spacer-line"></div>
          <div className="insta-logo-text">
            <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
          </div>
        </div>

        <div className="search-bar-input">
          <input type="text" placeholder="Search" />
        </div>
        
        <div className="search-bar-icons">
          <div className="search-history search-icon">
            <img src="https://i.imgur.com/nTHcklP.png" alt="history icon" />
          </div>
          <div className="search-likes search-icon">
            <img src="https://i.imgur.com/CTQpSrK.png" alt="likes icon" />
          </div>
          <div className="search-profile search-icon">
            <img src="https://i.imgur.com/wP7aVGp.png" alt="profile icon" />
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
export default SearchBar;