import React from 'react';
import IGLogo from './../../assets/IGLogo.png'
import CameraLogo from './../../assets/CameraLogo.png'
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-section-wrapper">
                <div className="image-wrapper">
                    <img alt="camera logo" src={CameraLogo} className="logo-image" />
                </div>
                <div className="image-wrapper">
                    <img alt="instagram logo" src={IGLogo} className="logo-image" />
                </div>
            </div>    
            <div>
                <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
            <div className="social-wrapper">
                <div className="social">
                    <i className="fa fa-compass" />
                </div>
                <div className="social">
                    <i className="fa fa-heart" />
                </div>
                <div className="social">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;