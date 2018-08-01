import React from 'react';
import './search.css';

const SearchBar = props => {
  return(
    <div className="search-bar">
      <div className="search-bar-left">
        <i className="fab fa-instagram icons"></i>
        <div className="company-name"> | Instagram</div>
      </div>
      <input className="search-input" type="text" placeholder="&#xF002; Search" onChange={props.filter}/>
      <div className="search-bar-right">
        <i className="far fa-compass icons"></i>
        <i className="far fa-heart icons"></i>
        <i className="far fa-user icons" onClick={props.handleLogout}></i>
      </div>
    </div>
  );
};

export default SearchBar;
