import React from 'react';
import './SearchBar.css';


const SearchBar = props =>{
    return(
        <div>
            <input placeholder='Search' type='text'className='search-bar-input'></input>
        </div>   
    )
}
export default SearchBar;