import React, { Component } from 'react';
import './SearchBar.css';
import logo from './logo.svg';



const SearchBar = (props) => {
  return (
    <div className="masthead">
      <img src={logo} className="App-logo" alt="logo" />
      &loz; | Instagram&nbsp;
      <input
        type="text"
        placeholder="...I can help!"
      />
      &nbsp;&lambda; | &hearts; | lol
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default SearchBar;
