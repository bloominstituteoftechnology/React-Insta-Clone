import React from "react";
import logo from './logo.png'
import './SearchBar.css'

const SearchBar = props => (
  <div className="searchBarContainer">
        <div className="logoContainer">
          <i className="fab fa-instagram"></i>
          <span> | </span>
          <img src={logo} alt="Logo"></img>
        </div>
        <input className='input' type="text" placeholder="...Search"></input>
        <div className="userIconsContainer">
          <i className="far fa-dot-circle"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-user-alt"></i>
        </div>
  </div>
);
export default SearchBar;
