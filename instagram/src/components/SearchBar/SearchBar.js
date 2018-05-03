import React, {Component} from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = props => {
  return (
    <div>
      <header className = "searchbar">
        <div className="instagramlogo">
          <i class="fab fa-instagram"></i>
          <h2>Instagram</h2>
        </div>
        <div className="search">
          <input type="submit"/>
          <input type="text" placeholder="Search"/>
        </div>
        <div className="accountinfo">
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
        </div>
      </header>
    </div>
  )
}

export default SearchBar;