import React from 'react';
import IGLogo from '../../assets/iglogo.png';


const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="image">
        <img alt="instagram logo" src={IGLogo} className="logo" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
