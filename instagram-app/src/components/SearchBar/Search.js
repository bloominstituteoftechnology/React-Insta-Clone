import React from 'react';

const SearchBar = () => {
    return (
        <header className="search-bar">
            <div className="left-hand">
                <img src="/icons.png" alt="instagram icons"/>
            </div>
            <div className="middle-search">
                <input className="search" type="text" placeholder="Search" />
            </div>
            <div className="right-hand">
                <img src="/icons2.png" alt="instagram icons"/>
            </div>
        </header>
    )
}

export default SearchBar;   