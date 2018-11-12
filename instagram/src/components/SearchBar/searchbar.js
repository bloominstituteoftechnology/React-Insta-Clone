import React from 'react';

import './searchbar.css';


const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className="logos">
                <div className="picLogo">
                </div>
                <div className="fontLogo">
                </div>
            </div>
            <input className="searchInput" type="text" autoCapitalize="none" placeholder="Search" />
            <p>compass</p>
            <p>heart</p>
            <p>person</p>
        </div >

    );
};

export default SearchBar;