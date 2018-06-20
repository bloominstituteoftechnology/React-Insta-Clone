import React from 'react';
import './SearchBar.css'





const SearchBar = props => {
    return (
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/115c6b9b980fa9acc57494680a9d5951f9f35ee1/instagram/src/assets/iglogo.png" className="logo-image" />
        </div>
        <div>
          <input type="text" className="search-bar" placeholder="Search" onKeyDown={props.searchPosts} />
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
  