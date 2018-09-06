import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = 'search-container'>
        
            <div className = 'header-bar'>
            <div className = 'header-column'>
            <h1>Instagram</h1>
            </div>
            <div className = 'header-column'>
            <input type='search' placeholder = 'Search...' className='header-search' onKeyDown={props.search}></input>
            </div>
            <div className = 'header-column'>
            <button onClick={this.logout}>LOGOUT</button>
            </div>
          
          
          
          </div>
        </div>
    )
}

export default SearchBar;