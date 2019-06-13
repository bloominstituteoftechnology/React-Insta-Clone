import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchBarDiv = styled.div`
    position: relative;
    margin-right: 60px;
`;

const SearchInput = styled.input`
    width: 28rem;
    background-color: #FAFAFA;
    padding: 5px;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    margin: 0 auto;
    color: #A5A5A5;
    text-align: center;

    &:focus {
        outline: 0;
    }
`;


const SearchBar =  props => {
    return (
        <SearchBarDiv>
            <form>
                    <SearchInput
                        type="text"
                        name="searchText"
                        placeholder="&#x2315; Search"
                        value={props.searchText}
                        onChange={props.handlesChanges}
                        onClick={props.hasBeenClicked}
                    />
            </form>
        </SearchBarDiv>
    );
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    hanldesChanges: PropTypes.func,
}

export default SearchBar;