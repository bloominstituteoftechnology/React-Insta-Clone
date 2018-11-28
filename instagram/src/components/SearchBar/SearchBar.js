import React, { Component } from 'react';
import './SearchBar.css';


const SearchBar = props => {
  return(
    <div className='sb-container'>
      <div className='image-container'></div>
      <div>
        <input
          className='searchBar'
          type='text'
          placeholder='Search'
          onKeyDown={props.search}
        />
      </div>
      <div className='social-icon-container'>
        <span className='icon'>
          <i className="fas fa-compass" />
        </span>
        <span className='icon'>
          <i className="fas fa-heart" />
        </span>
        <span className='icon'>
          <i className="fas fa-user-circle" />
        </span>
      </div>
    </div>
)};

export default SearchBar;
