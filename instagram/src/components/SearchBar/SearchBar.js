import React from 'react';
// import './SearchBar.sass';
import Logo from './Logo';
import SearchInput from './SearchInput';
import SocialIcons from './SocialIcons';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #fff;
    height: 77px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1;
    transition: height .2s ease-in-out;
    .search--content {
        max-width: 1010px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        padding: 26px 20px;
        justify-content: space-between;
    }
`;

const SearchBar = (props) => {
    return (
        <Nav className="search">
            <div className="search--content">
                <Logo />
                <SearchInput />
                <SocialIcons />
            </div>
        </Nav>
    );
};

export default SearchBar;
