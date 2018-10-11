import React from "react";
import iglogo from "../../img/iglogo.png";
import instacamera from "../../img/instacamera.png";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="insta-header">
      <div className="cam-logo">
        <img className="instacam" alt="instagram camera" src={instacamera} />
        <h2>|</h2>
        <img className="instalogo" alt="instagram logo" src={iglogo} />
      </div>
      <input
        placeholder="search"
        type="text"
        className="search-bar"
        name="searchTarget"
        onChange={props.changeHandle}
        value={props.searchPost}
      />
      <div className="all-icons">
        <div className="icons">
          <i className="fa fa-compass" />
        </div>
        <div className="icons">
          <i className="fa fa-heart-o" />
        </div>
        <div className="icons">
          <i className="fa fa-user-o" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
