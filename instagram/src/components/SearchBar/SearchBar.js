import React from 'react';
import './SearchBar.css'
import Camera from '../../assets/Camera.jpg';
import instagram from '../../assets/instagram.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';

const SearchBar = props => {
    return (
        <div className="sbContainer">
            <div className="sbLeft">
                <img className="sbImage sbCamera" src={Camera} alt="Camera" />
                <img className="sbImage sbInsta" src={instagram} alt="Instagram Word" />
            </div>
            <input placeholder="Search">
            </input>
            <div>
                <img className="sbImage sbRight" src={compass} alt="Compass" />
                <img className="sbImage sbRight" src={heart} alt="Heart" />
                <img className="sbImage sbRight" src={person} alt="Person" />
            </div>
        </div>
    );
}

export default SearchBar;