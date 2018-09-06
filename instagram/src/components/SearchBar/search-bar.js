import React from 'react';
import './search-bar.css';

const SearchBar = props => {
  return(
    <div className='search-container'>
      <div className='sprite-search' id='logo' />
      <form>
      <input type="text" placeholder='Search' onKeyDown={props.searchHandler} />
      </form>
      <div className='sprite-search' id='explore' />
      <div className='sprite-search' id='liked' />
      <div className='sprite-search' id='profile' />
    </div>
  );

};

export default SearchBar;