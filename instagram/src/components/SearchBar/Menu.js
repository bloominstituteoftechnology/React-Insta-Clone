import React from 'react';
import './searchbar.css';

const Menu = () => {
    return (
        <div className='menu'>
            <img className = 'compass' src={require('../assets/compass.jpg')} alt={'compass'}></img>
            <img className = 'heart' src={require('../assets/heart.jpg')} alt={'heart'}></img>
            <img className = 'profile' src={require('../assets/profile.jpg')} alt={'profile'}></img>
        </div>
    );
};

export default Menu;