import React from "react";
import Logo from './logo.png'
import './SearchBar.css'

const SearchBar = props => (
  <div className="searchBarContainer">
        <i class="fab fa-instagram"></i>
        <span> | </span>
        <img src={Logo} Logo alt="Logo"></img>
        <input className='input' type="text" placeholder="Search"></input>
        <i class="far fa-dot-circle"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-user-alt"></i>
  </div>
);
export default SearchBar;
