import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchBar">
                <div className="instagram">
                    <i class="fab fa-instagram"></i>
                    <img className="instagramTitle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                </div>

                <input type="text" placeholder="search" className="search"></input>

                <div className="icons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>

                </div>
            </div>
        )

    }
};

export default SearchBar;