import React from 'react';

import Compass from '../../img/compass.svg';
import Heart from '../../img/heart.svg';
import User from '../../img/user.svg';

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={Compass} alt="compass" />
            <img src={Heart} alt="heart" />
            <img src={User} alt="user" />
        </div>
    );
}

export default Navigation;