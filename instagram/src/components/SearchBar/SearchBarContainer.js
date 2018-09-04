import React from 'react';
import iglogo from './iglogo.png';
import './SearchBar.css';

const SearchBar = ()=> {
    return (
        
        
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
            <img className="iglogo" src={iglogo} alt="instagram-logo"/>
            </div>
            <div>
            <form>
            <input type="text" placeholder="Search"/>
            </form>
                    </div>
                  <div className= "social wrapper">
                <div className="social">
                    <i className="fa fa-compass" />
                </div>
                <div className="social">
                    <i className="fa fa-heart" />
                </div>
                <div className="social">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;










