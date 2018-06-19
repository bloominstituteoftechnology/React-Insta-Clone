import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './SearchBar.css';

const SearchBar = props => {
    return (
<div className="search-bar">
<i class="fab fa-instagram"></i>
{/* <img className="logo" src={logo} /> */}
</div>
<input placeholder="Search"></input>
<i class="far fa-compass"></i>
<i class="far fa-heart"></i>
<i class="far fa-user"></i>
    );   
}


export default SearchBar;