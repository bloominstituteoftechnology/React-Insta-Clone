import React from 'react';
import SearchLogo from './SearchLogo';
import './SearchBar.css'
import SearchInput from './SearchInput';
import SearchIcons from './SearchIcons';
import styled from "styled-components";
import Logout from './Logout';

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    background: #ffffff;
    border-bottom: 1px solid #efefef;
`;

const LogoHeader = styled.div`
    margin-right: -1%;
`;

// handles the search bar
function SearchBarContainer(props) {
    return (
        <Header>
            <LogoHeader>
                <SearchLogo />
            </LogoHeader>
            <div className="search-input">
                <SearchInput hdlSearch={props.hdlSearch}/>
            </div>
            <div className="logout-btn">
                <Logout forceUpd={props.forceUpd}/>
            </div>
            <div>
                <SearchIcons />
            </div>
        </Header>
    )
}

export default SearchBarContainer;