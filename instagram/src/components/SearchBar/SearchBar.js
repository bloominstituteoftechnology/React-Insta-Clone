import React, { Component } from "react";
import "./SearchBar.css";
import IGLogo from "../../assets/iglogo.png";
import IGCameraLogo from '../../assets/igcameralogo.png';


const SearchBar = props => {
  return (
    <div className="searchBarContainer">
      <div className="logo-wrapper">
        <img className='logo-camera' src={IGCameraLogo}></img>
        <img className="logo-img" src={IGLogo} />
      </div>
      <input
        className="searchBar"
        type="search"
        placeholder="Search things!"
        results="0"
      />
      <div className="social-icons-wrapper">
        <div className="social-icon">
          <i className="far fa-compass" />
        </div>
        <div className="social-icon">
          <i className="far fa-heart" />
        </div>
        <div className="social-icon">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

//    <input type="search" id="SearchBar" placeholder="Search" results="0" />
