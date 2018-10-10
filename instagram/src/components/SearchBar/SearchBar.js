import React from "react";
import "./SearchBar.css";
import {
  Heart,
  Compass,
  Instagram,
  User,
  Search,
  Xcircle
} from "../../assets/assets";

const SearchBar = props => {
  return (
    <div className="fixed-header">
      <div className="instabox">
        <Instagram />

        <div className="title">
          <h1>Instagram</h1>
        </div>
      </div>
      <div className="search">
        <Search searchFocus={props.searchFocus} />
        <Xcircle searchFocus={props.searchFocus} searchBlur={props.searchBlur} />
        <input
          type="text"
          placeholder="Search"
          className={props.searchFocus ? "search-selected" : ""}
          onFocus={props.searchFocusHandler}
          onChange={props.searchHandler}
          value={props.searchInput}
          
        />
      </div>
      <div className="icons">
        <Compass />
        <Heart />
        <User />
      </div>
    </div>
  );
};

export default SearchBar;
