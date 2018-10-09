import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="logo-container">
                    <img src="img/logo.png" alt="logo" />
                    <img src="img/wordmark.png" alt="Instagram" />
                </div>
                <input type="text"></input>
                <div className="profile-container">
                    <img src="img/compass.png" alt="compass" />
                    <img src="img/heart.png" alt="heart" />
                    <img src="img/person.png" alt="person" />
                </div>
            </div>
        )
    }
}

export default SearchBar;
