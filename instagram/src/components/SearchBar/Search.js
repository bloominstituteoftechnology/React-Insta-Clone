import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = props => {
    return (
        <div className='searchDiv'>
            <label htmlFor="searchInput"><FontAwesomeIcon icon={['fas', 'search']} className={"searchIcon"} /></label>
            <input 
            className="search" 
            id="searchInput" 
            type="text" 
            placeholder="Search"         
            // value={props.filterTarget}
            onChange={props.postHandler}
            name="filterTarget"
            />
        </div>
    );
}

export default Search;