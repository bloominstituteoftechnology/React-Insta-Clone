import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    return (<div className="App-header">
        <div className="leftnav">
            <i className="fab fa-instagram"></i>
            <h4 className="instaText">Instagram</h4>
        </div>

        <form className="search">
            <input className="fa fa-input" placeholder="&#xf002; Search" />
        </form>

        <div className="rightnav">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i class="far fa-user"></i>
        </div>

    </div>);
}

export default SearchBar;