import React from 'react';
import './Icons.css';

const Icons = props => {
    return (
        <div className="icons">
            <img src={props.icon} alt='icon'/>
            <img src={props.icon} alt='icon'/>
            <img src={props.icon} alt='icon'/>
        </div>
    );
}

export default Icons;