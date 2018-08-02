import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SearchBarComponent = styled.div`
    display: flex;
    height: 50px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    max-width: 640px;
    width: 100%;
`

const InstagramIcon = styled.div`
    .icon {
        font-size: 32px;
    }
    img {
        width: 100px;
    }
`

const SearchInput = styled.input`
    border: 1px solid grey;
    border-radius: 8px;
    height: 60%;
    text-align: center;
    margin: 0;
    &:focus {
        outline: none;
    }
`

const IconHolder = styled.div`
    .icon {
        font-size: 24px;
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const SearchBar = (props) => {
    return(
        <SearchBarComponent>
            <InstagramIcon>
                <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" /> | <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt="instagram" className="instagram-text" />
            </InstagramIcon>
            <SearchInput type="text" placeholder="Search" onChange={props.onSearch} ></SearchInput>
            <IconHolder>
                <FontAwesomeIcon icon={['far', 'compass']} className="icon" />
                <FontAwesomeIcon icon={['far', 'heart']} className="icon" />
                <FontAwesomeIcon icon={['far', 'user']} className="icon" />
            </IconHolder>
        </SearchBarComponent>
    );
}

export default SearchBar;