import React from 'react';
import './Icons.css';

const Icons = props => {
    return (
        <div className="icons">
            <img src={props.logo} alt='Logo'/>
            <img src={props.logo} alt='Logo'/>
            <img src={props.logo} alt='Logo'/>
        </div>
    );
}

export default Icons;