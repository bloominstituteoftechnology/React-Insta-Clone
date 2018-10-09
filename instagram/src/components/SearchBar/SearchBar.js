import React from "react";
import "./SearchBar.Css";

const SearchBar = props => {
  return (
    <div className="searchBarContainer">
      <div className="imageContainer">
        <img alt="instagramLogo" src=" " className="logoImage" />
      </div>

      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
    </div>
  );
};

export default SearchBar;
