import React from "react";
import "./SearchBar.css";

const SearchBarNavContainer = props => {
  return (
    <div className="search-container">
      <div className="home">
        <a href="https://www.instagram.com">
          <i class="fab fa-instagram" />
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
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBarNavContainer;
