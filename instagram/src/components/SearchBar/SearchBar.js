import React, { Component } from 'react';
import './SearchBar.css';


const SearchBar = () => {
  return(
    <div className='sb-container'>
      <div className='image-container'></div>
      <div>
        <input className='searchBar' type='text' placeholder='Search'/>
      </div>
      <div className='social-icon-container'>
      </div>
    </div>
)};

export default SearchBar;
