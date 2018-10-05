import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Menu = () => {
    return (
        <div className='menu'>
            <FontAwesomeIcon icon={['far','compass']} />
            <FontAwesomeIcon icon={['far','heart']} />
            <FontAwesomeIcon icon={['far', 'user']} />
        </div>
    );
};

export default Menu;