import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <nav className="SearchBar">
      <div className="container">
        <div className="logo">
          <a href="/" id="glyph" className="sprite" />
          <a href="/" id="logotype" className="sprite" />
        </div>

        <div className="search-box">
          <input type="text" className="search-input" placeholder="Search" />
          <span className="sprite" id="search" />
        </div>

        <div className="navigation">
          <a href="/" id="explore" className="sprite" />
          <a href="/" id="activity" className="sprite" />
          <a href="/" id="profile" className="sprite" />
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
