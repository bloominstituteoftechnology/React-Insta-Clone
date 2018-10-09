import React from 'react';

import Compass from '../../img/compass.svg';
import Heart from '../../img/heart.svg';
import User from '../../img/user.svg';

const Navigation = props => {
    return (
        <div className="navigation">
            <img src={Compass} />
            <img src={Heart} />
            <img src={User} />
        </div>
    );
}

export default Navigation;