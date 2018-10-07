import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <div className="company">
                    <h1><i className="fab fa-instagram"></i>Instagram</h1>
                </div>
                <div className="search">
                    <input placeholder="&#8981;&nbsp;Search" />
                </div>
                <div className="links">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;