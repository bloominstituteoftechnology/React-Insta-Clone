import React from 'react';
import logo from './imgs/logo.png';
import logotxt from './imgs/logo-txt.png';
import heart from './imgs/heart.png';
import compass from './imgs/compass.png';
import user from './imgs/user.png';

const SearchBar = () => {
   return(
    <div className="search-bar-container">
        <div className="logo">
            <img className="logoBox"src={logo} alt=""/>
            <span className="logoPipe">|</span>
            <img className="logoTxt" src={logotxt} alt=""/>
        </div>
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Search"/>
        </div>
        <div className="search-bar-icons">
            <img className="search-icons" src={compass} alt=""/>
            <img className="search-icons" src={heart} alt=""/>
            <img className="search-icons" src={user }alt=""/>
        </div>
    </div>
   );
}

export default SearchBar;