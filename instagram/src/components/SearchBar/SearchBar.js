import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <nav className="navContainer">
            <img src="" alt="Instagram Logo" />
            <h1>Instagram</h1>
            <form onSubmit={props.filterPost}>
                <input onChange={props.inputFilteredUserName} type="text" placeholder="Search" />
            </form>
            <img src="" alt="Explore" />
            <img src="" alt="Activity Feed" />
            <img src="" alt="Profile" />
        </nav>
    );
};

export default SearchBar;