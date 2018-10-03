import React from 'react';
import compass from '../../assets/compass.jpg';
import heart from '../../assets/heart.jpg';
import profile from '../../assets/profile.jpg';

const Menu = () => {
    return (
        <div className='menu'>
            <img className='compass' src={compass} alt=''/>
            <img className='heart' src={heart} alt=''/>
            <img className='profile' src={profile} alt=''/>
        </div>
    );
};

export default Menu;