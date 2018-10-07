import React from "react";
import title from "./title.png";
import heart from "./heart.png";
import person from "./person.png";
import compass from "./compass.png";
import mainicon from "./mainicon.png";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <div className="searchBar-title">
        <img className="instagram-icom" src={mainicon} alt="Instagram icon" />
        <p>|</p>
        <img className="instagram-title" src={title} alt="Instagram title" />
      </div>
      <form className="searchBar-text-form">
        <input
          className="search-textbar"
          type="text"
          placeholder="&#x1F50D; Search"
        />
      </form>
      <div className="searchBar-icons">
        <img src={compass} alt="Instagram compass icon" />
        <img src={heart} alt="Instagram heart icon" />
        <img src={person} alt="Instagram person icon" />
      </div>
    </div>
  );
};

export default SearchBar;
