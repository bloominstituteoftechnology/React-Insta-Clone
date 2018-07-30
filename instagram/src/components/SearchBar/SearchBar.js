import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return(
        <div className='search-bar-container'>
            <a className='icon'><i class="fab fa-instagram fa-4x"></i></a>

            <div className='horizontal-line'></div>
            <h1>Instagram</h1>
                
            <input className='search-input' type='search' placeholder='Search'/>
                
            <div className="nav-icons">
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
            </div>
        </div>
    )
}

export default SearchBar;