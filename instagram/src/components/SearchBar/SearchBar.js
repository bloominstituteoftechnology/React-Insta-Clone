import React from 'react';
import Logo from './Logo';
import Search from './Search';
import AccountManagement from './AccountManagement';
import styled from 'styled-components';

const Header = styled.header`
    border-bottom: 0.5px solid lightgrey;
    background: white;
    z-index: 2000;
    position: fixed;
    width: 100%;
`;

const Nav = styled.nav`
    min-height: 25px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 19px 25.52% 13px;
    width: 100%;
`;


let SearchBar = props => {
    return (
        <Header>
            <Nav>
                <Logo />
                <Search searchHandler={props.searchHandler}/>
                <AccountManagement />
            </Nav>
        </Header>
    )
}

export default SearchBar;