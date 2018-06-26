import React from 'react';
import iglogo from '../../assets/iglogo.png';
import './Search.css';

const Search = props => {
    return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <img alt="instagram logo" src={iglogo} className="logo-image"/>
      </div>
      <div>
        <input type="text" placeholder="Search" />
        </div>
      <div>
        <i className="far fa-compass"/> 
        <i className="far fa-heart"/>
        <i className="far fa-user-circle"/>
        </div>
        </div>
  );
};

export default Search;