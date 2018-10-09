import React from "react";
import "./SearchBar.css";
import { Heart, Compass, Instagram, User, Search } from "../../assets/assets";

const SearchBar = props => {
  return (
    <div className="fixed-header">
      <div className="instabox">
        <Instagram />

        <div className="title">
          <h1>Instagram</h1>
        </div>
      </div>
      <div className='search'>
      <Search />
        <input type="text" placeholder="Search" />
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
