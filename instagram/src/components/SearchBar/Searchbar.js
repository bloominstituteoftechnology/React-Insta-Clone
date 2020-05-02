import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <img className="camera" src={require("../PostContainer/img/insta_icon.png")} alt="logo" />
      <img className="instagram" src={require("../PostContainer/img/insta_logo.png")} alt="logo" />
      <div className="search-form">
        <input
          // onChange={props.searchFilterHandler}
          className="search-input"
          type="text"
          placeholder="Search"
          onKeyDown={props.searchFilter}
        />
      </div>
      <div className="search-bar-left-icons-container">
        <img className="search-bar-left-icons" src={require("../PostContainer/img/insta_plus.png")} alt="logo" />
        <img className="search-bar-left-icons" src={require("../PostContainer/img/insta_heart.png")} alt="logo" />
        <img className="search-bar-left-icons" src={require("../PostContainer/img/insta_profile.png")} alt="logo" />
      </div>
    </div>
  );
};

export default SearchBar;
