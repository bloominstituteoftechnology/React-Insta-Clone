import React from 'react';
import './SearchBar.css';


const SearchBar = props =>{
    return(
        <div>
            <form onSubmit={props.handleSearchSubmit}><input placeholder='Search' onChange={props.handleSearchChange}  type='text'className='search-bar-input'></input></form>
        </div>   
    )
}
export default SearchBar;