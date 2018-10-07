import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
    return (
        <div className='searchDiv'>
            <label htmlFor="searchInput"><FontAwesomeIcon icon={['fas', 'search']} className={"searchIcon"} /></label>
            <input className="search" id="searchInput" type="text" placeholder="Search" />
        </div>
    );
}

export default Search;