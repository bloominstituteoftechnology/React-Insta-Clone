import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div className = "main-div">
            <div>
                <img src = " "/>
                <label>Instagram</label>
            </div>

            <div>
                <input type="search" placeholder="Search..."  autocomplete="off" />
            </div>

            <div>
                <img src = " "/>
                <img src = " "/>
                <img src = " "/>                
            </div>
        </div>
    )
};

export default SearchBar;
