import React from 'react';
import './SearchBar.css';

export const SearchBar = (props) => {
    return (
        <div className="SearchBar__Main">
            <div>
                <a><i class="fas fa-camera-retro fa-2x"></i><span className="SearchBar__Title">Instaslam</span></a>
            </div>
            <input className="SearchBar__Input" placeholder="&#128269; Search"></input>
            <div>
                <a><i className="SearchBar__Button" class="far fa-compass fa-2x"></i></a>
                <a><i className="SearchBar__Button" class="far fa-heart fa-2x"></i></a>
                <a><i className="SearchBar__Button" class="far fa-user fa-2x"></i></a>
            </div>
        </div>
    )
};