import React from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
        width: 25%;
        display: flex;
        justify-content: space-around;

        i:hover {
        cursor: pointer;
    }
`

const SearchButton = (props) => {
    return (
        <Buttons>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </Buttons>
    )
}

export default SearchButton;