import React from "react";
import logo from "../../assets/header-logo.png";
import navigate from "../../assets/navigate.png";
import favorite from "../../assets/favorites.png";
import profile from "../../assets/profile.png";
import search from "../../assets/search.png";
import "./SearchBar.css";

const SearchBar = props => {
  const handleChange = e => {
    props.handleChange(e.target.value)
  }

  const handleKeyPress = e => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      props.handleSearchSubmit()
    }
  }

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <div className="search-bar__brand">
          <img src={logo} alt="logo"/>
        </div>
        <div className="search-bar__search">
          <div className="search-bar__input">
            <img src={search} alt="search"/>
            <input 
            value={props.searchInput}
            type="text" 
            placeholder="Search" 
            onChange={handleChange}
            onKeyDown={handleKeyPress} />
          </div>
        </div>
        <div className="search-bar__icons">
          <img src={navigate} alt="nav"/>
          <img src={favorite} alt="fave"/>
          <img src={profile} alt="profile"/>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
