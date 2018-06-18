import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="container">
    <div className="row title">
      <i className="col-sm-1 fab fa-instagram" />
      <div className="col-sm-1 instaFont">Instagram</div>
      <div className="col-sm-8">
        <button className="searchButton">Search</button>
      </div>
      <div className="">
        <i className="col-sm-1 far fa-compass" />
        <i className="col-sm-1 far fa-heart" />
        <i className="col-sm-1 far fa-user" />
      </div>
    </div>
  </div>
);

export default SearchBar;
