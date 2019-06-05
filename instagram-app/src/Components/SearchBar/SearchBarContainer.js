import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
      <div className="search-wrapper">
        <div className="img-wrapper">
          <img alt="instagram logo" src='https://image.flaticon.com/icons/png/512/87/87390.png' className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
        </div>
        <div className="icon-wrapper">
          <div className="social">
          <i className="far fa-compass"></i>
          </div>
          <div className="social">
            <i className="fas fa-heart" />
          </div>
          <div className="social">
            <i className="fas fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };

  export default SearchBar;