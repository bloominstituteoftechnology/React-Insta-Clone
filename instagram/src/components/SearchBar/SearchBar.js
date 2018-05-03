import React from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = props => {
  return (
    <div>
      <header className = "searchbar">
        <div className="instagramlogo">
          <i className="fab fa-instagram"></i>
          <h2>Instagram</h2>
        </div>
        <div className="search">
          <input type="submit"/>
          <input type="text" placeholder="Search"/>
        </div>
        <div className="accountinfo">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </header>
    </div>
  )
}

export default SearchBar;