import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return <div className="searchBar">
        <i className="fab fa-instagram fa-2x left" />
        <div className="verticalLine left" />
        <span className="left">Instagram</span>
        <div className="middle">
          <input type="text" className="fontControl" placeholder="&#xf002; Search" />
        </div>
        <i className="far fa-compass right" />
        <i className="far fa-heart right" />
        <i className="far fa-user right" />
      </div>;
}

export default SearchBar;