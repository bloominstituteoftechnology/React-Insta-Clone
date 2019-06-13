import React from 'react';

const SearchBar = () => {
    return (
        <header className="search-bar">
            <div className="left-hand">
              <i className="fab fa-instagram"></i>
              <p>|</p>
              <p>Instagram</p>
            </div>
            <div className="middle-search">
            <input className="search" type="text" placeholder="Search" />
            </div>
            <div className="right-hand">

            </div>
        </header>
    )
}
 
export default SearchBar;