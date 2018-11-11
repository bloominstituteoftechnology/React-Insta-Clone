import React from 'react';
import './Searchbar.css';
import Searchbar from './Searchbar';
import logo from '../Images/instagramScript.svg';


const SearchBarContainer = props => {

  return (
    <header>
      <div className="searchbar-container">
        <div className="searchbar-left">
          <i className="fab fa-instagram"></i>
          <img src={logo} alt="instagram script logo"/>
        </div>
        <Searchbar />
        <div className="searchbar-right">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    </header>
  )
}

export default SearchBarContainer;
