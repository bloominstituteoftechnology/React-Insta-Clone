import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <header className="searchBar">
             <input type="text" placeholder="search" className="searchField" />
            </header>
        </div>
    )
}

export default SearchBar;