import React from "react";
import "./SearchBar.css";

const SearchBarNavContainer = props => {
  return (
    <div className="search-container">
      <div className="home">
        <a href="https://www.instagram.com">
          <img src="" alt="instagram-icon" />
        </a>
      </div>

      <div className="instagram-logo">
        <img src="" alt="instagram" />
      </div>

      <div className="search-bar">
        <form>
          <input type="text" name="searchText" placeholder="Search" />
        </form>
      </div>

      <div className="icons">
        <img src="" alt="compass" />
        <img src="" alt="heart" />
        <img src="" alt="user" />
      </div>
    </div>
  );
};

export default SearchBarNavContainer;
