import React from 'react';
import './Logo.sass';

const Logo = props => {
    return (
        <div className="logo">
            <span className="logo--image" />
            <div className="logo--seperator" />
            <span className="logo--text" />
        </div>
    );
};

export default Logo;
