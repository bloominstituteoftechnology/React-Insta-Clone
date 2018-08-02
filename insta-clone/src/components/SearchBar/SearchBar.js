import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className='search-bar'>
      <div className='search-left'>
        <i className='fab fa-instagram' />
        <div className='logo'>Instagram</div>
      </div>
      <div className="search-input">
        <div className="search-form">
          <input className="search" onChange={props.searchHandler} value={props.searchBar} onKeyPress={e => {if (e.charCode === 13){props.searchSubmit()}}} placeholder="Search" />
        </div>
        <div>
          <button className='submit-btn' onClick={props.searchSubmit}><span role='img' aria-label='search'>&#x1F50D;</span></button>
        </div>
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
