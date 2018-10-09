import React, {Component} from 'react';
const SearchBar =(prop)=>{
    return (
        <div>
            <input type='text' placeholder='search for something'></input>
            <button type='submit'>Search</button>
        </div>
    )
}
export default SearchBar;