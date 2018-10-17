import React from 'react';
import './searchbar.css'



const SearchBar = props => {
    return (
        <div className="searchbar">
        {/* <img src='icons8-instagram-50.png' /> */}
        <p>Instagram</p>
        <input type="text" name="Search" />
        </div >
    )
}

export default SearchBar;