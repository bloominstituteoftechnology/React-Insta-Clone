import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className='container'>
      <div className='form'>
        <form>
          <input
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </div> // container
  )
}

export default SearchBar;
