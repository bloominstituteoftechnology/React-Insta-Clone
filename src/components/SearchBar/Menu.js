import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

// CSS Styled components
const WrappedMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
`;


const Menu = () => {
    return (
        <WrappedMenu>
            <FontAwesomeIcon icon={['far','compass']} />
            <FontAwesomeIcon icon={['far','heart']} />
            <FontAwesomeIcon icon={['far', 'user']} />
        </WrappedMenu>
    );
};

export default Menu;