import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return <div className="searchBar">
        <i className="fab fa-instagram fa-2x left" />
        <div className="verticalLine left" />
        <span className="left">Instagram</span>
        <div className="middle">
          <i className="fas fa-search" />
          <input type="text" placeholder="Search" />
        </div>
        <i className="far fa-compass right" />
        <i className="far fa-heart right" />
        <i className="far fa-user right" />
      </div>;
}

export default SearchBar;