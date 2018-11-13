import React from 'react';
import './SearchBar.css';

function SearchBar(){
    return(
        <div className='search-bar'>
            <div>
                <img src='#' alt='create post'/>
                <span>|</span>
                <a className='logo' href='#'>Instagram</a>
            </div>
            <form className='search'>
                <input>
                </input>
            </form>
            <div className='nav-buttons'>
                <div>nav</div>
                <div>favs</div>
                <div>profile</div>
            </div>
        </div>
    );
}

export default SearchBar;