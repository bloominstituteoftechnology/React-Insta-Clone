import React from 'react';
import './SearchBar.css';
import SearchButtons from './SearchButtons.js';
import SearchInput from './SearchInput.js';
import SearchLogo from './SearchLogo.js';
import styled from 'styled-components';

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    margin: 0 auto;
`

const SearchBar = (props) => {
    return (
        <Search>
            <SearchLogo />
            <SearchInput search={props.search} />
            <SearchButtons />
        </Search>
    )
}

export default SearchBar;