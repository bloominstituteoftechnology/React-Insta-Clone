import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-bar">
                <div className="icon-cam"><i className="fas fa-camera-retro fa-3x"></i></div>
                <div className="name"><span className="app-name">Exchange-O-Gram</span></div>
                <div className="search-con"><span className="input-icon"><i className="fas fa-search fa-lg"></i></span><input className="search-input" placeholder="Search"></input></div>
                <div className="icons"><i className="far fa-heart fa-2x"></i><i className="far fa-user fa-2x"></i></div>
            </div>
        )
    }
}

export default SearchBar;