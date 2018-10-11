import React from 'react';

import Compass from '../../img/compass.png';
import Heart from '../../img/heart.png';
import User from '../../img/user.png';

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