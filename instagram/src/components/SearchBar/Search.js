import React from 'react';
import iglogo from '../../assets/iglogo.png';
import './Search.css';

const Search = props => {
    return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <i className="fab fa-instagram"></i>
      </div>
      <div className="logo-wrapper">
      <img alt="instagram logo" src={iglogo} className="logo-image"/>
      </div>
      <div>
        <input className="search-bar" type="text" placeholder="Search" />
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