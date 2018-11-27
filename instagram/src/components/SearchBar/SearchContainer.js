import React from "react";
import "./SearchBar.css";

const SearchContainer = () => {
  return (
    <div className="search-bar">
      <div className="logo">
        <i class="fab fa-instagram" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="panel">
        <div className="find">
          <img />
        </div>
        <div className="likes">
          <img />
        </div>
        <div className="settings">
          <img />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
