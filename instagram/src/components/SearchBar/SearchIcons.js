import React from 'react';
import styled from 'styled-components';

const IconsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 20%;

& > * {
    cursor: pointer;
    font-size: 3rem;
}
`;

const SearchIcons = (props) => {
    return (
        <IconsContainer>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user" onClick={props.handleLogout}></i>
        </IconsContainer>
    )
}

export default SearchIcons;