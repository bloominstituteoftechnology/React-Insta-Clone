import React from "react";
import PropTypes from "prop-types";

const SearchBar = props => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <i className="fas fa-camera" />
        <img className="insta-img" src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" alt="logo" />
      </div>
      <form>
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="            Search"
          onChange={props.handleNameSearch}
        />
      </form>
      <div className="top-bar-right">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="fas fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
