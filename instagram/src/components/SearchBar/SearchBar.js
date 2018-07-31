import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (  
<div className="search-bar">
      <div className="image">
      <i class="fab fa-instagram"></i>
    </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
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