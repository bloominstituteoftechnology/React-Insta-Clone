import React from 'react';
import "./search.css";

function SearchBar(props) {
    return (
        <div>
            <header className='header-container'>
                <div className='left-side-logo'>
                    <img className='fab fa-instagram' src="" alt="instaclone logo" />
                    | InstaClone
                </div>
                <div className='searchBar-container'>
                    <input type="text" placeholder='search' />
                </div>                    
                <div className="right-side-logo">
                    <img className="far fa-compass" src="#" alt="IC icon 1"/>
                    <img className='far fa-heart' src="#" alt="IC icon 2"/>
                    <img className='far fa-user' src="#" alt="IC icon 3"/>
                </div>
            </header>
        </div>
    );
}

export default SearchBar;