import React, { Component } from 'react';
// import dummyData from './dummy-data.js';
import './SearchBar.css';

const SearchBar = props => {
    return (
<div className="search-bar">
<i className="fa fa-instagram"></i>
{/* <img className="logo" src={logo} /> */}
<input placeholder="Search"></input>
<i className="fa fa-compass"></i>
<i className="fa fa-heart"></i>
<i className="fa fa-user"></i>
</div>

    );   
}


export default SearchBar;