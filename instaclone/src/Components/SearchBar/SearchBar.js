import React from 'react';
import './SearchBar.css';

import logo_name from './imgs/instagram_logo.svg'
import compass_icon  from './imgs/compass.svg'
import heart_icon  from './imgs/heart.svg'
import search_icon from './imgs/search.svg'
import person_icon from './imgs/person.svg'


const SearchBar = () => {
    return ( 
        <div className="nav-bar-container">
            <div className="branding-container">
                <img src={process.env.PUBLIC_URL + `/imgs/logo.jpg`} alt="logo" srcset="" className="logo"/>
                <div className="divider"></div>
                <img src={logo_name} alt="meh" className="logo-name"/>
            </div>
            

            <div className="input-container">
                <input type="text" className="search-input" placeholder="Search"/>
                {/* <img src={search_icon} alt="" className="search-icon"/> */}
            </div>
            

            <div className="icon-container">
                <img src={compass_icon} alt="" className="icon compass-icon"/>
                <img src={heart_icon} alt="" className="icon heart-icon"/>
                <img src={person_icon} alt="" className="icon person-icon"/>
            </div>
               
        </div> 
    );
}
 
export default SearchBar;