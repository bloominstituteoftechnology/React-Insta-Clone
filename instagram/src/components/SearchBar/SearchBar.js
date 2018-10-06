import React from 'react'
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <div class="search-bar">
                <div class="company-logo">
                    <div><i class="fab fa-instagram"></i></div>
                    <h1>Instagram</h1>
                </div>
                <div class="search-field">
                    <input placeholder="Search" />
                </div>
                <div class="links">
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;