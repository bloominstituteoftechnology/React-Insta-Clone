import React from 'react';
import './SearchBar.css';
import InstagramLogo from '../../assets/InstagramLogo.png'
import SearchIcon from '../../assets/SearchIcon.png'
import CompassIcon from '../../assets/CompassIcon.png'
import HeartIcon from '../../assets/HeartIcon.png'
import UserIcon from '../../assets/UserIcon.png'

const SearchBar = () => {
    return (
        <div className="search-bar_container">
            <div className="search-bar_area">
                <div className="sba-section1">
                    <img className="logo" 
                    src={InstagramLogo} 
                    alt="instagram logo" />
                    <div className="separator">|</div>
                    <div className="text-logo">Instagram</div>
                </div>
                
                <div className="sba-section2">
                    <div className="search-box">
                        <img className="search-icon" 
                        src={SearchIcon} 
                        alt="search icon"/> 
                        Search
                    </div>
                </div>

                <div className="sba-section3">
                    <img className="compass icon"
                    src={CompassIcon}
                    alt="compass icon"/>
                    <img className="heart icon"
                    src={HeartIcon}
                    alt="heart icon"/>
                    <img className="user icon"
                    src={UserIcon}
                    alt="user icon"/>
                </div>
                
            </div>
        </div>
    );
};

export default SearchBar;