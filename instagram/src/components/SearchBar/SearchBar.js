import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <div className = 'header-bar'>
          <h1>Instagram</h1>
          <input type='search' placeholder = 'Search...'></input>
          </div>
        </div>
    )
}

export default SearchBar;