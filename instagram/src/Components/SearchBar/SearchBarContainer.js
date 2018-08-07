import React from 'react';
import './SearchBar.css';
import Logo from './instalogo.png';

const SearchBar = () => {
    return (
        <div className="Search-Bar-Container">
        <div className="left-search">
          <i className="fab fa-instagram"></i>
          <img alt="insta-logo" className="sb-logo" src={Logo} />
        </div>
        <div className="input-search">
            <input type="text" placeholder="Search" />
        </div>
        <div className="right-search">
             <div className="right-logo">
             <i className="far fa-compass"></i>
             </div>
             <div className="right-logo">
             <i className="far fa-heart"></i>
             </div>
             <div className="right-logo">
             <i className="far fa-user"></i>
             </div>
            
        </div>
    </div>
    );
};

export default SearchBar;