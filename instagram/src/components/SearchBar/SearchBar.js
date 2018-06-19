import React from "react";
import "./SearchBar.css";
import logo from "./img/instagram-header.png";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="left-header-content">
        <a href="#">
          <div className="logo">
            <div className="logo-icon">
              <i className="fab fa-instagram" />
            </div>

            <img src={logo} className="logo-text" />
          </div>
        </a>
      </div>
      <div className="search-input">
        <form onSubmit={props.handleSearch}>
          <input id="search-input" type="text" placeholder="Search" value={props.searchInput} onChange={props.handleSearchInputChange}/>
        </form>
      </div>
      <div className="right-header-content">
        <div className="navigation">
          <a href="#">
            <i className="far fa-compass" />
          </a>
        </div>
        <div className="like">
          <a href="#">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="profile">
          <a href="#">
            <i className="far fa-user" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
