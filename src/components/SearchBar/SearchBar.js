import React from "react";
import "./SearchBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";

const SearchBar = props => {
  return (
    <form className="searchBar">
      <div className="div">
        <label for="search">
          <FontAwesomeIcon icon={faInstagram} /> | Instagram
        </label>
      </div>

      <div className="div">
        <input
          onKeyDown={props.searchPosts}
          className="searchbar"
          type="text"
          placeholder="&#128269; Search"
          onKeyDown={props.searchPosts}
        />
      </div>

      <div>
        <span>
          <FontAwesomeIcon icon={faCompass} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} />
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
