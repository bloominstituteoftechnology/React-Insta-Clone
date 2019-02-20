
import React from 'react';
// import Images from '../../Images/favicon.png';

import './SearchBar.css';
const SearchBar = props => {
    return (
  
      <div className="search-bar-wrapper">
        <div className="social">
        <i className="fa fa-instagram" />
        </div>
        <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
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
        {/* <img src={Images} /> */}
      </div>
   
    );
  };
  
  export default SearchBar;
