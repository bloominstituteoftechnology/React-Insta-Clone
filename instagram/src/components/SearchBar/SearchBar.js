import React from 'react';
import './SearchBar.css';

export const SearchBar = (props) => {
    return (
        <div className="SearchBar__Main">
            <a className="SearchBar__Button">Instaslam</a>
            <input className="SearchBar__Input" placeholder="Search"></input>
            <div>
                <a className="SearchBar__Button">C</a>
                <a className="SearchBar__Button">H</a>
                <a className="SearchBar__Button">P</a>
            </div>
        </div>
    )
};