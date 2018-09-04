import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-header">
      <div className="logo">
        {/* <img src="./instagram-log.png" alt="instagram logo" /> */}
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="account-stuff" />
    </div>
  );
};

export default SearchBar;
