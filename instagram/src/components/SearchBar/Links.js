import React from 'react';
import './Links.css';

const Links = props => {
    return (
        <div className="logo">
            <img src={props.logo} alt='Logo'/>
             |
            <h2>{props.titleLogo}</h2>
        </div>
    );
}

export default Links;