import React from "react";
import logo from "../../assets/header-logo.png";
import navigate from "../../assets/navigate.png";
import favorite from "../../assets/favorites.png";
import profile from "../../assets/profile.png";
import search from "../../assets/search.png";
import "./SearchBar.css";

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-bar__wrapper">
      <div className="search-bar__brand">
        <img src={logo} />
      </div>
      <div className="search-bar__search">
        <div className="search-bar__input">
          <img src={search} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="search-bar__icons">
        <img src={navigate} />
        <img src={favorite} />
        <img src={profile} />
      </div>
    </div>
  </div>
);

export default SearchBar;
