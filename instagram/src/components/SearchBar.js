import React from 'react';
import './SearchBar.css';
import logo from '.././assets/ig_search_bar.png';

const SearchBar = props => {
    return (
        <div className= "searchBar_wrapper">
            <div>
                <img src={logo} alt="header-searchBar-img" height="42" width="800"></img>
            </div>
        </div>
    )
} 

export default SearchBar;