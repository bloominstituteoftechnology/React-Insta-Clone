import React from 'react';
import logo from './imgs/logo.png';
import logotxt from './imgs/logo-txt.png';

const SearchBar = () => {
   return(
    <div className="search-bar-container">
        <div className="logo">
            <img className="logoBox"src={logo} alt=""/>
            <p className="logoPipe">|</p>
            <img className="logoTxt" src={logotxt} alt=""/>
        </div>
        <div>
            <input type="text"/>
        </div>
        <div>
            <p>text</p>
        </div>
    </div>
   );
}

export default SearchBar;