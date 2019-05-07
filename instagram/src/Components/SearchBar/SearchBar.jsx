import React from 'react';

import './SearchBar.css';


const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className='logo'>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <h1>Instagram</h1>
            </div>
            <section>
                <input type='text' placeholder='search' onChange={props.searchPostsHandler}></input>
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