import React from 'react';
import '../SearchBar/SearchBar.css';

import LogoPicture from '../../img/glyph-logo_May2016.png';

const Logo = props => {
    return (
        <div className="logo">
            <img src={LogoPicture} alt="Instagram logo" className="instagram-logo" />
            <h1 className="instagram-logo-font">Instagram</h1>
        </div>
    );
}

export default Logo;