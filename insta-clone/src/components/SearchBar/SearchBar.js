import React from "react";
import instacloneimg from "./../../imgs/instacloneimg.png";
import "./SearchBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCompass,
  faHeart
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCompass, faHeart, faSearch);

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-content">
        <img className="img-clone" src={instacloneimg} alt="insta-clone" />
        <h2>|</h2>
        <h1>Instagram</h1>

        <form>
          <FontAwesomeIcon className="search" icon="search" />
          <input type="search" placeholder="Search" />
        </form>

        <div className="search icon-content">
          <FontAwesomeIcon className="compass" icon={["far", "compass"]} />{" "}
          <FontAwesomeIcon className="heart" icon={["far", "heart"]} />{" "}
          <FontAwesomeIcon className="user" icon={["far", "user"]} />
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default SearchBar;
