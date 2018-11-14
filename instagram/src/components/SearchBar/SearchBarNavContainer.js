import React from "react";
import "./SearchBar.css";

const SearchBarNavContainer = props => {
  return (
    <div className="search-container">
      <div className="home">
        <a href="https://www.instagram.com">
          <img src="../../img/insta-cam.png" alt="instagram-icon" />
        </a>
      </div>

      <div className="instagram-logo">
        <img src="../../img/instagram.png" alt="instagram" />
      </div>

      <div className="search-bar">
        <form>
          <input type="text" name="searchText" placeholder="Search" />
        </form>
      </div>

      <div className="icons">
        <img src="../../img/discover.png" alt="compass" />
        <img src="../../img/search-heart.jpg" alt="heart" />
        <img src="../../img/users.png" alt="user" />
      </div>
    </div>
  );
};

export default SearchBarNavContainer;
