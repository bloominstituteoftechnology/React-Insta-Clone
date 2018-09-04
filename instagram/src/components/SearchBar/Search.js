import React from 'react';

import './Search.css';

function Search(props) {
  return (
    <div className='search-bar'>

      <div className='left-header'>
        <div className='art-logo'></div>        
      </div>

      <div className='middle-header'>
        <input type='text' placeholder='Search'></input>
      </div>

      <div className='right-header'>
        <div className='compass'></div>
        <div className='heart'></div>
        <div className='profile-nav'></div>
      </div>

    </div>
  );
}

export default Search;