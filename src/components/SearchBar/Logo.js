import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoName from '../../assets/instagram.png';

const Logo = () => {
    // 29x29 halfwidth on all sides
    return(
        <div className='logo'>
            <FontAwesomeIcon icon={['fab','instagram']} size='2x' />
            <img className='logoName' src={logoName} alt=''/>
        </div>
    );
};

export default Logo;