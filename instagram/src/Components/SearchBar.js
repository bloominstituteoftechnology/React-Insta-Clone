import React from 'react';


const SearchBar = props => {
  return(
    <div className="search">
      <div className="search-left">
        <i className="fab fa-instagram fa-2x" />
        <p className="line">|</p>
        <p className="insta-border">Instagram</p>
      </div>
      <input type="text" placeholder="Search"
      className="search-input"/>
      <div className="right-icons">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </div>
  );
}

export default SearchBar;

