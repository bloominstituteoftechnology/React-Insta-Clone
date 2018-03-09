import React from 'react';
import './SearchBar.css';

export const SearchBar = (props) => {
    return (
        <div className="SearchBar">
                <a className="SearchBar__Logo" href="/" disabled><i class="fas fa-camera-retro fa-2x"></i>  <span className="SearchBar__Title">Instaslam</span></a>
                <input className="SearchBar__Input" placeholder="&#128269; Search"></input>
            <span className="SearchBar__Buttons">
                <a className="SearchBar__Button" href="/"><i class="far fa-compass fa-lg"></i></a>
                <a className="SearchBar__Button" href="/"><i class="far fa-heart fa-lg"></i></a>
                <a className="SearchBar__Button" href="/"><i class="far fa-user fa-lg"></i></a>
            </span>
        </div>
    )
};