import React from 'react';
import compass from './img/compass.png';
import heart from './img/heart.png';
import user from './img/user.png';

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="compass">
                <button><img src={compass} alt="compass"/></button>
            </div>

            <div className="heart">
                <button><img src={heart} alt="heart"/></button>
            </div>

            <div className="user">
                <button><img src={user} alt="user"/></button>
            </div>
        </div>
    );
}

export default Navigation;