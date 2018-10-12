import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 30%;


    .fa-instagram {
        margin-right: 8%;
        margin-left: 5%;
    }

    .instagram {
        width: 55%;
        border-left: 1px solid grey;
        padding-left: 8%;
    }

    .instagram:hover {
        cursor: pointer;
    }

    .fa-instagram:hover {
        cursor: pointer;
    }
`

const SearchLogo = (props) => {
    return (
        <Logo>
            <i className="fab fa-instagram fa-2x"></i>
            <img
                className='instagram'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                alt='instagram'
            />
        </Logo>
    )
}

export default SearchLogo;