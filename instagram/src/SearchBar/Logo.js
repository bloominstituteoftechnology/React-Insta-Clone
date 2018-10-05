
import React from 'react';
import Instagram from '../icons/Instagram Word Logo.png';

const Logo = () => {
        return (
            <div className='logo'>

                <a href="#"> <i class="fab fa-instagram icon"></i> </a>

                <p className='grey'>|</p>

                <img src={Instagram} className='word-logo'></img>

            </div>
        )
};


export default Logo;





