import React from 'react';
import './SearchBar.css';

const SearchLogo = (props) => {
    return (
        <div className='search-logo'>
            <i className="fab fa-instagram fa-2x"></i>
            <div className='divider'> | </div>
            <img
                className='instagram'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                alt='instagram'
            />
        </div>
    )
}

export default SearchLogo;