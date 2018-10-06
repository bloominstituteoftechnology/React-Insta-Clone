import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchBar">
                <div className="instagram">
                    <i className="fab fa-instagram"></i>
                    <img className="instagramTitle" alt="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                </div>
                
                <input type="text" placeholder="search" className="search"></input>

                <div className="icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>

                </div>
            </div>
        )

    }
};

export default SearchBar;