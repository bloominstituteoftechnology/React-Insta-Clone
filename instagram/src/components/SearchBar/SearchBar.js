import React from 'react'
import './SearchBar.css';

function SearchBar (props) {
    return (
        <div className="search-bar">
        <div className="camera-icon">camera icon</div>
          <div className="logo">logo</div>
          <input type="text" />
          <div className="navigation">navigation</div>
          <div className="like">like</div>
          <div className="profile">profile</div>
        </div>
    );
}

export default SearchBar;