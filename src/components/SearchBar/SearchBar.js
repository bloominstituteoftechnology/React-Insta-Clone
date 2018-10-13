import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import styled from 'styled-components';

// CSS Styled components
const WrapperBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    height: 50px;
    width: 800px;
    margin: 0px auto 40px;
    padding: 0px 15px;
    background-color: white;
`;

// Main container for the header/search bar.

const SearchBar = (props) => {
    // Gets props:
        // searchHandler: ()
    return (
        <WrapperBar>
            <Logo />
            <Search searchHandler={props.searchHandler} />
            <Menu />
        </WrapperBar>
    );
}

export default SearchBar;