import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-bar">
                <div><i className="fas fa-camera-retro fa-2x"></i><span className="app-name">Exchange-O-Gram</span></div>
                <input className="search-input" placeholder="Search"></input>
                <span><i className="far fa-heart"></i><i className="far fa-user"></i></span>
            </div>
        )
    }
}

export default SearchBar;