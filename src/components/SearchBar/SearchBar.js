import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <div className="search-heading">
            <span className="fab fa-instagram"></span>
            <span className='divider'></span>
            <span className="search-title">Instaclone</span>
          </div>
          <div className="search-input">
            <span className="fas fa-search"></span>
            <span className="search-string">Search</span>
            {/* <input type="text" defaultValue="Search"></input> */}
          </div>
          <div className="search-icons">
            <span className="far fa-compass"></span>
            <span className="far fa-heart"></span>
            <span className="far fa-user"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
