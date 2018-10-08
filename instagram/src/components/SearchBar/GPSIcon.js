import React from 'react';
import GPSButton from '../../img/GPS.png';
import './searchbar.css';

const GPSIcon = () => {
    return (
        <div>
            <img className="GPS-Button" alt="''" src= {GPSButton} />
        </div>
    )
}

export default GPSIcon;