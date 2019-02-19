import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchbar">
            <img className="ig-logo" src="https://i.ibb.co/VwVtyJp/Instagram-TV-Broadcast-Photo.png" alt="instagram_logo"/>
            <input type="text" placeholder="Search" name="search" className="search"/>
            <div className="activity-icons">
                <img className="profile" src="https://i.ibb.co/BqY0r7s/profile.png" alt="profile"/>
            </div>
        </div>
    );
}

export default SearchBar;