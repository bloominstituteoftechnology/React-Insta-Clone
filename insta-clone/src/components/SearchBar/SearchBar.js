import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='search-left'>
        <i className='fab fa-instagram' />
        <div className='logo'>Instagram</div>
      </div>
      <div className='search-input'>
        <input className="search" placeholder="&#x1F50D; Search" />
      </div>
      <div className='search-right'>
        <i className='far fa-compass' />
        <i className='far fa-heart' />
        <i className='far fa-user' />
      </div>
    </div>
  )
}

export default SearchBar;
