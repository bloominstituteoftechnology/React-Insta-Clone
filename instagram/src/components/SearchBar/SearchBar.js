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
          <span className="Brand">
            <img src="logo.png" alt="Instagram" />
          </span>
        </h1>
        <div className="SearchBar-Container">
          <input
            type="text"
            placeholder="Search"
            className="SearchBar-Input"
            id="search"
          />
          <label htmlFor="search" className="Search-Icon">
            <ion-icon name="search" />
          </label>
        </div>

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
