import React from "react";
import "./SearchBar.css";
import logo from "../assets/logo.svg.png";

const SearchBar = props => {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-left">
        <i className="fab fa-instagram" />
        <div className="divider">|</div>
        <img className="logo" src={logo} alt="Instagram" />
      </div>
      <div className="searchbar-center">
        <input placeholder="Search" onClick={props.searchPosts} />
      </div>
      <div className="searchbar-right">
        <i className="fa fa-compass" />
        <i className="fa fa-heart" />
        <i className="fa fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
