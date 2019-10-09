import React from 'react';

import Logo from './Logo';
import SearchInput from './SearchInput';
import Navigation from './Navigation';
import styled from 'styled-components';

const Header = styled.div`
    height: 60px;
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px auto;
`;

const SearchBar = props => {
    return (
        <Header>
            <Logo />
            <SearchInput submitSearch={props.submitSearch} />
            <Navigation />
        </Header>
    );
}

export default SearchBar;

