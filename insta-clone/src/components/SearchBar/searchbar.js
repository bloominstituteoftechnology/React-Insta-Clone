import React from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <a href="/" className="SearchBar-Logo" disabled><i class="fa fa-instagram fa-2x"></i><span className="SearchBar-Title">Instagram</span></a>
            <input className="SearchBar-Input" placeholder="&#128269; Search"></input>
            <span className="SearchBar-Buttons">
                <a href="/" className="SearchBar-Button"><i class="fa fa-compass fa-lg"></i></a>
                <a href="/" className="SearchBar-Button"><i class="fa fa-heart fa-lg"></i></a>
                <a href="/" className="SearchBar-Button"><i class="fa fa-user fa-lg"></i></a>
            </span>
        </div>
    )
};

export default SearchBar;