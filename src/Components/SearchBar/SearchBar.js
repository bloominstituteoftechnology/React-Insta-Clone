import React from 'react';
import icon from '../../assets/icon_instagram_2.jpg';
import instagram_logo from '../../assets/instagram_logo.jpg';
import like from '../../assets/like.png';
import person from '../../assets/person.png';
import instagram_compass from '../../assets/instagram_compass.jpg';
import search_icon from '../../assets/search-solid.svg';
import InstagramLogo from './InstragramLogo';
import InstagramIcons from './InstagramIcons';
import './SearchBar.css';


const SearchBar = props => {
    return (
    <div className="navbar">
        <InstagramLogo 
            logo={instagram_logo}
            icon={icon}
        />
        <div className="search-input">
            <img src={search_icon} alt="search"/>
            <input type="text" placeholder="Search"/>
        </div>
        <InstagramIcons 
            like={like}
            person={person}
            compass={instagram_compass}
        />
            
    </div>
    )
}

export default SearchBar;