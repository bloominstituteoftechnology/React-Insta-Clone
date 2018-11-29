import React from "react";
import "./SearchBar.css";

const SearchContainer = () => {
  return (
    <div className="search-bar">
      <div className="logo">
        <i class="fab fa-instagram" />
        <h1 className="logo-text">Instagram</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="panel">
        <div className="find">
          <i class="far fa-compass" />
        </div>
        <div className="likes">
          <i class="far fa-heart" />
        </div>
        <div className="settings">
          <i class="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
