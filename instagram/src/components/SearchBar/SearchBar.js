import React from 'react';
import './search.css';


const SearchBar = () => {
    return (
        <div className="header-container">
            <div className="image-container">
                
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>  
            <div className="icons-container">
                <i className="fa fa-compass" />
                <i className="fa fa-heart" />
                <i className="fa fa-user-circle" />
            </div>
        </div>
    );   
}

export default SearchBar;