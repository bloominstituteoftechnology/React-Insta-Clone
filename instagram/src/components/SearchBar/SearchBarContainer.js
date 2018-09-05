import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './searchBar.css';

const SearchBar = (props) => {
    return (
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" onKeyUp={props.searchPosts} />
        </div>
        <button onClick={props.logout}>log out</button>
        <div className="social-wrapper">
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;