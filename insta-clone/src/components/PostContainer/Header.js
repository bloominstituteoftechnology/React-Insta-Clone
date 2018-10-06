import React from 'react';
import './PostContainer.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <img className="header-img" src={props.thumbnail} alt="Profile Header"/>
            <p><strong>{props.username}</strong></p>
        </div>
    );
};

export default Header;