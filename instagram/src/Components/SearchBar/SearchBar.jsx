import React from 'react';

import './SearchBar.css';

function SearchBar() {
    return (
        <div className='searchBar'>
            <div className='logo'>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <h1>Instagram</h1>
            </div>
            <section>
                <input type='text' placeholder='search'></input>
            </section>
            <div className='icons'>
                <i className="fa fa-compass" aria-hidden="true"></i>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;