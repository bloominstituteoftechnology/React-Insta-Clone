import React from 'react';
import "./search.css";

function SearchBar(props) {
    return (
        <div>
            <header className='header-container'>
                <div className='left-side-logo'>
                    <img src="" alt="instaclone logo" />
                </div>
                <div className='searchBar-container'>
                    <input type="text" placeholder='search'/>
                </div>                    
                <div className="right-side-logo">
                    <img src="#" alt="IC icon 1"/>
                    <img src="#" alt="IC icon 2"/>
                    <img src="#" alt="IC icon 3"/>
                </div>
            </header>
        </div>
    );
}

export default SearchBar;