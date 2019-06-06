import React from 'react';

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo"  className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onChange={props.handleChange}  value={props.text}/>
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
    </div>
  );
};

export default SearchBar;
