import React from "react";
import title from "./title.png";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar-container">
      <div className="searchBar-title">
        <i className="fab fa-instagram" />
        <p>|</p>
        <img className="instagram-title" src={title} alt="Instagram title" />
      </div>
      <form className="searchBar-text-form">
        <input
          className="search-textbar"
          type="text"
          placeholder="&#x1F50D; Search"
          value={props.searchValue}
          onChange={props.searchChange}
        />
        <input className='search-button' type='submit' onClick={props.search}/>
      </form>
      <div className="searchBar-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
