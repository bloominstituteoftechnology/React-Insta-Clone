import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './searchbar.css';

// import Compass from '../img/compass-regular.svg';


// Fonts by https://fontawesome.com/license

const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className="logos">
                <div className="picLogo">
                <img src={require('../img/instagram-brands.svg')} />
                </div>
                <div className="fontLogo">
                </div>
            </div>
            <div className="divBox">
                <input className="searchInput" type="text" autoCapitalize="none" placeholder="Search" />
            </div>
            <div className="icons">
                <div className="iconBox">
                    <img src={require('../img/compass-regular.svg')} />
                </div>
                <div className="iconBox">
                    <img src={require('../img/heart-regular.svg')} />
                </div>
                <div className="iconBox">
                    <img src={require('../img/user-regular.svg')} />
                </div>
            </div>
        </div >

    );
};

export default SearchBar;