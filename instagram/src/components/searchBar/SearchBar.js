import React, { Component } from 'react';
import instagramLogo from '../../../../assets/Instagram-Logo.png';
import InstagramWriting from '../../../../assets/Instagram-Grigio.png'

const searchBar = props => {
    return (
        <div>
            <img src={instagramLogo} />
            <img src={InstagramWriting} />
            <input type='text' placeholder='search' />
        </div>    
    )
}

export default searchBar;