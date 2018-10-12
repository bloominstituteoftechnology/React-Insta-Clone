import React from 'react';
import LogoContainer from '../LogoContainer/LogoContainer';
import SearchBar from '../SearchBar/SearchBar';
import ActionsContainer from '../ActionsContainer/ActionsContainer';
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    display:flex;
    alignItems:center;
    justify-content: space-between;
    padding-top:20px;
    background-color: white;
    position: fixed;
    width: 100%;
    max-width: 600px;
    padding-bottom:28px;
`

const SearchContainer = props => {
    return(
        <WrapperDiv>
            <LogoContainer />
            <SearchBar searchText={props.searchText} handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} />
            <ActionsContainer logout={props.logout} />
        </WrapperDiv>
        
    )
}

export default SearchContainer;