import React from 'react';
import instagram from '../instagram.svg';
import compass from '../compass.svg';
import heart from '../heart.svg';
import user from '../user.svg';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <img src={instagram} className="instagram-logo" alt="logo" />

            <input type="text" placeholder="&#128269; Search" />

            <img src={compass} className="instagram-logo" alt="logo" />
            <img src={heart} className="instagram-logo" alt="logo" />
            <img src={user} className="instagram-logo" alt="logo" />
        </div>
    );
}

export default SearchBar;