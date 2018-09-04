import React from 'react';
import compass from './img/compass.png';
import heart from './img/heart.png';
import user from './img/user.png';

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="compass">
                <a href="#"><img src={compass} /></a>
            </div>

            <div className="heart">
                <a href="#"><img src={heart} /></a>
            </div>

            <div className="user">
                <a href="#"><img src={user} /></a>
            </div>
        </div>
    );
}

export default Navigation;