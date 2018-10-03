import React from 'react';
import logo from '../../assets/logo.png';
import logoName from '../../assets/instagram.png';

const Logo = () => {
    // 29x29 halfwidth on all sides
    return(
        <div className='logo'>
            <img className='logoIcon' src={logo} alt=''/>
            <img className='logoName' src={logoName} alt=''/>
        </div>
    );
};

export default Logo;