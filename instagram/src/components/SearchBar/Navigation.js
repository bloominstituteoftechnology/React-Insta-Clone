import React from 'react';

import Compass from '../../img/compass.png';
import Heart from '../../img/heart.png';
import User from '../../img/user.png';

import styled from 'styled-components';

const Image = styled.img`
    margin: 0 10px;
`;

const Navigation = () => {
    return (
        <div className="navigation">
            <Image src={Compass} alt="compass" />
            <Image src={Heart} alt="heart" />
            <Image src={User} alt="user" />
        </div>
    );
}

export default Navigation;