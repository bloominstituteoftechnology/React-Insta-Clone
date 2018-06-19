import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="container">
    <div className="row title">
      <i className="col-sm-1 fab fa-instagram logo" />
      <div className="divider" />
      <div className="col-sm-1 instaFont">Instagram</div>
      <div className="col-sm-8">
        <input
          className="searchBox"
          type="text"
          name="search"
          value="&#61442; Search"
        />
      </div>
      <div>
        <i className="col-sm-1 far fa-compass" />
        <i className="col-sm-1 far fa-heart" />
        <i className="col-sm-1 far fa-user" />
      </div>
    </div>
  </div>
);

export default SearchBar;
