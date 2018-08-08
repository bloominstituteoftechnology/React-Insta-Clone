import React from 'react';
//import IGLogo from '../../assets/iglogo.png';
import './searchbar.css'

let SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            onClick={function(event) {
            event.currentTarget.childNodes[1].classList.toggle("visible");}}
            <div className="social-wrapper">
                <div classname="social">
                <i classname="fa fa-compass" />
            </div>
            <div classname="social">
                <i classname="fa fa-heart" />
            </div>
            <div className="social">
                <i className="fa fa-user-circle" />
            </div>
        </div>
    </div>
    );
}

export default SearchBar