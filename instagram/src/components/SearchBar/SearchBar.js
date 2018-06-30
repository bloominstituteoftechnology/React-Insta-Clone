import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return(
    <div className="search-bar">
      <div className="bar-content">
        <div className="logo-content">
          <img className="home-button" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Instagram_simple_icon.svg"/>
          <img className="logo"src="https://upload.wikimedia.org/wikipedia/commons/archive/2/2a/20160511152831%21Instagram_logo.svg"/>
        </div>
        <form className="search" onChange={props.handler}>
          <input type="text" placeholder="Search"/>
        </form>
        <div className="account-buttons">
          <img className="browse" src="./SearchAssets/instagram-compass.png" alt="#"/>
          <img className="likes" src="./SearchAssets/instagram-header-heart.png" alt="<3"/>
          <img className="user" src="./SearchAssets/instagram-user.png" alt="usr"/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
