import React from 'react';
import PersonButt from '../../img/person.png';
import './searchbar.css';

const PersonButton = () => {
    return (
        <div>
            <img className="Person-Button" src= {PersonButt} />
        </div>
    )
}

export default PersonButton;