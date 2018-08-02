import React from 'react';
import './SearchBarStyling.css';
import Logo from './iglogo.png';

const SearchBar = () => {
    return (
        <div className="Search-Bar-Container">
            <div className="left-search">
              <i className="fab fa-instagram"></i>
              <img alt="insta-logo" src={Logo} className="insta-logo-img" />
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