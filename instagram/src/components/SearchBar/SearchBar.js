import React, { Component } from 'react';
import './SearchBar.css'
import logo from './img/logo.png'

class SearchBar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar nav_left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="navbar nav_center">
          <input className="searchbar" type="text" placeholder="Search" />
        </div>
        <div className="navbar nav_right">
          <i className="far fa-compass fa-lg findpeople"></i>
          <i className="far fa-heart fa-lg activity"></i>
          <i className="far fa-user fa-lg profile"></i>
        </div>
      </div>  
    )
  }
}

export default SearchBar