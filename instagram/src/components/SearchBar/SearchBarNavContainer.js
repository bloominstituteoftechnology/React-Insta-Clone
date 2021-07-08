import React from "react";
import "./SearchBar.css";

const SearchBarNavContainer = props => {
  return (
    <div className="search-container">
      <div className="home">
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram" />
        </a>
        <div className="instagram-logo">
          <img src={require("../../img/instagram.png")} alt="instagram" />
        </div>
      </div>

      <div className="search-bar">
        <form>
          <input
            type="text"
            name="searchText"
            placeholder="Search"
            value={props.searchText}
            onChange={props.handleChange}
          />
        </form>
      </div>

      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBarNavContainer;
