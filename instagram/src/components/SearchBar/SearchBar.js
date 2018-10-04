import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchBar">
                <img src="https://images.vexels.com/media/users/3/137201/isolated/preview/83b5f2a86fa0ec9f938664da94a9bc55-instagram-silhouette-stroke-logo-by-vexels.png" className="instagramTitle"></img>
                <input type="text" placeholder="Search" className="search"></input>
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