import React from 'react';
import './search.css';


const SearchBar = () => {
    return (
        <div className="header-container">
            <div className="image-container">
                <img className="instagram" src={require('./img/instagram.png')} />
            </div>
            <div class="search-input">
                <input type="text" placeholder="Search" />
            </div>  
            <div className="icons-container">
                <div className="nav">
                    <i className="fa fa-compass" />
                </div>
                <div className="heart"> 
                    <i className="fa fa-heart" />
                </div>
                <div className="person">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    );   
}

export default SearchBar;