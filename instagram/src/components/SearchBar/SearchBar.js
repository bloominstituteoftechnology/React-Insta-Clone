import React from 'react';
import logo from './logo.png';
import './Search.css';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const SearchBar = () => {

    return(
        <div className="searchbar-wrapper">
            <div className="navs img-logo">
                <img src={logo} alt="insta-logo" />
                <h3>Instagram</h3>
            </div>
            <div className="navs search">
                <button>
                    <i className="fa fa-search"></i>
                    Search
                </button>
            </div>
            <div className="navs icons">
                <div className="icons">
                    <i className="fa fa-compass"></i>
                </div>
                <div className="icons">
                    <i className="fa fa-heart-o"></i>
                </div>
                <div className="icons">
                    <i className="fa fa-user-o"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;