import React from 'react';
import styled from 'styled-components';

const Icons = styled.div`
display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    min-width: 112px;
    padding-right: 8px;
`;

const Img = styled.img`
    width: 18px;
    height: auto;
`;

let AccountManagement = () => {
    return (
        <Icons>
            <Img alt="Discover" className="compass" src={require('./assets/compass.png')}/>
            <Img alt="Liked" className="heart" src={require('./assets/heart.png')} />
            <Img alt="Account" className="person" src={require('./assets/person.png')} />
        </Icons>
    )
}

export default AccountManagement;