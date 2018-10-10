import React from 'react';

import './SearchBar.css';



const SearchBar = props => (
  <div className='searchbar'>
    <div className='left-items'>
      <div className='logo'></div>
      <div className="vertical-divider"></div>
      <div className="text-logo"></div>
    </div>
    <div className='search'>
      <input 
        type='text' 
        className='search-input'
        placeholder='search' 
        onKeyUp={props.searchPosts}
      />
    </div>
    <div className='right-items'>
    <div className='explore'></div>
    <div className="activity"></div>
    <div className="profile"></div>
    </div>
  </div>
);



export default SearchBar;