import React from 'react';
import './PostContainer.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <img src={props.thumbnail} alt="Profile Header"/>
            <p>{props.username}</p>
        </div>
    );
};

export default Header;