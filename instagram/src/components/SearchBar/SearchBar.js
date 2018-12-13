import React from "react";
import SearchInput from "./SearchInput";
import { FiInstagram, FiCompass, FiHeart, FiUser } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="logo-container">
        <FiInstagram className="icon logo" />
        <h1 id="header-logo">SlightDelayGram</h1>
      </div>
      <SearchInput />
      <div className="header-icon-container">
        <FiCompass className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
      </div>
    </div>
  );
};
export default SearchBar;
