import React from "react";
import './SearchBar.css';
import Login from "../Login/Login";

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="social-left">
        <i className="fa fa-instagram" aria-hidden="true" /> 
        <span>|</span>
        <img src="../assets/Instagram_logo.png" alt="instagram-logo"/>
      </div>
      <input 
        className="search-bar"
        type="text" 
        placeholder="search"
        onKeyDown={props.searchPosts}
        />
      <div className="social-right">
        <i className="fa fa-compass" aria-hidden="true" />
        <i className="fa fa-heart" aria-hidden="true" />
        <i  className="fa fa-user" aria-hidden="true" />
        <Login />
        {/* <button onClick= */}
      </div>
    </div>
  );
};

export default SearchBar;
