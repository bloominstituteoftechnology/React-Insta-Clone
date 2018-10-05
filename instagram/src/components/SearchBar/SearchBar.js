import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="container">
        <h1 className="SearchBar-Logo">
          <span className="Logo">
            <ion-icon name="logo-instagram" />
          </span>
          <span className="Brand">Instagram</span>
        </h1>
        <input type="text" placeholder="Search" className="SearchBar-Input" />
        <div className="SearchBar-Icons">
          <ion-icon name="compass" />
          <ion-icon name="heart-empty" />
          <ion-icon name="person" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
