import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return ( 
        <div className ='searchBar'>
            <p className = 'logo'>Instagram</p>
            <input type = 'text' placeholder='search' className='search'></input>
        </div>
     );
}
 
export default SearchBar;