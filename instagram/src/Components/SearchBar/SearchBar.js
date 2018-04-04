import React from '.react';
import './SearchBar.css';

export const SearchBar = props => {
    return (
        <div className="SearchBar">
            <a className="SearchBar__Logo" href="/" disabled><i class="fab fa-instagram fa-2x"></i> <span className="SearchBar__Title">Instagram</span></a>
            <input className="SearchBar__Input" placeholder="&#128269; Search"></input>
            <span className="SearchBar__Buttons">
                <a className="SearchBar__Button" href="/"><i class="far fa-compass fa-2x"></i></a>
                <a className="SearchBar__Button" href="/"><i class="far fa-heart fa-2x"></i></a>
                <a className="SearchBar__Button" href="/"><i class="far fa-user fa-2x"></i></a>
            </span>
        </div>
    )
};