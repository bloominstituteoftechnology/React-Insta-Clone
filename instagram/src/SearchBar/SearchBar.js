import React, {Component} from 'react';
const SearchBar =(prop)=>{
    return (
        <div className='search-bar'>
            <input type='text' placeholder=' search for something'></input>
            <img className='search-icon' src="https://image.ibb.co/hPAfJp/search.png" alt="search"></img>
        </div>
    )
}
export default SearchBar;