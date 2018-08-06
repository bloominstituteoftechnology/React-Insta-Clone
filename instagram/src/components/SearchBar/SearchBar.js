import React from 'react';
import Instagram from './instagram.png'
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="image-container">
                <img src={Instagram} alt="instagram" className="instagram-img" />
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="icon-container">
                <div className="icon">
                    <i className="fa fa-compass" />
                </div>
                <div className="icon">
                    <i className="fa fa-heart" />
                </div>
                <div className="icon">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    );
};   

export default SearchBar;