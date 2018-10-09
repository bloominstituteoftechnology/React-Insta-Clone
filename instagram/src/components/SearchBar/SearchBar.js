import React from 'react';
import './SearchBar.css';

const SearchBar = ({ filterUsers, updateValue }) => {
  return (
    <div className="SearchBar">
      <div className="container">
        <h1 className="SearchBar-Logo">
          <span className="Logo">
            <i className="fab fa-instagram" />
          </span>
          <span className="Brand">
            <img src="logo.png" alt="Instagram" />
          </span>
        </h1>
        <div className="SearchBar-Container">
          <form onSubmit={e => filterUsers(e)}>
            <input
              type="text"
              placeholder="Search"
              className="SearchBar-Input"
              id="search"
              onChange={updateValue}
            />
          </form>

          <label htmlFor="search" className="Search-Icon">
            <i className="fas fa-search" />
          </label>
        </div>

        <div className="SearchBar-Icons">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
