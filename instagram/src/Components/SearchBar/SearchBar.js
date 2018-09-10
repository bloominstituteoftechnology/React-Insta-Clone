import React from 'react';
import Camera from '../../photos/camera-logo.svg';
import Instagram from '../../photos/iglogo.png';
import Compass from '../../photos/Compass-Symbol.png';
import Heart from '../../photos/heart.svg';
import User from '../../photos/user-icon.png';
import './SearchBar.css';

const SearchBar = props => {
        return (
            <div className="search-bar-wrapper">
                <div>
                    <img alt="cam-logo" src= {Camera} className="logo"/>
                    <img alt="inst-logo" src= {Instagram} className="logo" />
                </div>
                <div>
                    <input type="text" placeholder="search" />
                </div>
                <div>
                   <img alt='compass' src= {Compass} className="logo" />
                   <img alt='heart' src= {Heart} className="logo" />
                   <img alt='user icon' src= {User} className="logo" />
                </div>
            </div>
        );
}

export default SearchBar;